import { fetchVideoDetails } from '../../../src/backend/youtube';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { youtubeUrl } = req.body;

        if (!youtubeUrl) {
            return res.status(400).json({ error: 'YouTube URL is required' });
        }

        try {
            const fullText = await fetchVideoDetails(youtubeUrl);

            // Define the path to save the captions file
            const filePath = path.join(process.cwd(), 'public', 'captions.txt');

            // Write the combined text (title + captions) to a text file
            fs.writeFileSync(filePath, fullText);

            // Send the response with the file path and full text
            return res.status(200).json({ message: 'Captions saved', filePath: '/captions.txt', fullText });
        } catch (error) {
            console.error('Error fetching captions:', error);
            return res.status(500).json({ error: 'Failed to fetch captions' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
