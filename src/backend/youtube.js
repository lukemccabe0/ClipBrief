// Extracts Captions and Title and Returns as String 
const getSubtitles = require('youtube-captions-scraper').getSubtitles;
const ytdl = require('@distube/ytdl-core');
const agent = ytdl.createAgent([
    [
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299537,
            "hostOnly": false,
            "httpOnly": false,
            "name": "__Secure-1PAPISID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "YIq4wuvFHYhs5Jc8/AYP1zNDJx3rpKTEob",
            "id": 1
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299664,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-1PSID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "g.a000mgh1bxwFw4tvAE1lvcezxcPy58SyG2K7fmuPFNjohIPIz7aeGy_ht8RbtEhsM6O2RRGO2gACgYKAfkSARQSFQHGX2Mi2csH0d6A6p6i_75ONi7JbhoVAUF8yKpQBri_P7WPQNZ_yYhc-4wI0076",
            "id": 2
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1754612529.548667,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-1PSIDCC",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AKEyXzU0W2GsQRm4hIFFuOa0Z17Er5-F5P_rCkXfSWy9N88pbItWsMra8wHZMT-HHtCG0nUX",
            "id": 3
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1754612513.214487,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-1PSIDTS",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "sidts-CjEB4E2dkXub2R5XW7IlfYCCB0EUDLFXddqMqXK5Oj316XSK_lJ44JnxnR9YN5sK-R4AEAA",
            "id": 4
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299553,
            "hostOnly": false,
            "httpOnly": false,
            "name": "__Secure-3PAPISID",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "YIq4wuvFHYhs5Jc8/AYP1zNDJx3rpKTEob",
            "id": 5
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299679,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSID",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "g.a000mgh1bxwFw4tvAE1lvcezxcPy58SyG2K7fmuPFNjohIPIz7ae-aG07Ulqx4RRJsWVeLn7AwACgYKAUwSARQSFQHGX2MiqHCn411jVHhKIIkekefnmBoVAUF8yKpV80brxK70u71js0cNUhx-0076",
            "id": 6
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1754612529.548688,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSIDCC",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AKEyXzV5U_9hGteWjLKCEsuW8ioLUItchm9nrAL1imtehkVcyWFFXJvluhYoXOnFs0rHLkVrhA",
            "id": 7
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1754612513.214564,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSIDTS",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "sidts-CjEB4E2dkXub2R5XW7IlfYCCB0EUDLFXddqMqXK5Oj316XSK_lJ44JnxnR9YN5sK-R4AEAA",
            "id": 8
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299505,
            "hostOnly": false,
            "httpOnly": false,
            "name": "APISID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "jk2lJUgyIpWiV244/AfJtFTHUtjfsL2dKg",
            "id": 9
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1723078312.794106,
            "hostOnly": false,
            "httpOnly": true,
            "name": "GPS",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "1",
            "id": 10
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299422,
            "hostOnly": false,
            "httpOnly": true,
            "name": "HSID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "AeRBit0mrvnZ6askA",
            "id": 11
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299568,
            "hostOnly": false,
            "httpOnly": true,
            "name": "LOGIN_INFO",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AFmmF2swRgIhAKNCNmkoE1Y1utMNDmjq05QMT9qHEvYTf1MoegcHCdQ-AiEAxCIwj37GXLJeVovQspUtbJjn3raPkunakepxsdj7JXk:QUQ3MjNmeUR1UDNHU3FVOXVoeEIweTY1dzdZa28tbXYwVFNzVXNOX3VpZWxHcXZzTS1nZmZCdFNTbnptLWlqazZlSG1fSENNOG5rN0hJaFVuNExTWFFZRmJlU3Rrb01xMDgtb2FueFNnOF9Rb0pVX3BFNGQ0T244alZUYlIzdzhlZV9tRmIzOW1Fdlo2UHRiMFJaR2xMVlotNTdPb05kZ05R",
            "id": 12
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636524.359018,
            "hostOnly": false,
            "httpOnly": false,
            "name": "PREF",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "f6=40000000&tz=Europe.London&f7=100",
            "id": 13
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299522,
            "hostOnly": false,
            "httpOnly": false,
            "name": "SAPISID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "YIq4wuvFHYhs5Jc8/AYP1zNDJx3rpKTEob",
            "id": 14
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299649,
            "hostOnly": false,
            "httpOnly": false,
            "name": "SID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "g.a000mgh1bxwFw4tvAE1lvcezxcPy58SyG2K7fmuPFNjohIPIz7aei54FWX5G_RXLtpEIrVuJQwACgYKAXQSARQSFQHGX2MiBUw6ViLzRAxsPNnluXKWNhoVAUF8yKoHPUrCbUzkIVHzdWKV6zMZ0076",
            "id": 15
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1754612529.5486,
            "hostOnly": false,
            "httpOnly": false,
            "name": "SIDCC",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "AKEyXzXWKiXcAhpJDfqrFs530Iz00Ih-lxbKF_B4qffJrkx_JtYhiUWCI4FpQZ0EGByEAAEQ",
            "id": 16
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757036817.944054,
            "hostOnly": false,
            "httpOnly": false,
            "name": "SOCS",
            "path": "/",
            "sameSite": "lax",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "CAISOAgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjQwNzMwLjA1X3AwGgVlbi1HQiADGgYIgM_FtQY",
            "id": 17
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757636513.299488,
            "hostOnly": false,
            "httpOnly": true,
            "name": "SSID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "A37QEm6_VBKZaX8rW",
            "id": 18
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1738460817.944118,
            "hostOnly": false,
            "httpOnly": true,
            "name": "VISITOR_INFO1_LIVE",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "sE7l1j6TO2c",
            "id": 19
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1738628517.232327,
            "hostOnly": false,
            "httpOnly": true,
            "name": "VISITOR_PRIVACY_METADATA",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "CgJHQhIEGgAgLA%3D%3D",
            "id": 20
        },
        {
            "domain": ".youtube.com",
            "hostOnly": false,
            "httpOnly": true,
            "name": "YSC",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": true,
            "storeId": "0",
            "value": "SZLU_wCCEuE",
            "id": 21
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1723076632.709786,
            "hostOnly": false,
            "httpOnly": true,
            "name": "YTSESSION-1b",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "ANPz9Kii03mTF3NCcePAPka096K/xPOn7qUn6MlqbWiyAbGgLFuEgnytU4Un1iWoXPiKTtqvJRRtlbq/IpCYnpBHUo8pp+k8slIEGi4=",
            "id": 22
        },
        {
            "domain": "www.youtube.com",
            "expirationDate": 1725146135,
            "hostOnly": true,
            "httpOnly": false,
            "name": "OTZ",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "7670836_52_56_123900_52_436380",
            "id": 23
        }
        ]
  ]);

async function fetchVideoDetails(youtubeUrl) {
    try {
        console.log(`Fetching video details for URL: ${youtubeUrl}`);
        // Extract video ID from the YouTube URL
        const videoId = youtubeUrl.split('v=')[1].split('&')[0];

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
