"use client";

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'; // Removed CardTitle
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert'; // Removed AlertTitle
import { Loader2, Sparkles } from 'lucide-react';
import { suggestPersonalizedLearningPaths, type PersonalizedLearningPathsOutput } from '@/ai/flows/personalized-learning-paths';
import { useToast } from "@/hooks/use-toast";
import BlurText from '@/components/shared/blur-text';

const formSchema = z.object({
  userProfile: z.string().min(50, { message: "Please describe your interests and goals in at least 50 characters." }),
});

type PersonalizedLearningFormValues = z.infer<typeof formSchema>;

// This would typically come from a database or CMS
const MOCK_AVAILABLE_COURSES = `
1. Introduction to Web Development: Learn HTML, CSS, JavaScript basics. Good for beginners interested in tech.
2. Graphic Design Fundamentals: Explore principles of design, color theory, and typography using open-source tools like GIMP and Inkscape. Suitable for artistic individuals.
3. Creative Writing Workshop: Develop storytelling skills, poetry, and scriptwriting. For those passionate about expression.
4. Basic Entrepreneurship & Financial Literacy: Understand business planning, marketing, and managing personal finances. Essential for aspiring entrepreneurs.
5. Digital Art with Krita: Learn to create digital paintings and illustrations. A great follow-up or alternative to Graphic Design Fundamentals.
6. Community Leadership & Project Management: Skills for organizing local initiatives and managing small projects. For those wanting to make a difference.
7. Advanced JavaScript & React: Deep dive into modern web development frameworks. For those with basic web dev knowledge.
`;

export function PersonalizedLearningForm() {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<PersonalizedLearningPathsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<PersonalizedLearningFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userProfile: "",
    },
  });

  const onSubmit: SubmitHandler<PersonalizedLearningFormValues> = async (data) => {
    setSuggestions(null);
    startTransition(async () => {
      try {
        const result = await suggestPersonalizedLearningPaths({
          userProfile: data.userProfile,
          availableCourses: MOCK_AVAILABLE_COURSES,
        });
        setSuggestions(result);
      } catch (error) {
        console.error("Error fetching personalized learning paths:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not fetch personalized learning suggestions. Please try again.",
        });
      }
    });
  };

  return (
    <Card className="shadow-xl border-2 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <BlurText text="Discover Your Personalized Learning Path" className="text-2xl font-bold font-headline text-primary" />
        </div>
        <CardDescription>
          Tell us about your interests, goals, and any prior experience. Our AI will suggest learning paths tailored for you from our available courses.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="userProfile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="userProfile" className="text-lg font-semibold">Your Interests & Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      id="userProfile"
                      placeholder="e.g., I'm interested in art and technology, and I want to learn skills to start my own small online shop. I have some experience with drawing but no coding knowledge."
                      className="min-h-[120px] focus:ring-accent focus:border-accent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <h4 className="text-lg font-semibold mb-2">Available Course Areas:</h4>
              <p className="text-sm text-muted-foreground">
                Web Development, Graphic Design, Creative Writing, Entrepreneurship, Digital Art, Community Leadership, and more.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Suggestions...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Suggest My Path
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>

      {suggestions && (
        <CardContent className="mt-6 border-t pt-6">
          <BlurText text="Here are your suggested learning paths:" className="text-xl font-semibold mb-4 font-headline text-primary" />
          {suggestions.suggestedLearningPaths.length > 0 ? (
             <ul className="space-y-3 list-disc list-inside mb-4">
              {suggestions.suggestedLearningPaths.map((path, index) => (
                <li key={index} className="text-md">{path}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No specific paths match perfectly, but explore our general courses!</p>
          )}
          <Alert variant="default" className="bg-primary/5 border-primary/20">
             <Sparkles className="h-5 w-5 text-primary" />
            <BlurText text="Reasoning" className="font-semibold text-primary mb-1 leading-none tracking-tight" />
            <AlertDescription className="text-primary/80">
              {suggestions.reasoning}
            </AlertDescription>
          </Alert>
        </CardContent>
      )}
    </Card>
  );
}
