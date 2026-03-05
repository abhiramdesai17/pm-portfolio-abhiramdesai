'use server';
/**
 * @fileOverview A Genkit flow for generating a professional bio based on a resume and experience highlights.
 *
 * - generateProfessionalBio - A function that handles the professional bio generation process.
 * - GenerateProfessionalBioInput - The input type for the generateProfessionalBio function.
 * - GenerateProfessionalBioOutput - The return type for the generateProfessionalBio function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProfessionalBioInputSchema = z.object({
  resume: z.string().describe('The full text content of the user\u0027s resume.'),
  experienceHighlights: z
    .string()
    .describe(
      'Key experience highlights or specific achievements the user wants to emphasize in the bio.'
    ),
});
export type GenerateProfessionalBioInput = z.infer<
  typeof GenerateProfessionalBioInputSchema
>;

const GenerateProfessionalBioOutputSchema = z.object({
  bio: z.string().describe('A professional bio for an \u0027About Me\u0027 section.'),
});
export type GenerateProfessionalBioOutput = z.infer<
  typeof GenerateProfessionalBioOutputSchema
>;

export async function generateProfessionalBio(
  input: GenerateProfessionalBioInput
): Promise<GenerateProfessionalBioOutput> {
  return generateProfessionalBioFlow(input);
}

const generateProfessionalBioPrompt = ai.definePrompt({
  name: 'generateProfessionalBioPrompt',
  input: { schema: GenerateProfessionalBioInputSchema },
  output: { schema: GenerateProfessionalBioOutputSchema },
  prompt: `You are an expert copywriter specializing in crafting compelling professional bios for product managers.

Your task is to create a concise and engaging professional bio for an 'About Me' section, suitable for a portfolio website. The bio should highlight the user's experience, skills, and key achievements.

Focus on creating a strong narrative that showcases their value as a product manager, specifically emphasizing AI-related expertise if present.

Use the following resume and experience highlights as your primary source of information:

Resume:
---
{{{resume}}}
---

Experience Highlights to Emphasize:
---
{{{experienceHighlights}}}
---

Craft a professional bio, typically 3-5 sentences long, that is engaging and summarizes their career effectively. Ensure the tone is professional yet personable.`,
});

const generateProfessionalBioFlow = ai.defineFlow(
  {
    name: 'generateProfessionalBioFlow',
    inputSchema: GenerateProfessionalBioInputSchema,
    outputSchema: GenerateProfessionalBioOutputSchema,
  },
  async (input) => {
    const { output } = await generateProfessionalBioPrompt(input);
    return output!;
  }
);
