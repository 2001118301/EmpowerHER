import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, User } from 'lucide-react';

interface PortfolioItemCardProps {
  title: string;
  creator: string;
  description: string;
  imageUrl: string;
  projectUrl?: string; // Optional link to live project
  imageHint: string;
}

export function PortfolioItemCard({ title, creator, description, imageUrl, projectUrl, imageHint }: PortfolioItemCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl font-semibold mb-2 font-headline">{title}</CardTitle>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <User size={14} className="text-primary"/>
          <span>By: {creator}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 md:p-6 border-t">
        {projectUrl ? (
          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink size={16} className="ml-2" />
            </a>
          </Button>
        ) : (
          <Button variant="secondary" disabled className="w-full">
            Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
