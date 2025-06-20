'use server';

/**
 * @fileOverview Personalized learning path suggestion flow.
 *
 * - suggestPersonalizedLearningPaths - A function that suggests personalized learning paths based on user profile and interests,
 *   focusing on free external online resources.
 * - PersonalizedLearningPathsInput - The input type for the suggestPersonalizedLearningPaths function.
 * - PersonalizedLearningPathsOutput - The return type for the suggestPersonalizedLearningPaths function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, including their interests, skill level, and learning goals.'),
});
export type PersonalizedLearningPathsInput = z.infer<
  typeof PersonalizedLearningPathsInputSchema
>;

const LearningStepSchema = z.object({
  topic: z.string().describe("The learning topic or skill area."),
  description: z.string().describe("A brief description of what to learn for this topic."),
  suggestedResourceName: z.string().describe("Name of the suggested free online resource (e.g., Khan Academy, freeCodeCamp)."),
  suggestedResourceUrl: z.string().url().optional().describe("A direct URL to the suggested course or resource, if available."),
  notes: z.string().optional().describe("Additional notes or search terms if a direct URL isn't available (e.g., 'Search for 'Beginner Python' on this platform').")
});

const PersonalizedLearningPathsOutputSchema = z.object({
  introduction: z.string().describe("A brief introductory message for the personalized plan."),
  learningPlan: z
    .array(LearningStepSchema)
    .describe('A list of structured learning steps with suggested external resources. Should contain 3-5 steps.'),
  conclusion: z.string().describe("A concluding remark or encouragement."),
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
  prompt: `You are an expert learning path curator specializing in free online educational resources.
Your goal is to create a personalized, step-by-step learning plan for the user based on their profile.
The plan should primarily consist of 3-5 actionable steps, recommending specific courses, modules, or topics available for free on reputable platforms.

User Profile: {{{userProfile}}}

Consider these excellent free learning platforms when making suggestions:
- Khan Academy (khanacademy.org) - Broad range of subjects, great for fundamentals.
- freeCodeCamp (freecodecamp.org) - Focus on coding, web development, data science, with certifications.
- Google Digital Garage (learndigital.withgoogle.com/digitalgarage) - Digital marketing, career development, data.
- Coursera (coursera.org) - University-level courses, look for "audit for free" options.
- GCFGlobal (edu.gcfglobal.org) - Essential life and tech skills, very beginner-friendly.
- You may also suggest other well-known free resources if highly relevant.

For each step in the learning plan:
1. Define a clear 'topic' or skill.
2. Provide a brief 'description' of what the user will learn or do.
3. Suggest a 'suggestedResourceName' (e.g., "Khan Academy's Intro to HTML/CSS").
4. If you know a direct 'suggestedResourceUrl' to a specific free course or module on that platform, provide it.
5. If a direct URL is not feasible or known, provide 'notes' on how to find it (e.g., "Search for 'JavaScript Basics' on freeCodeCamp").
6. Ensure the plan is progressive and logical.

Structure your response as a JSON object adhering to the output schema.
Provide an encouraging 'introduction' and 'conclusion' for the user's plan.
The 'learningPlan' array should contain 3-5 steps.
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
    if (!output) {
        throw new Error('AI failed to generate a learning plan.');
    }
    return {
        introduction: output.introduction || "Here's a learning plan we've crafted for you:",
        learningPlan: output.learningPlan || [],
        conclusion: output.conclusion || "Happy learning! We believe in your potential.",
    };
  }
);
