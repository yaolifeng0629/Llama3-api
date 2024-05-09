import Groq from 'groq-sdk';
import { GROQ_API_KEY } from './api_key';

const groq = new Groq({
  apiKey: GROQ_API_KEY,
});

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: '什么是chatGpt？',
      },
    ],
    model: 'llama3-70b-8192',
    temperature: 1,
    max_tokens: 8192,
    top_p: 1,
    stream: true,
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();
