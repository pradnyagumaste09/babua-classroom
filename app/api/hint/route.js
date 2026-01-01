import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

// 1. Pre-defined Cheat Patterns (Layer 1 Defense)
const CHEAT_WORDS = [
  "full code", "complete code", "write code", "full solution", "solve it fully", 
  "just answer", "give output", "full program", "exact answer", "just tell me", 
  "copy paste", "direct solution", "write program", "full logic", "exact code", 
  "step by step code", "code dedo", "pura code", "solution please"
];

// 2. The Socratic Persona (Layer 2 Defense)
const SOCRATIC_SYSTEM_PROMPT = `
You are the "Babua AI Mentor" from Babua Classroom. 
Your core philosophy: "Logic building > Code memorization."

STRICT RULES:
- NEVER provide more than 2-3 lines of pseudocode. NEVER provide a full function or program.
- If a user asks for code, respond with: "Babua system answer nahi deta. Khud logic banao, mehnat karo!" then provide a hint.
- Use the Socratic Method: Answer a question with a question that leads to the answer.
- Structure your response:
   1. 💡 The Concept (Analogies like 'Sliding Window is like a moving bus window').
   2. 🛤️ The Direction (What should they think about next?).
   3. ⚠️ The Trap (What edge case are they missing?).
- If the student asks in Hinglish, reply in Hinglish. Keep it raw, helpful, and firm.
`;

export async function POST(req) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "API Key Missing" }, { status: 500 });
    }

    const { question, context } = await req.json();
    const lowerQuestion = question.toLowerCase();

    // STEP 1: Fast Local Guardrail
    const isCheating = CHEAT_WORDS.some(word => lowerQuestion.includes(word));
    
    if (isCheating) {
      return NextResponse.json({ 
        success: true,
        hint: "🚫 Cheating detected! Babua system answer nahi deta. Logic seekho, dhanda nahi chal raha yahan. \n\nHint: Focus on the approach first. What is your input and what are you trying to track?" 
      });
    }

    // STEP 2: Input Length Validation
    if (!question || question.length < 5) {
      return NextResponse.json({ hint: "Babua, thoda detail mein pucho! What are you stuck on?" }, { status: 400 });
    }

    // STEP 3: AI Analysis
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SOCRATIC_SYSTEM_PROMPT },
        { 
          role: "user", 
          content: `Current Topic: ${context || 'DSA General'}\nStudent Doubt: ${question}` 
        }
      ],
      temperature: 0.8, // Slightly higher for better analogies
      max_tokens: 450,
    });

    const aiHint = completion.choices[0].message.content;

    return NextResponse.json({ 
      success: true,
      hint: aiHint 
    });

  } catch (error) {
    console.error("AI_MENTOR_ERROR:", error);
    return NextResponse.json(
      { error: "Babua, AI is resting. Try again in 1 minute!" }, 
      { status: 500 }
    );
  }
}