const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post('/ask-buddy', async (req, res) => {
  const { question, context } = req.body;

  const prompt = `
You are Buddy, a chill AI study buddy.
ONLY use these notes:
${context}

QUESTION:
${question}

Explain in a simple, friendly way.
  `;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/chat-bison-001:generateMessage?key=${process.env.GEMINI_API_KEY}`,
      {
        prompt: {
          messages: [
            { author: 'user', content: prompt }
          ]
        }
      }
    );

    const answer = response.data.candidates?.[0]?.content;
    res.json({ answer });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(PORT, () => console.log(`✅ Buddy backend running on http://localhost:${PORT}`));
app.use(express.json({ limit: '5mb' })); // 👈 boost limit to 5MB
app.use(express.urlencoded({ limit: '5mb', extended: true })); // 👈 boost limit to 5MB