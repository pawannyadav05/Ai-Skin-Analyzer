require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`GlowAI Backend running on port ${port}`);
});
