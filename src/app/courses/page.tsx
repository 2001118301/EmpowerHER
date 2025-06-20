
"use client";

import { useState } from 'react';
import { Container } from '@/components/shared/container';
import { CourseCard } from './(components)/course-card';
import { coursesData } from '@/lib/course-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import BlurText from '@/components/shared/blur-text';
import { BookOpen, Filter } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const allCategories = Array.from(new Set(coursesData.map(course => course.category))).sort();

export default function CoursesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const filteredCourses = selectedCategories.length === 0
    ? coursesData
    : coursesData.filter(course => selectedCategories.includes(course.category));

  return (
    <Container>
      <div className="text-center mb-12">
        <BookOpen className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Explore Our Courses" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our diverse range of courses designed to equip you with valuable skills. Filter by category to find what interests you.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters Section */}
        <aside className="md:col-span-1 p-1 md:sticky md:top-24 md:self-start">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-primary"/>
            <BlurText text="Filter by Category" className="text-xl font-semibold font-headline" />
          </div>
          <div className="space-y-3">
            {allCategories.map(category => (
              <Label 
                key={category} 
                htmlFor={`category-${category.toLowerCase().replace(/\s/g, '-')}`}
                className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/10 transition-colors cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"
              >
                <Checkbox
                  id={`category-${category.toLowerCase().replace(/\s/g, '-')}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                  className="h-5 w-5 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <span className="text-sm font-medium">
                  {category}
                </span>
              </Label>
            ))}
          </div>
        </aside>

        {/* Courses Grid Section */}
        <main className="md:col-span-3">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  imageUrl={course.imageUrl}
                  category={course.category}
                  imageHint={course.imageHint}
                />
              ))}
            </div>
          ) : (
            <Alert variant="default" className="border-primary/30 bg-primary/5">
              <BookOpen className="h-5 w-5 text-primary" />
              <AlertTitle>No Courses Found</AlertTitle>
              <AlertDescription className="text-muted-foreground">
                No courses match your current selection. Try adjusting your filters or browse all categories.
              </AlertDescription>
            </Alert>
          )}
        </main>
      </div>
    </Container>
  );
}
