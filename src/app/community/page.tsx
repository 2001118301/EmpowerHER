
"use client";

import { Container } from '@/components/shared/container';
import { CommunityStoryCard } from './(components)/community-story-card';
import { HeartHandshake, Users, Globe, BookOpen } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stories = [
  { id: 'story-1', title: 'How Learning to Code Changed My Life', type: 'Article', excerpt: 'Follow Maria\'s journey from a beginner to a freelance web developer through Empower Hub courses.', imageUrl: 'https://placehold.co/600x400.png', author: 'Maria S.', imageHint: 'woman coding laptop' },
  { id: 'story-2', title: 'Empower Hub: A Year in Review (Video)', type: 'Video', excerpt: 'A short documentary showcasing the impact and achievements of the Empower Hub community over the past year.', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'community event group' },
  { id: 'story-3', title: 'My Mentorship Experience', type: 'Testimonial', excerpt: '"The mentorship program provided invaluable guidance and helped me land my dream job. Highly recommend!"', imageUrl: 'https://placehold.co/600x400.png', author: 'John B.', imageHint: 'person smiling happy' },
  { id: 'story-4', title: 'Starting a Small Business with New Skills', type: 'Article', excerpt: 'Learn how Empower Hub\'s entrepreneurship course helped Sarah launch her online store.', imageUrl: 'https://placehold.co/600x400.png', author: 'Sarah L.', imageHint: 'small business products' },
];

const inspirationalCommunities = [
  {
    id: 'girl-up',
    title: 'Girl Up',
    description: 'A leadership development initiative from the UN Foundation. Features stories of young female leaders, resources for starting clubs, and info on global gender equality issues.',
    url: 'https://girlup.org/',
    icon: <Users size={20} className="text-primary" />,
    category: 'Leadership & Advocacy'
  },
  {
    id: 'malala-fund',
    title: 'Malala Fund',
    description: 'Official site of Malala Yousafzai\'s organization, advocating for girls\' education. Features stories, research, and ways to take action.',
    url: 'https://malala.org/',
    icon: <BookOpen size={20} className="text-primary" />,
    category: 'Girls\' Education & Inspiration'
  }
];


export default function CommunityStoriesPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <HeartHandshake className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Inspiring Community Stories" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Read articles, watch videos, and hear testimonials from members of the Empower Hub community.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {stories.map((story) => (
          <CommunityStoryCard
            key={story.id}
            id={story.id}
            title={story.title}
            type={story.type as 'Article' | 'Video' | 'Testimonial'}
            excerpt={story.excerpt}
            imageUrl={story.imageUrl}
            author={story.author}
            imageHint={story.imageHint}
          />
        ))}
      </div>

      <Separator className="my-12" />

      <div>
        <BlurText text="Global Voices & Inspiration" className="text-3xl font-bold mb-8 text-center font-headline" />
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore organizations making a global impact and discover more inspiring stories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inspirationalCommunities.map((community) => (
            <Card key={community.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {community.icon}
                  <BlurText text={community.title} className="text-xl font-semibold font-headline" />
                </div>
                <CardDescription className="text-xs text-muted-foreground pt-1">{community.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-4">{community.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={community.url} target="_blank" rel="noopener noreferrer">
                    Visit {community.title}
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

    