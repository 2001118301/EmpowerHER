
"use client";

import { useState, useMemo, FormEvent } from 'react';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import BlurText from '@/components/shared/blur-text';
import { youtubeCoursesData, courseCategories, type YoutubeCourse, type CourseCategory } from '@/lib/course-data';
import { CourseCardYoutube } from './(components)/course-card-youtube';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Youtube as YoutubeIcon, ListFilter, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All' | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedCourses, setSearchedCourses] = useState<YoutubeCourse[] | null>(null);

  const featuredCourse = useMemo(() => youtubeCoursesData.find(course => course.isFeatured), []);

  const handleSearch = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (searchTerm.trim() === '') {
      setSearchedCourses(null);
      // If search is cleared, we might want to revert to selectedCategory or show nothing
      // For now, clearing search means showing prompt unless a category is active
      return;
    }
    const results = youtubeCoursesData.filter(course =>
      !course.isFeatured && (
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchedCourses(results);
    setSelectedCategory(null); // Clear category selection when searching
  };
  
  const handleCategorySelect = (categoryName: CourseCategory | 'All' | null) => {
    setSelectedCategory(categoryName);
    setSearchTerm(''); // Clear search term
    setSearchedCourses(null); // Clear search results
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchedCourses(null);
    // Optionally, re-select the 'All' category or leave it null
    // setSelectedCategory('All'); 
  };


  const coursesToDisplay = useMemo(() => {
    if (searchedCourses !== null) {
      return searchedCourses;
    }
    if (selectedCategory) {
      if (selectedCategory === 'All') {
        return youtubeCoursesData.filter(course => !course.isFeatured);
      }
      return youtubeCoursesData.filter(course => course.category === selectedCategory && !course.isFeatured);
    }
    return []; // No category selected, no search active
  }, [selectedCategory, searchedCourses]);

  const CategorySidebarContent = ({ onSelect }: { onSelect: (category: CourseCategory | 'All' | null) => void }) => (
    <nav className="flex flex-col space-y-1 p-3">
      {courseCategories.map(cat => {
        const CategoryIcon = cat.icon;
        const isActive = selectedCategory === cat.name;
        return (
          <Button
            key={cat.name}
            variant={isActive ? "default" : "ghost"}
            className={cn(
              "w-full justify-start text-sm h-auto py-2.5 px-3",
              isActive ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-primary/10 hover:text-primary"
            )}
            onClick={() => onSelect(cat.name)}
          >
            <CategoryIcon size={18} className="mr-3 shrink-0" />
            {cat.name}
          </Button>
        );
      })}
    </nav>
  );

  const showPrompt = !selectedCategory && searchedCourses === null && searchTerm.trim() === '';

  return (
    <div className="flex flex-col md:flex-row bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-60 lg:w-72 border-r border-border bg-card fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto py-4 z-40 shadow-sm">
        <ScrollArea className="flex-grow">
           <CategorySidebarContent onSelect={handleCategorySelect} />
        </ScrollArea>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:pl-60 lg:md:pl-72 pt-16"> {/* Adjust padding for fixed sidebar and header height (h-16) */}
        <div className="bg-gradient-to-r from-primary via-purple-500 to-accent text-primary-foreground py-6 text-center shadow-md sticky top-16 z-30"> {/* Sticky banner below main header */}
            <BlurText
                text="Start Your Learning Journey — Free Courses, Powerful Skills"
                className="text-2xl sm:text-3xl font-bold font-headline"
            />
        </div>
        <Container className="py-8 sm:py-12">
          {/* Mobile Category Trigger */}
          <div className="md:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-center text-base py-3 shadow-sm border-primary/50 hover:bg-primary/5">
                  <ListFilter className="mr-2 h-5 w-5 text-primary" /> Select Category
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[280px] bg-card">
                <ScrollArea className="h-full py-4">
                  <CategorySidebarContent onSelect={(cat) => {
                    handleCategorySelect(cat);
                    // Close sheet after selection on mobile if Sheet had an onOpenChange prop
                  }} />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search courses by title or topic..."
                className="w-full pl-10 pr-16 py-3 rounded-lg border-2 border-primary/30 focus:border-primary focus:ring-primary/50 transition-colors text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              {searchTerm && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-10 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={clearSearch}
                >
                  <XCircle className="h-5 w-5 text-muted-foreground hover:text-destructive" />
                </Button>
              )}
              <Button type="submit" variant="default" className="absolute right-1 top-1/2 -translate-y-1/2 h-9 rounded-l-none">
                <Search className="h-5 w-5 md:hidden" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
              Find free, empowering courses across key life skills.
            </p>
          </form>

          {/* Featured Course */}
          {featuredCourse && !searchTerm && !selectedCategory && ( // Show featured course only if no search/filter active
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
          
          {/* Course Grid Area */}
          <div>
            {showPrompt && !featuredCourse && ( // Show prompt only if featured course is also not shown
                 <div className="text-center py-10 my-8 bg-muted/50 rounded-lg shadow">
                    <ListFilter size={48} className="mx-auto text-muted-foreground mb-4" />
                    <BlurText text="Discover Your Next Skill" className="text-2xl font-semibold mb-2 font-headline text-primary" />
                    <p className="text-muted-foreground">Select a category from the sidebar or use the search bar to find empowering courses.</p>
                </div>
            )}

            {searchedCourses !== null && searchedCourses.length === 0 && (
              <div className="text-center py-10 my-8 bg-amber-500/10 text-amber-700 rounded-lg shadow">
                 <XCircle size={48} className="mx-auto mb-4" />
                 <BlurText text={`No courses found for "${searchTerm}"`} className="text-2xl font-semibold mb-2 font-headline" />
                 <p>Try searching for a different topic or explore our categories!</p>
              </div>
            )}
            
            {(coursesToDisplay.length > 0) && (
              <>
                <div className="text-center mb-6">
                  <BlurText text={
                      searchedCourses !== null ? `Search Results for "${searchTerm}"` : 
                      (selectedCategory ? `Courses in ${selectedCategory}` : "Explore Courses")
                    } className="text-2xl font-semibold font-headline text-primary" />
                  <p className="text-muted-foreground text-sm">Track your progress (Coming Soon with Login & Firebase)</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"> {/* Adjusted lg to 2, xl to 3 for better card fit */}
                  {coursesToDisplay.map(course => (
                    <CourseCardYoutube key={course.id} course={course} />
                  ))}
                </div>
              </>
            )}

             {selectedCategory && coursesToDisplay.length === 0 && searchedCourses === null && (
                 <div className="text-center py-10 my-8 bg-sky-500/10 text-sky-700 rounded-lg shadow">
                    <ListFilter size={48} className="mx-auto mb-4" />
                    <BlurText text={`No courses currently available in ${selectedCategory}`} className="text-2xl font-semibold mb-2 font-headline" />
                    <p>Check back soon or explore other categories!</p>
                </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}
