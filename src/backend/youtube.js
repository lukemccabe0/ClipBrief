// Extracts Captions and Title and Returns as String 
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const ytdl = require('ytdl-core');

async function fetchVideoDetails(youtubeUrl) {
    try {
        console.log(`Fetching video details for URL: ${youtubeUrl}`);
        // Extract video ID from the YouTube URL
        const videoId = youtubeUrl.split('v=')[1].split('&')[0];

        // Fetch the video info
        const videoInfo = await ytdl.getInfo(youtubeUrl);
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
