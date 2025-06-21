
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

  const handleSearch = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (searchTerm.trim() === '') {
      setSearchedCourses(null);
      // If search is cleared, we might want to revert to selectedCategory or show nothing
      // For now, clearing search means showing prompt unless a category is active
      return;
    }
    const results = youtubeCoursesData.filter(course =>
      (
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
        return youtubeCoursesData;
      }
      return youtubeCoursesData.filter(course => course.category === selectedCategory);
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

          {/* Featured Courses Section */}
          {!searchTerm && !selectedCategory && (
            <section className="mb-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold rounded-full uppercase tracking-wider shadow-md">
                  Featured Resources
                </span>
              </div>
              <div className="flex flex-wrap justify-center items-start gap-6">
                {/* Card 1: Replaced YouTube Video */}
                <div style={{maxWidth: '320px', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: '#fff', fontFamily: 'sans-serif', border: '1px solid #eee'}}>
                  <iframe width="100%" height="162" style={{borderRadius: '8px', border: 'none'}}
                    src="https://www.youtube.com/embed/YJXUOJKtn8o"
                    title="How to Communicate Clearly and Concisely"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                  </iframe>
                  <h3 style={{marginTop: '12px', fontSize: '1.2em', color: '#333'}}>How to Communicate Clearly and Concisely</h3>
                  <p style={{color: '#555', fontSize: '0.9em', lineHeight: 1.5}}>A free mini-training on clear and concise communication, available on YouTube.</p>
                </div>
                {/* Card 2: YouTube */}
                <div style={{maxWidth: '320px', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: '#fff', fontFamily: 'sans-serif', border: '1px solid #eee'}}>
                  <iframe width="100%" height="162" style={{borderRadius: '8px', border: 'none'}}
                    src="https://www.youtube.com/embed/-RXsK9_bk6s" 
                    title="Learn English Conversation for Beginners"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                  <h3 style={{marginTop: '12px', fontSize: '1.2em', color: '#333'}}>English Conversation for Beginners</h3>
                  <p style={{color: '#555', fontSize: '0.9em', lineHeight: 1.5}}>Perfect for starting English with daily use phrases and simple dialogues.</p>
                </div>
                {/* Card 3: YouTube */}
                <div style={{maxWidth: '320px', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: '#fff', fontFamily: 'sans-serif', border: '1px solid #eee'}}>
                  <iframe width="100%" height="162" style={{borderRadius: '8px', border: 'none'}}
                    src="https://www.youtube.com/embed/v6EQz4hGP3g"
                    title="English Speaking Course - Day 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                  <h3 style={{marginTop: '12px', fontSize: '1.2em', color: '#333'}}>English Speaking Course – Day 1</h3>
                  <p style={{color: '#555', fontSize: '0.9em', lineHeight: 1.5}}>Start with easy daily English speaking practice for beginners.</p>
                </div>
                 {/* Card 4: Alison Sewing Course */}
                 <div style={{maxWidth: '320px', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: '#fff', fontFamily: 'sans-serif', border: '1px solid #eee'}}>
                  <img src="https://cdn.alison.com/course/intro/2111/alison-courseware-basics-of-sewing.jpg" alt="Basics of Sewing Course" style={{width: '100%', borderRadius: '8px', height: '162px', objectFit: 'cover'}}/>
                  <h3 style={{marginTop: '12px', fontSize: '1.2em', color: '#333'}}>Basics of Sewing (Alison)</h3>
                  <p style={{color: '#555', fontSize: '0.9em', lineHeight: 1.5}}>A free structured course on the basics of sewing, offered by Alison.</p>
                  <a href="https://alison.com/course/basics-of-sewing" target="_blank" rel="noopener noreferrer" style={{display: 'block', marginTop: '10px', padding: '10px', backgroundColor: '#0a9396', color: 'white', textAlign: 'center', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>Start Course</a>
                </div>
              </div>
            </section>
          )}
          
          {/* Course Grid Area */}
          <div>
            {showPrompt && !(!searchTerm && !selectedCategory) && ( // Hide prompt if featured section is shown
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
