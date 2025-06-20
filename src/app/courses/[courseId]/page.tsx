
"use client";

import { use, useEffect, useState, useTransition } from 'react';
import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpenText, CheckCircle, Clock, Lightbulb, ListChecks, ArrowLeft, Loader2, Rocket } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';
import { generateCourseInsights, type CourseInsightsOutput } from '@/ai/flows/generate-course-insights-flow';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { coursesData, type Course } from '@/lib/course-data';

interface ResolvedCourseParams {
  courseId: string;
}

export default function CourseDetailsPage({ params: paramsPromise }: { params: Promise<ResolvedCourseParams> }) {
  const params: ResolvedCourseParams = use(paramsPromise);
  const course = coursesData.find(c => c.id === params.courseId);

  const [insights, setInsights] = useState<CourseInsightsOutput | null>(null);
  const [isInsightsLoading, startInsightsTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    if (course) {
      startInsightsTransition(async () => {
        try {
          const result = await generateCourseInsights({
            courseTitle: course.title,
            courseDescription: course.longDescription || course.description,
          });
          setInsights(result);
        } catch (error) {
          console.error("Error fetching course insights:", error);
          toast({
            variant: "destructive",
            title: "AI Insights Error",
            description: "Could not load AI-generated insights for this course.",
          });
        }
      });
    }
  }, [course, toast]);

  if (!course) {
    return (
      <Container>
         <Button variant="outline" asChild className="mb-8">
          <Link href="/courses"><ArrowLeft size={16} className="mr-2"/> Back to Courses</Link>
        </Button>
        <div className="text-center py-20">
          <BlurText text="Course Not Found" className="text-3xl font-bold text-destructive" />
          <p className="text-muted-foreground mt-4">The course you are looking for does not exist or may have been moved.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
       <Button variant="outline" asChild className="mb-8">
        <Link href="/courses"><ArrowLeft size={16} className="mr-2"/> Back to Courses</Link>
      </Button>
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill={true}
              className="object-cover"
              data-ai-hint={course.imageHint}
            />
          </div>
          <BlurText text={course.title} className="text-3xl md:text-4xl font-bold mb-3 font-headline text-primary" />
          <Badge variant="secondary" className="mb-4 text-sm">{course.category}</Badge>
          <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <BlurText text="About this course" className="text-2xl font-semibold mb-3 font-headline" />
            <p>{course.longDescription}</p>
            
            <section className="mt-8">
              <BlurText text="What you'll learn" className="text-xl font-semibold mt-6 mb-4 font-headline flex items-center gap-2"><ListChecks className="text-accent" /> AI Powered Insights</BlurText>
              {isInsightsLoading && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" /> 
                  <span>Generating learning outcomes...</span>
                </div>
              )}
              {insights?.learningOutcomes && insights.learningOutcomes.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-base">
                  {insights.learningOutcomes.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              )}
              {!isInsightsLoading && (!insights?.learningOutcomes || insights.learningOutcomes.length === 0) && (
                 <p className="text-muted-foreground text-sm">Learning outcomes are being prepared or not available.</p>
              )}
            </section>

             <section className="mt-8">
              <BlurText text="Suggested Prerequisites" className="text-xl font-semibold mt-6 mb-4 font-headline flex items-center gap-2"><Lightbulb className="text-accent" /> AI Powered Insights</BlurText>
              {isInsightsLoading && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Checking prerequisites...</span>
                </div>
              )}
              {insights?.suggestedPrerequisites && insights.suggestedPrerequisites.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-base">
                  {insights.suggestedPrerequisites.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              )}
               {!isInsightsLoading && (!insights?.suggestedPrerequisites || insights.suggestedPrerequisites.length === 0) && (
                 <p className="text-muted-foreground text-sm">No specific prerequisites suggested by AI, or still loading.</p>
              )}
            </section>

            <section className="mt-8">
              <BlurText text="Project Ideas" className="text-xl font-semibold mt-6 mb-4 font-headline flex items-center gap-2"><Rocket className="text-accent" /> AI Powered Suggestions</BlurText>
              {isInsightsLoading && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Brainstorming project ideas...</span>
                </div>
              )}
              {insights?.projectIdeas && insights.projectIdeas.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-base">
                  {insights.projectIdeas.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              )}
              {!isInsightsLoading && (!insights?.projectIdeas || insights.projectIdeas.length === 0) && (
                 <p className="text-muted-foreground text-sm">Project ideas are being generated or not available.</p>
              )}
            </section>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card className="shadow-lg border">
              <CardHeader>
                <BlurText text="Course Overview" className="text-xl font-semibold font-headline" />
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2"><Clock size={16}/> Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2"><BookOpenText size={16}/> Modules:</span>
                  <span className="font-medium">{course.modules}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2"><CheckCircle size={16}/> Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                {course.instructor && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Instructor:</span>
                    <span className="font-medium">{course.instructor}</span>
                  </div>
                )}
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-1">Your Progress:</p>
                  <Progress value={30} aria-label="Course progress" className="h-3 mb-1" />
                  <p className="text-xs text-muted-foreground text-right">30% complete</p>
                </div>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border">
              <CardHeader>
                <BlurText text="Related Courses" className="text-lg font-semibold font-headline" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {/* This could be dynamically populated in a real app */}
                  <li><Link href="#" className="text-primary hover:underline">Advanced {course.category}</Link></li>
                  <li><Link href="#" className="text-primary hover:underline">{course.category} for Business</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}

