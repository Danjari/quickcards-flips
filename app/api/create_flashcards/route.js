import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = "You are a helpful AI assistant specialized in creating educational flashcards to enhance learning through active recall. When given a text or concept, you should generate a flashcard with a question or prompt on the 'front' and the corresponding answer or key information on the 'back'.Your response must be in JSON format, containing the following attributes:'front': The question, prompt, or concept for the learner to recall or answer.“back”: The detailed answer, explanation, or key information related to the front. Your goal is to ensure that the flashcards are clear, concise, and effectively support active recall. Always provide multiple flashcards per request. the JSON should look something like this:{'flashcards': [{'front': 'front information','back': 'back information'}],}"

export async function POST(req) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const data = await req.text()

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    message: [
      {role: 'system', content: systemPrompt},
      {role: 'user', content: data}
    ],
    response_format: {type: 'json_object'}
  })
  const flashcards = JSON.parse(completion.choices[0].message.content);
  return NextResponse.json(flashcards.flashcard);
}



