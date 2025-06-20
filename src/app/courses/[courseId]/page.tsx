
"use client";

import { use } from 'react';
import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpenText, CheckCircle, Clock } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';

// Mock course data, in a real app this would come from a DB
const coursesData = [
  { id: 'web-dev-intro', title: 'Introduction to Web Development', description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build your first websites. This course covers everything from basic syntax to creating interactive web pages.', imageUrl: 'https://placehold.co/800x450.png', category: 'Technology', modules: 10, duration: '20 hours', imageHint: 'coding screen laptop', longDescription: 'Dive deep into the world of web development. Understand how websites work, learn to structure content with HTML, style it with CSS, and add interactivity with JavaScript. By the end of this course, you will have built several mini-projects and a portfolio-ready website.', instructor: 'Jane Doe', level: 'Beginner' },
  { id: 'graphic-design', title: 'Graphic Design Fundamentals', description: 'Explore design principles, color theory, and typography with open-source tools.', imageUrl: 'https://placehold.co/800x450.png', category: 'Creative Arts', modules: 8, duration: '15 hours', imageHint: 'design tools art', longDescription: 'Unleash your creativity with graphic design. This course will teach you the core principles of visual communication, how to use color effectively, master typography, and utilize free tools like GIMP and Inkscape to create stunning designs.', instructor: 'John Smith', level: 'Beginner' },
  // Add more courses here following the same structure
];


export default function CourseDetailsPage({ params: paramsPromise }: { params: Promise<{ courseId: string }> }) {
  const params = use(paramsPromise);
  const course = coursesData.find(c => c.id === params.courseId);

  if (!course) {
    return (
      <Container>
        <div className="text-center py-20">
          <BlurText text="Course Not Found" className="text-3xl font-bold text-destructive" />
          <p className="text-muted-foreground mt-4">The course you are looking for does not exist or may have been moved.</p>
          <Button asChild className="mt-8">
            <a href="/courses">Back to Courses</a>
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
            <Image
              src={course.imageUrl}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={course.imageHint}
            />
          </div>
          <BlurText text={course.title} className="text-3xl md:text-4xl font-bold mb-3 font-headline text-primary" />
          <Badge variant="secondary" className="mb-4 text-sm">{course.category}</Badge>
          <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <BlurText text="About this course" className="text-2xl font-semibold mb-3 font-headline" />
            <p>{course.longDescription}</p>
            {/* Placeholder for curriculum/modules list */}
            <BlurText text="What you'll learn" className="text-xl font-semibold mt-6 mb-3 font-headline" />
            <ul className="list-disc pl-5 space-y-1">
              <li>Core concepts of {course.category.toLowerCase()}</li>
              <li>Practical skills through hands-on projects</li>
              <li>How to use industry-relevant tools (details specific to course)</li>
              <li>Problem-solving and critical thinking in {course.category.toLowerCase()}</li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-lg border">
              <BlurText text="Course Overview" className="text-xl font-semibold mb-4 font-headline" />
              <div className="space-y-3 text-sm">
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
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Instructor:</span>
                  <span className="font-medium">{course.instructor}</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-1">Your Progress:</p>
                <Progress value={30} aria-label="Course progress" className="h-3 mb-4" />
              </div>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Learning
              </Button>
            </div>
            {/* Related courses placeholder */}
            <div className="bg-card p-6 rounded-lg shadow-lg border">
              <BlurText text="Related Courses" className="text-lg font-semibold mb-3 font-headline" />
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary hover:underline">Advanced {course.category}</a></li>
                <li><a href="#" className="text-primary hover:underline">{course.category} for Business</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
