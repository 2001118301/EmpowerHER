
'use server';
/**
 * @fileOverview A flow to generate additional insights for a course.
 *
 * - generateCourseInsights - A function that provides learning outcomes, prerequisites, and project ideas for a course.
 * - CourseInsightsInput - The input type for the generateCourseInsights function.
 * - CourseInsightsOutput - The return type for the generateCourseInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CourseInsightsInputSchema = z.object({
  courseTitle: z.string().describe('The title of the course.'),
  courseDescription: z.string().describe('A detailed description of the course content.'),
});
export type CourseInsightsInput = z.infer<typeof CourseInsightsInputSchema>;

const CourseInsightsOutputSchema = z.object({
  learningOutcomes: z
    .array(z.string())
    .describe('A list of 3-5 key skills or knowledge a student will gain from this course.'),
  suggestedPrerequisites: z
    .array(z.string())
    .describe('A list of 1-3 suggested prerequisite skills or knowledge for this course. If none, return an empty array.'),
  projectIdeas: z
    .array(z.string())
    .describe('A list of 1-2 simple project ideas a student could undertake after completing this course or during it.'),
});
export type CourseInsightsOutput = z.infer<typeof CourseInsightsOutputSchema>;

export async function generateCourseInsights(
  input: CourseInsightsInput
): Promise<CourseInsightsOutput> {
  return generateCourseInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'courseInsightsPrompt',
  input: {schema: CourseInsightsInputSchema},
  output: {schema: CourseInsightsOutputSchema},
  prompt: `You are an expert curriculum designer. Based on the provided course title and description, generate insightful details.

  Course Title: {{{courseTitle}}}
  Course Description: {{{courseDescription}}}

  Please provide:
  1. learningOutcomes: 3-5 key skills or knowledge a student will gain.
  2. suggestedPrerequisites: 1-3 suggested prerequisite skills or knowledge. If there are no obvious prerequisites, provide a general statement like "No specific prerequisites required, suitable for beginners." or return an empty array if an array is strictly required by the schema for no prerequisites.
  3. projectIdeas: 1-2 simple project ideas related to the course.

  Format your output as a JSON object adhering to the output schema.
  `,
});

const generateCourseInsightsFlow = ai.defineFlow(
  {
    name: 'generateCourseInsightsFlow',
    inputSchema: CourseInsightsInputSchema,
    outputSchema: CourseInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate course insights. The AI model did not return an output.');
    }
    // Ensure arrays are always returned, even if empty, to match schema
    return {
      learningOutcomes: output.learningOutcomes || [],
      suggestedPrerequisites: output.suggestedPrerequisites || [],
      projectIdeas: output.projectIdeas || [],
    };
  }
);
