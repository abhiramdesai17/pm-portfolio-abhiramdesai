'use server';
/**
 * @fileOverview An AI assistant that generates concise and compelling narrative summaries or bullet points for project descriptions.
 *
 * - generateProjectDescription - A function that handles the project description generation process.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  problem: z.string().describe('The problem the project aimed to solve.'),
  solution: z.string().describe('The solution implemented in the project.'),
  role: z.string().describe('The user\'s role in the project.'),
  metrics: z.string().describe('Key metrics or quantifiable achievements related to the project. Example: "reduced decision cycles by ~75%, unlocked ~$90K+ in annualized productivity value."'),
  outcomes: z.string().describe('The overall outcomes or impact of the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  summary: z.string().describe('A concise narrative summary of the project.'),
  bulletPoints: z.array(z.string()).describe('Key achievements and outcomes presented as bullet points.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert product manager who excels at crafting compelling project descriptions for a portfolio.
Your task is to take the provided project details and generate a concise narrative summary and a list of key achievements in bullet points.
Highlight the impact and quantifiable results.

Project Name: {{{projectName}}}
Problem: {{{problem}}}
Solution: {{{solution}}}
Role: {{{role}}}
Metrics: {{{metrics}}}
Outcomes: {{{outcomes}}}

Generate a compelling summary and bullet points that showcase the achievements effectively.`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
