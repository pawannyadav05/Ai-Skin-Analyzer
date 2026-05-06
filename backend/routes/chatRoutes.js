const express = require('express');
const router = express.Router();
const { chat } = require('../services/geminiService');

function getClientErrorMessage(error, fallback) {
    const message = error && error.message ? error.message : "";

    if (message.includes("GEMINI_API_KEY") || message.includes("API Key not found") || message.includes("API_KEY_INVALID")) {
        return "Gemini API key is invalid or missing. Please check your .env file and ensure the key is correct.";
    }

    if (message.includes("429") || message.includes("Too Many Requests")) {
        return "I'm receiving too many requests right now. Please wait a moment before trying again.";
    }

    return fallback;
}

// Chat Route
router.post('/', async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'No message provided' });
        }

        const replyText = await chat(message);
        res.json({ reply: replyText, result: replyText });
    } catch (error) {
        console.error("Full Chat Route Error Details:", error);
        const status = (error && error.status) || 500;
        res.status(status).json({ error: getClientErrorMessage(error, 'Failed to generate response') });
    }
});

module.exports = router;