const openAI = require("openai");
require('dotenv').config();
console.log(process.env.OPENAI_API_KEY);
const client = new openAI.OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})


async function fetchGPTSummary(fullText) {
    try {
        const completions = await client.chat.completions.create({
            messages: [{
                role: "system",
                content: `Summarise this in English, informational tone, and dont try to bold or italic any words:\n\n${fullText}`
            }],
            model: "gpt-4o-mini"
        });

        if (completions && completions.choices) {
            return completions.choices[0].message.content;
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.error('Rate limit exceeded. Please check your OpenAI plan and billing details.');
            throw new Error('Rate limit exceeded. Please try again later.');
        } else {
            console.error('Error fetching GPT summary:', error);
            throw error;
        }
    }
}

module.exports = {fetchGPTSummary};