
"use client";

import { useState, useMemo } from 'react';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import BlurText from '@/components/shared/blur-text';
import { youtubeCoursesData, courseCategories, type YoutubeCourse, type CourseCategory } from '@/lib/course-data';
import { CourseCardYoutube } from './(components)/course-card-youtube';
import { Sparkles, Youtube as YoutubeIcon, Search } from 'lucide-react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>(courseCategories[0]?.name || 'All');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredCourse = useMemo(() => youtubeCoursesData.find(course => course.isFeatured), []);

  const coursesToDisplay = useMemo(() => {
    let courses = youtubeCoursesData.filter(course => !course.isFeatured); // Exclude featured from main list

    if (selectedCategory !== 'All') {
      courses = courses.filter(course => course.category === selectedCategory);
    }

    if (searchTerm) {
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return courses;
  }, [selectedCategory, searchTerm]);

  const handleTabChange = (value: string) => {
    setSelectedCategory(value as CourseCategory | 'All');
  };
  
  const allTabCategories: { name: CourseCategory | 'All'; icon: any }[] = [
    { name: 'All', icon: Sparkles },
    ...courseCategories
  ];


  return (
    <>
      <div className="bg-gradient-to-r from-primary via-purple-500 to-accent text-primary-foreground py-6 text-center shadow-md">
        <Container>
          <BlurText 
            text="Start Your Learning Journey — Free Courses, Powerful Skills" 
            className="text-2xl sm:text-3xl font-bold font-headline" 
          />
        </Container>
      </div>

      <Container className="py-8 sm:py-12">
        {featuredCourse && (
          <section className="mb-12 p-6 md:p-8 rounded-xl shadow-2xl bg-gradient-to-br from-card via-card/90 to-accent/10 border border-primary/20 backdrop-blur-md">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={featuredCourse.thumbnailUrl}
                  alt={featuredCourse.title}
                  fill={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search courses by title or topic..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-primary/30 focus:border-primary focus:ring-primary/50 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
           <p className="text-xs text-muted-foreground mt-1 text-center sm:text-left">Full search functionality with advanced filtering coming soon.</p>
        </div>
        
        <Tabs value={selectedCategory} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:w-auto bg-card p-1.5 rounded-lg shadow-sm border border-primary/10 gap-1">
              {allTabCategories.map(cat => {
                const CategoryIcon = cat.icon;
                return (
                  <TabsTrigger 
                    key={cat.name} 
                    value={cat.name} 
                    className="flex-1 lg:flex-initial data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md px-3 py-1.5 text-xs sm:text-sm rounded-md"
                  >
                    <CategoryIcon size={16} className="mr-1.5 hidden sm:inline-block" />
                    {cat.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory} className="mt-0"> {/* Use selectedCategory directly for the active tab's content */}
            <div className="text-center mb-6">
               <BlurText text={selectedCategory === 'All' ? "All Courses" : `Courses in ${selectedCategory}`} className="text-2xl font-semibold font-headline text-primary" />
               <p className="text-muted-foreground text-sm">Track your progress (Coming Soon with Login & Firebase)</p>
            </div>
            {coursesToDisplay.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {coursesToDisplay.map(course => (
                  <CourseCardYoutube key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-10">
                {searchTerm ? `No courses found matching "${searchTerm}" in this category.` : "No courses found in this category yet. Check back soon!"}
              </p>
            )}
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
}

    
