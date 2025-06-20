import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, UserCircle, CalendarDays } from 'lucide-react';
import Link from 'next/link';

// Mock story data, in a real app this would come from a DB
const storiesData = [
   { id: 'story-1', title: 'How Learning to Code Changed My Life', type: 'Article', excerpt: 'Follow Maria\'s journey from a beginner to a freelance web developer through Empower Hub courses.', imageUrl: 'https://placehold.co/800x450.png', author: 'Maria S.', imageHint: 'woman coding laptop', date: 'October 26, 2023', content: '<p>Maria always had a passion for technology but never knew where to start. Empower Hub\'s "Introduction to Web Development" course provided her with the foundational skills and confidence she needed. Within six months, she was building websites for local businesses.</p><p>Her journey wasn\'t without challenges, but the supportive community and dedicated mentors at Empower Hub kept her motivated. "I never thought I could make such a big career change," Maria says, "but Empower Hub made it possible."</p><h2>Key Takeaways:</h2><ul><li>The importance of foundational skills.</li><li>The power of community support.</li><li>How mentorship can accelerate learning.</li></ul>' },
   { id: 'story-2', title: 'Empower Hub: A Year in Review (Video)', type: 'Video', excerpt: 'A short documentary showcasing the impact and achievements of the Empower Hub community over the past year.', imageUrl: 'https://placehold.co/800x450.png', imageHint: 'community event group', date: 'November 15, 2023', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content: 'This video highlights key moments, success stories, and future plans for Empower Hub. Hear directly from students, mentors, and community leaders about how the platform is making a difference.'},
  // Add other stories
];


export default function StoryDetailsPage({ params }: { params: { storyId: string } }) {
  const story = storiesData.find(s => s.id === params.storyId);

  if (!story) {
    return (
      <Container>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-destructive">Story Not Found</h1>
          <p className="text-muted-foreground mt-4">The story you are looking for does not exist or may have been moved.</p>
          <Button asChild className="mt-8">
            <Link href="/community">Back to Community Stories</Link>
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Button variant="outline" asChild className="mb-8">
        <Link href="/community"><ArrowLeft size={16} className="mr-2"/> Back to Stories</Link>
      </Button>

      <article>
        <header className="mb-8">
          <Badge variant="secondary" className="mb-2 text-sm">{story.type}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 font-headline text-primary">{story.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {story.author && (
              <span className="flex items-center gap-1.5"><UserCircle size={16}/> {story.author}</span>
            )}
            <span className="flex items-center gap-1.5"><CalendarDays size={16}/> {story.date}</span>
          </div>
        </header>

        {story.type === 'Video' && story.videoUrl ? (
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe 
              width="100%" 
              height="100%" 
              src={story.videoUrl}
              title={story.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="bg-muted"
            ></iframe>
          </div>
        ) : (
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={story.imageUrl}
              alt={story.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={story.imageHint}
            />
          </div>
        )}
        
        <div 
            className="prose prose-lg max-w-none dark:prose-invert" 
            dangerouslySetInnerHTML={{ __html: story.content || story.excerpt }}
        />

      </article>
    </Container>
  );
}
