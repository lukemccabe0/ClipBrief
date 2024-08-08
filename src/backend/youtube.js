// Extracts Captions and Title and Returns as String 
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const ytdl = require('@distube/ytdl-core');
const fs = require('fs');

let agent;
try {
    const cookies = fs.readFileSync("cookies.json", "utf8");
    agent = ytdl.createAgent(JSON.parse(cookies));
} catch (error) {
    console.error("Error reading cookies.json:", error);
    throw error;
}

async function fetchVideoDetails(youtubeUrl) {
    try {
        console.log(`Fetching video details for URL: ${youtubeUrl}`);
        // Extract video ID from the YouTube URL
        const urlParams = new URLSearchParams(new URL(youtubeUrl).search);
        const videoId = urlParams.get('v');
        
        if (!videoId) {
            throw new Error('Invalid YouTube URL');
        }

        // Fetch the video info
        const videoInfo = await ytdl.getInfo(youtubeUrl, { agent });
        const videoTitle = videoInfo.videoDetails.title;

        // Fetch the captions
        const captions = await getSubtitles({
            videoID: videoId,
            lang: 'en'
        });

        // Convert captions to a single text string
        const captionsText = captions.map(caption => caption.text).join('\n');

        // Combine title and captions into a single string
        const fullText = `Title: ${videoTitle}\n\n${captionsText}`;
        return fullText;
    } catch (error) {
        console.error('Error fetching video details:', error);
        throw error;
    }
}

module.exports = { 
    fetchVideoDetails, 
};