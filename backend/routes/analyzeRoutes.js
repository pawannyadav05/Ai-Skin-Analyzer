const { analyzeSkin, analyzeIngredients } = require('../services/geminiService');

function getClientErrorMessage(error, fallback) {
    const message = error && error.message ? error.message : "";

    if (message === "Uploaded file must be an image.") {
        return message;
    }

    if (message.includes("GEMINI_API_KEY") || message.includes("API Key not found") || message.includes("API_KEY_INVALID")) {
        return "Gemini API key is invalid or missing. Please check your .env file and ensure the key is correct.";
    }

    if (message.includes("Unable to process input image")) {
        return "I could not process that image. Please upload a clear JPG, PNG, or WebP photo with good lighting.";
    }

    return fallback;
}

async function handleAnalyzeSkin(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }
        
        const problemContext = req.body.problem;
        const resultText = await analyzeSkin(req.file, problemContext);
        
        res.json({ result: resultText, reply: resultText });
    } catch (error) {
        console.error("Full Analyze Route Error Details:", error);
        const status = error.message === "Uploaded file must be an image." ? 400 : 500;
        res.status(status).json({ error: getClientErrorMessage(error, 'Failed to analyze image') });
    }
}

async function handleAnalyzeIngredients(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }
        
        const problemContext = req.body.problem;
        const skinContext = req.body.skinContext;
        const resultText = await analyzeIngredients(req.file, problemContext, skinContext);
        
        res.json({ result: resultText, reply: resultText });
    } catch (error) {
        console.error("Analyze Ingredients Route Error:", error);
        const status = error.message === "Uploaded file must be an image." ? 400 : 500;
        res.status(status).json({ error: getClientErrorMessage(error, 'Failed to analyze ingredients') });
    }
}

module.exports = {
    handleAnalyzeSkin,
    handleAnalyzeIngredients
};
