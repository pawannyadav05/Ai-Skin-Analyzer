# GlowAI | AI Skin Analyzer ✨

**GlowAI** is a state-of-the-art dermatological analysis tool powered by Google's Gemini 2.5 Flash. It provides instant, professional-grade skin analysis, ingredient scanning, and personalized skincare advice through an intuitive AI-driven interface.

---

## 🚀 Key Features

- **Skin Problem Analysis**: Upload or capture a photo to identify potential skin conditions and receive expert-level insights.
- **Ingredient Scanning**: Analyze product ingredients to understand their effects and suitability for your skin type.
- **AI Dermatological Chatbot**: Get instant answers to your skincare questions and personalized routine recommendations.
- **Voice Input**: Interact naturally with the AI using integrated voice-to-text capabilities.
- **Dark/Light Mode**: Premium, responsive design that adapts to your preference.

---

## 🤖 AI Model Intelligence

GlowAI employs a sophisticated multi-model redundancy system to ensure maximum availability and performance. The application intelligently routes requests through a tiered list of Google's most advanced Gemini models.

### Primary Models & Fallback Logic
To maintain high reliability even during rate limiting or service fluctuations, the system utilizes a fallback mechanism:

- **Image & Skin Analysis**:
  1. `gemini-2.5-flash` (Default)
  2. `gemini-2.0-flash`
  3. `gemini-2.5-pro`
- **Text & Chat Analysis**: 
  1. `gemini-2.0-flash-lite` (Default)
  2. `gemini-2.5-flash-lite`
  3. `gemini-2.0-flash`
  4. `gemini-2.5-flash`

### Optimized Configuration
- **Temperature (0.3)**: Fine-tuned for precise, consistent, and scientifically accurate dermatological advice.
- **Multimodal Capabilities**: Utilizes vision-capable models to process text and high-resolution images simultaneously.

---

## 🛠️ Tech Stack

### Frontend
- **Vanilla JavaScript (ES6+)**: High-performance, lightweight logic.
- **CSS3**: Custom modern styling with Glassmorphism and dark mode support.
- **HTML5**: Semantic structure for SEO and accessibility.

### Backend
- **Node.js & Express**: Scalable and robust server architecture.
- **Multer**: Efficient handling of multi-part form data and image uploads.
- **CORS & Dotenv**: Secure configuration and cross-origin resource sharing.

### AI Integration
- **Google Gemini 1.5 Flash**: Multimodal AI for simultaneous text and image processing.

---

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- A Google Gemini API Key (Get one at [Google AI Studio](https://aistudio.google.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pawannyadav05/Ai-Skin-Analyzer.git
   cd Ai-Skin-Analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   PORT=5000
   ```

### Running the Application

1. **Start the server**
   ```bash
   npm start
   ```

2. **Open the frontend**
   Open `frontend/index.html` in your browser (or use a Live Server extension).

---

## 📁 Project Structure

```text
Ai-Skin-Analyzer/
├── backend/
│   ├── routes/          # API endpoints (analyze, chat)
│   ├── services/        # AI logic and Gemini integration
│   ├── app.js           # Express app configuration
│   └── server.js        # Entry point
├── frontend/
│   ├── index.html       # Main UI
│   ├── style.css        # Modern design system
│   └── script.js        # Client-side interactions
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
└── README.md            # Professional documentation
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve GlowAI, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git commit -m 'Add some AmazingFeature'`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## ✨ Acknowledgments

- [Google Gemini API](https://deepmind.google/technologies/gemini/) for the powerful AI core.
- [Inter Font](https://fonts.google.com/specimen/Inter) for the sleek typography.
- Inspired by the need for accessible dermatological insights.


