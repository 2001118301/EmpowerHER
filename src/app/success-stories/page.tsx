
"use client";

import { Container } from '@/components/shared/container';
import BlurText from '@/components/shared/blur-text';
import { Award, Send } from 'lucide-react';
import { successStoriesData, type SuccessStory } from '@/lib/success-story-data';
import { SuccessStoryCard } from './(components)/success-story-card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function SuccessStoriesPage() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Award className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Their Stories. Their Strength." className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Be inspired by real girls who turned challenges into change.
        </p>
      </div>

      {/* Placeholder for Filters & Submit Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-sm text-muted-foreground italic">
          Story filtering by category coming soon!
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <Send size={16} className="mr-2" />
          Submit Your Story (Coming Soon)
        </Button>
      </div>

      {/* Success Stories Grid */}
      {successStoriesData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStoriesData.map((story) => {
            if (story.customDisplayHtml) {
              return (
                <div 
                  key={story.id}
                  dangerouslySetInnerHTML={{ __html: story.customDisplayHtml }} 
                  className="flex justify-center" // Added to help center the custom HTML if its max-width is less than cell width
                />
              );
            }
            if (story.type === 'video' && story.youtubeVideoId) {
              return (
                <div key={story.id} className="rounded-lg shadow-lg overflow-hidden bg-card flex flex-col">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${story.youtubeVideoId}`}
                      title={story.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="bg-muted" 
                    ></iframe>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                     <BlurText text={story.title} className="text-md font-semibold mb-1 font-headline line-clamp-2" />
                     <p className="text-xs text-muted-foreground line-clamp-2 flex-grow">{story.summary}</p>
                  </div>
                </div>
              );
            }
            return <SuccessStoryCard key={story.id} story={story} />;
          })}
        </div>
      ) : (
        <div className="mt-12 py-10 text-center border-2 border-dashed border-muted-foreground/30 rounded-lg">
          <p className="text-muted-foreground">No success stories available at the moment. Check back soon!</p>
        </div>
      )}

      <Separator className="my-12" />

      <div className="text-center">
        <BlurText text="Share the Inspiration" className="text-2xl font-semibold mb-4 font-headline" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          These stories are a testament to resilience and the power of opportunity. Help us create more by supporting our mission.
        </p>
        <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="/donate">Support EmpowerHER</a>
        </Button>
      </div>
    </Container>
  );
}

