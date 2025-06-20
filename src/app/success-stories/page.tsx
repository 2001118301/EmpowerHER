
import { Container } from '@/components/shared/container';
import BlurText from '@/components/shared/blur-text';
import { Award } from 'lucide-react';

export default function SuccessStoriesPage() {
  return (
    <Container>
      <div className="text-center">
        <Award className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Inspiring Success Stories" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover how Empower Hub has transformed lives. More stories coming soon!
        </p>
      </div>
      {/* Placeholder for actual success story content */}
      <div className="mt-12 py-10 text-center border-2 border-dashed border-muted-foreground/30 rounded-lg">
        <p className="text-muted-foreground">Content for success stories will be displayed here.</p>
      </div>
    </Container>
  );
}
