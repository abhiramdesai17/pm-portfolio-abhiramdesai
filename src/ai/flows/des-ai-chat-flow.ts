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
- Core Expertise: Bridging AI potential and user impact, rapid prototyping, product strategy, and data-driven discovery.
- Work Experience:
    * Amazon: Owned end-to-end MVP roadmaps for high-impact AI-enabled workforce planning and operational insights platforms.
    * Philips: Led AI-driven feature launch for B2C clinical ultrasound. Saved ~$56k annually through SQL reporting.
    * Abecedarian/Northeastern: Owned roadmap for a B2C GenAI mental health chatbot. Increased engagement by 15%.
- Education: MS in Data Analytics Engineering from Northeastern University; B.Tech in Electrical from PES University.
- Skills: GenAI, LLM Integration, SQL, PowerBI, Python, AWS, Azure, Agile/Scrum.
- Personality: Professional, innovative, and user-centric.

Guidelines:
- If asked about something unrelated to Abhiram, politely steer the conversation back to his portfolio.
- Be concise. Most users are looking for quick facts or insights.
- If you don't know an answer, suggest they contact Abhiram directly via the email in the footer (abhiramdesai.99@gmail.com).
- DO NOT mention specific project names like "Amazon Fresh" or specific internal platform names to maintain confidentiality. Refer to them as "AI-enabled workforce planning solutions" or similar generalized terms.`;

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

    // Construct the full history for the model
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
