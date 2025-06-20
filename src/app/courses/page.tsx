
"use client";

import { useState, useMemo } from 'react';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import BlurText from '@/components/shared/blur-text';
import { youtubeCoursesData, courseCategories, type YoutubeCourse, type CourseCategory } from '@/lib/course-data';
import { CourseCardYoutube } from './(components)/course-card-youtube';
import { Sparkles, Youtube as YoutubeIcon } from 'lucide-react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>(courseCategories[0]?.name || 'All');

  const featuredCourse = useMemo(() => youtubeCoursesData.find(course => course.isFeatured), []);

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All') {
      return youtubeCoursesData.filter(course => !course.isFeatured); // Exclude featured from main list if shown separately
    }
    return youtubeCoursesData.filter(course => course.category === selectedCategory && !course.isFeatured);
  }, [selectedCategory]);

  const handleTabChange = (value: string) => {
    setSelectedCategory(value as CourseCategory | 'All');
  };
  
  const allTabCategories: { name: CourseCategory | 'All'; icon: any }[] = [
    { name: 'All', icon: Sparkles }, // Using Sparkles for 'All'
    ...courseCategories
  ];


  return (
    <>
      {/* Motivational Banner */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-6 text-center shadow-md">
        <Container>
          <BlurText 
            text="Start Your Learning Journey — Free Courses, Powerful Skills" 
            className="text-2xl sm:text-3xl font-bold font-headline" 
          />
        </Container>
      </div>

      <Container className="py-8 sm:py-12">
        {/* Featured Course Section */}
        {featuredCourse && (
          <section className="mb-12 p-6 md:p-8 rounded-xl shadow-2xl bg-gradient-to-br from-card via-card/90 to-accent/10 border border-primary/20 backdrop-blur-md">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={featuredCourse.thumbnailUrl}
                  alt={featuredCourse.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={featuredCourse.imageHint}
                />
                <Link 
                  href={`https://www.youtube.com/watch?v=${featuredCourse.youtubeVideoId}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"
                  aria-label={`Watch featured course: ${featuredCourse.title}`}
                >
                  <YoutubeIcon size={64} className="text-white/80 group-hover:text-white transition-opacity duration-300" />
                </Link>
              </div>
              <div>
                <span className="inline-block bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  Featured Course
                </span>
                <BlurText text={featuredCourse.title} className="text-2xl md:text-3xl font-bold mb-3 font-headline text-primary" />
                <p className="text-muted-foreground mb-4 text-sm md:text-base line-clamp-3">
                  {featuredCourse.description || 'Discover this amazing course to kickstart your learning!'}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6 gap-4">
                  <span><strong className="text-foreground">{featuredCourse.duration}</strong></span>
                  {featuredCourse.channelName && <span>From: <strong className="text-foreground">{featuredCourse.channelName}</strong></span>}
                </div>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                  <Link href={`https://www.youtube.com/watch?v=${featuredCourse.youtubeVideoId}`} target="_blank" rel="noopener noreferrer">
                    <YoutubeIcon size={20} className="mr-2" />
                    Start Learning Now
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Tabbed Category Filter & Course Grid */}
        <Tabs value={selectedCategory} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:w-auto bg-card p-2 rounded-lg shadow-sm border border-primary/10">
              {allTabCategories.map(cat => {
                const CategoryIcon = cat.icon;
                return (
                  <TabsTrigger 
                    key={cat.name} 
                    value={cat.name} 
                    className="flex-1 lg:flex-initial data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md px-3 py-2 text-xs sm:text-sm"
                  >
                    <CategoryIcon size={16} className="mr-1.5 hidden sm:inline-block" />
                    {cat.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          
          {allTabCategories.map(cat => (
            <TabsContent key={cat.name} value={cat.name}>
              <div className="text-center mb-6">
                 <BlurText text={cat.name === 'All' ? "All Courses" : `Courses in ${cat.name}`} className="text-2xl font-semibold font-headline text-primary" />
                 <p className="text-muted-foreground text-sm">Track your progress per category (Coming Soon with Login)</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(cat.name === 'All' ? youtubeCoursesData.filter(c => !c.isFeatured) : filteredCourses).map(course => (
                  <CourseCardYoutube key={course.id} course={course} />
                ))}
              </div>
              {(cat.name === 'All' ? youtubeCoursesData.filter(c => !c.isFeatured).length === 0 : filteredCourses.length === 0) && (
                <p className="text-center text-muted-foreground py-10">
                  No courses found in this category yet. Check back soon!
                </p>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </>
  );
}
