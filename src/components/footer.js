import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Footer = () => {
  const [summaryCount, setSummaryCount] = useState(0);

  useEffect(() => {
    const fetchSummaryCount = async () => {
      const counterRef = doc(db, 'counters', 'summaries');
      const docSnap = await getDoc(counterRef);

      if (docSnap.exists()) {
        setSummaryCount(docSnap.data().count);
      } else {
        console.log("No such document!");
      }
    };

    fetchSummaryCount();
  }, []);
  return (
    <nav className="footer">
    <footer>
      <p>We have converted <b>{summaryCount}</b> videos to summaries! 🔥</p>
    </footer>
    </nav>
  );
};

export default Footer;
