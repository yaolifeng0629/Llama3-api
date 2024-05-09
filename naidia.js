import OpenAI from 'openai';
import fs from 'fs';
import { NAIDIA_API_KEY } from './api_key';

const openai = new OpenAI({
    apiKey: NAIDIA_API_KEY,
    baseURL: 'https://integrate.api.nvidia.com/v1'
});

async function main() {
    const prompt = fs.readFileSync('prompt.txt', 'utf-8');

    console.log('处理中...');
    const completion = await openai.chat.completions.create({
        model: 'meta/llama3-70b-instruct',
        messages: [{ role: 'user', content: prompt }],
        temperature: 1,
        top_p: 1,
        max_tokens: 2048,
        logprobs: true,
        stream: true
    });

    let result = '';
    for await (const chunk of completion) {
        result += chunk.choices[0]?.delta?.content || '';
    }

    fs.writeFileSync('result.md', result);
    console.log('--------------------------');
    console.log('处理完成！');
}

main();
