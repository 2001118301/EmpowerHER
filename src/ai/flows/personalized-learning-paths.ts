'use server';

/**
 * @fileOverview Personalized learning path suggestion flow.
 *
 * - suggestPersonalizedLearningPaths - A function that suggests personalized learning paths based on user profile and interests.
 * - PersonalizedLearningPathsInput - The input type for the suggestPersonalizedLearningPaths function.
 * - PersonalizedLearningPathsOutput - The return type for the suggestPersonalizedLearningPaths function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, including their interests, goals, and prior learning experience.'),
  availableCourses: z.string().describe('A list of available courses and learning paths with descriptions.'),
});
export type PersonalizedLearningPathsInput = z.infer<
  typeof PersonalizedLearningPathsInputSchema
>;

const PersonalizedLearningPathsOutputSchema = z.object({
  suggestedLearningPaths: z
    .array(z.string())
    .describe('A list of suggested learning paths tailored to the user profile.'),
  reasoning: z.string().describe('Explanation of why these learning paths were suggested.'),
});
export type PersonalizedLearningPathsOutput = z.infer<
  typeof PersonalizedLearningPathsOutputSchema
>;

export async function suggestPersonalizedLearningPaths(
  input: PersonalizedLearningPathsInput
): Promise<PersonalizedLearningPathsOutput> {
  return personalizedLearningPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathsPrompt',
  input: {schema: PersonalizedLearningPathsInputSchema},
  output: {schema: PersonalizedLearningPathsOutputSchema},
  prompt: `You are an expert learning path recommender.

  Based on the user's profile and available courses, recommend the most relevant learning paths.
  Explain your reasoning for suggesting each learning path.

  User Profile: {{{userProfile}}}
  Available Courses: {{{availableCourses}}}

  Format your output as a JSON object with 'suggestedLearningPaths' (array of course names) and 'reasoning' (explanation).
  `,
});

const personalizedLearningPathsFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathsFlow',
    inputSchema: PersonalizedLearningPathsInputSchema,
    outputSchema: PersonalizedLearningPathsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
