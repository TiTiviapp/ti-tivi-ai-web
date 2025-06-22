const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages) {
    return res.status(400).json({ error: 'messages required' });
  }
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });
    res.json(completion.data);
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
