import { Container } from '@/components/shared/container';
import { CommunityStoryCard } from './(components)/community-story-card';
import { HeartHandshake } from 'lucide-react';

const stories = [
  { id: 'story-1', title: 'How Learning to Code Changed My Life', type: 'Article', excerpt: 'Follow Maria\'s journey from a beginner to a freelance web developer through Empower Hub courses.', imageUrl: 'https://placehold.co/600x400.png', author: 'Maria S.', imageHint: 'woman coding laptop' },
  { id: 'story-2', title: 'Empower Hub: A Year in Review (Video)', type: 'Video', excerpt: 'A short documentary showcasing the impact and achievements of the Empower Hub community over the past year.', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'community event group' },
  { id: 'story-3', title: 'My Mentorship Experience', type: 'Testimonial', excerpt: '"The mentorship program provided invaluable guidance and helped me land my dream job. Highly recommend!"', imageUrl: 'https://placehold.co/600x400.png', author: 'John B.', imageHint: 'person smiling happy' },
  { id: 'story-4', title: 'Starting a Small Business with New Skills', type: 'Article', excerpt: 'Learn how Empower Hub\'s entrepreneurship course helped Sarah launch her online store.', imageUrl: 'https://placehold.co/600x400.png', author: 'Sarah L.', imageHint: 'small business products' },
];


export default function CommunityStoriesPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <HeartHandshake className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">Inspiring Community Stories</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Read articles, watch videos, and hear testimonials from members of the Empower Hub community.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </Container>
  );
}
