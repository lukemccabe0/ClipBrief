// src/pages/api/summarize.js
require('dotenv').config();
import { fetchVideoDetails } from '../../backend/youtube';
import { fetchGPTSummary } from '../../backend/openai';
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { youtubeUrl } = req.body;

        try {
            const fullText = await fetchVideoDetails(youtubeUrl);
            const summary = await fetchGPTSummary(fullText);

            // Increment the counter
            const counterRef = doc(db, 'counters', 'summaries');
            await updateDoc(counterRef, {
                count: increment(1)
            });

            res.status(200).json({ summary });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to fetch summary' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
