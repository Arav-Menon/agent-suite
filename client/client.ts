import readline from "readline/promises";
import { OpenRouter } from "@openrouter/sdk";

let chatHistory: any[] = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_KEY,
});

async function chatLoop() {
  const question = await rl.question(`You: `);
  chatHistory.push({
    role: "user",
    content: question,
  });
  const stream = await openrouter.chat.send({
    chatRequest: {
      model: "google/gemma-4-26b-a4b-it:free",
      messages: chatHistory as any,
      stream: true,
    },
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      process.stdout.write(content);
    }
  }
  chatLoop();
}
chatLoop();
