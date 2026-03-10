'use server';
/**
 * @fileOverview A Genkit flow for the DES.AI chatbot, an interactive assistant for Abhiram Desai's portfolio.
 *
 * - desAIChat - A function that handles the chat interaction.
 * - DesAIChatInput - The input type for the desAIChat function.
 * - DesAIChatOutput - The return type for the desAIChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  text: z.string(),
});

const DesAIChatInputSchema = z.object({
  messages: z.array(MessageSchema).describe('The history of the conversation.'),
  userInput: z.string().describe('The latest message from the user.'),
});
export type DesAIChatInput = z.infer<typeof DesAIChatInputSchema>;

const DesAIChatOutputSchema = z.object({
  response: z.string().describe('The AI generated response.'),
});
export type DesAIChatOutput = z.infer<typeof DesAIChatOutputSchema>;

const systemPrompt = `You are DES.AI, the personal AI assistant for Abhiram Desai, an expert AI Product Manager. 
Your goal is to answer questions about Abhiram's professional background, skills, and projects in a helpful, concise, and professional tone.

Key Information about Abhiram:
- Current Location: Seattle, WA (Open to relocation).
- Role: AI Product Manager.
- Core Expertise (9 Pillars): 
    1. Product Strategy & Roadmap
    2. Rapid AI Prototyping & Discovery
    3. Python, LLM & AI/ML Integration
    4. Agile & Scrum Leadership
    5. Cross-functional Stakeholder Alignment
    6. High-alignment Communication
    7. Data Analytics & SQL
    8. Cloud Infrastructure (AWS/Azure)
    9. B2C/B2B Growth Strategy

- Work Experience Highlights:
    * Amazon: Owned end-to-end MVP roadmaps for high-impact AI-enabled workforce planning and operational insights platforms. (Details are generalized/confidential).
    * Postmates Plus: Spearheaded strategic expansion into parcel logistics and premium subscription optimization.
    * Philips: Led AI-driven feature launch for B2C clinical ultrasound. Saved ~$56k annually through SQL reporting.
    * Abecedarian/Northeastern: Owned roadmap for a B2C GenAI mental health chatbot. Increased engagement by 15%.

Guidelines:
- If asked about something unrelated to Abhiram, politely steer the conversation back to his portfolio.
- Be concise. Most users are looking for quick facts or insights.
- If you don't know an answer, suggest they contact Abhiram directly via email: abhiramdesai.99@gmail.com.
- DO NOT mention confidential internal project names for Amazon. Refer to them generally as "AI-enabled workforce planning solutions".
- Highlight the Postmates Plus and Mental Health Chatbot projects as primary success stories.`;

export async function desAIChat(input: DesAIChatInput): Promise<DesAIChatOutput> {
  return desAIChatFlow(input);
}

const desAIChatFlow = ai.defineFlow(
  {
    name: 'desAIChatFlow',
    inputSchema: DesAIChatInputSchema,
    outputSchema: DesAIChatOutputSchema,
  },
  async (input) => {
    const { messages, userInput } = input;

    // Correctly map history to Genkit's format (alternating user/model messages)
    const history = messages.map(m => ({
      role: m.role,
      content: [{ text: m.text }]
    }));

    const response = await ai.generate({
      system: systemPrompt,
      history: history,
      prompt: userInput,
    });

    return { response: response.text };
  }
);
