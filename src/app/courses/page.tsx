
"use client";

import { Container } from '@/components/shared/container';
import { CourseCard } from './(components)/course-card';
import { PersonalizedLearningForm } from './(components)/personalized-learning-form';
import { Separator } from '@/components/ui/separator';
import BlurText from '@/components/shared/blur-text';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, BookOpen } from 'lucide-react';

const courses = [
  { id: 'web-dev-intro', title: 'Introduction to Web Development', description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build your first websites.', imageUrl: 'https://placehold.co/600x400.png', category: 'Technology', progress: 25, imageHint: 'laptop code' },
  { id: 'graphic-design', title: 'Graphic Design Fundamentals', description: 'Explore design principles, color theory, and typography with open-source tools.', imageUrl: 'https://placehold.co/600x400.png', category: 'Creative Arts', imageHint: 'design tools palette' },
  { id: 'creative-writing', title: 'Creative Writing Workshop', description: 'Develop your storytelling skills and learn to craft compelling narratives and poetry.', imageUrl: 'https://placehold.co/600x400.png', category: 'Arts & Humanities', imageHint: 'notebook pen' },
  { id: 'entrepreneurship', title: 'Basic Entrepreneurship', description: 'Understand business planning, marketing strategies, and financial literacy for startups.', imageUrl: 'https://placehold.co/600x400.png', category: 'Business', progress: 0, imageHint: 'business plan growth' },
  { id: 'digital-art', title: 'Digital Art with Krita', description: 'Master Krita for creating stunning digital paintings and illustrations from scratch.', imageUrl: 'https://placehold.co/600x400.png', category: 'Creative Arts', imageHint: 'digital tablet art' },
  { id: 'community-leadership', title: 'Community Leadership', description: 'Learn to lead projects, inspire teams, and make a positive impact in your community.', imageUrl: 'https://placehold.co/600x400.png', category: 'Social Impact', progress: 70, imageHint: 'community meeting people' },
];

const externalLearningPlatforms = [
  {
    id: 'khan-academy',
    title: 'Khan Academy',
    description: 'A massive, completely free library of courses on math, science, economics, computing, arts, and humanities. Includes videos, practice exercises, and progress tracking.',
    url: 'https://www.khanacademy.org/',
    category: 'Comprehensive Learning',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp',
    description: 'Thousands of hours of free, project-based learning for coding and web development. Users earn verified certifications.',
    url: 'https://www.freecodecamp.org/',
    category: 'Web Development & Coding',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'google-digital-garage',
    title: 'Google Digital Garage',
    description: 'Free courses from Google on digital marketing, career development, and data. Many courses include a free, shareable certificate.',
    url: 'https://learndigital.withgoogle.com/digitalgarage/',
    category: 'Digital Skills & Career',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'coursera-free',
    title: 'Coursera (Free Courses)',
    description: 'University-level courses from top institutions. Many courses can be audited for free (look for the "Audit" option).',
    url: 'https://www.coursera.org/',
    category: 'Higher Education',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'gcfglobal',
    title: 'GCFGlobal',
    description: 'Over 200 topics with free tutorials on essential life and tech skills—from using a computer to online safety, creativity, and financial literacy.',
    url: 'https://edu.gcfglobal.org/en/',
    category: 'Essential Life & Tech Skills',
    icon: <BookOpen size={20} className="text-primary" />,
  },
];


export default function CoursesPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <BlurText text="Our Courses" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our diverse range of courses designed to equip you with valuable skills.
        </p>
      </div>

      <div className="mb-16">
        <PersonalizedLearningForm />
      </div>
      
      <Separator className="my-12" />

      <div>
        <BlurText text="Explore All Empower Hub Courses" className="text-3xl font-bold mb-8 text-center font-headline" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              category={course.category}
              progress={course.progress}
              imageHint={course.imageHint}
            />
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div>
        <BlurText text="Discover More Learning Opportunities" className="text-3xl font-bold mb-8 text-center font-headline" />
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Expand your knowledge with these highly-rated free learning platforms from around the web.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {externalLearningPlatforms.map((platform) => (
            <Card key={platform.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {platform.icon || <BookOpen size={24} className="text-primary" />}
                  <BlurText text={platform.title} className="text-xl font-semibold font-headline" />
                </div>
                 <CardDescription className="text-xs text-muted-foreground pt-1">{platform.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-4">{platform.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    Visit {platform.title}
                    <Globe size={16} className="ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

    