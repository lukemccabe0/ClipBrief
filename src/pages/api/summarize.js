// src/pages/api/summarize.js
require('dotenv').config();
import { fetchVideoDetails } from '../../backend/youtube';
import { fetchGPTSummary } from '../../backend/openai';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { youtubeUrl } = req.body;

        try {
            const fullText = await fetchVideoDetails(youtubeUrl);
            const summary = await fetchGPTSummary(fullText);

            res.status(200).json({ summary });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to fetch summary' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
