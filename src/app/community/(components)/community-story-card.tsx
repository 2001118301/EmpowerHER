"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from '@/components/ui/card'; // Removed CardTitle
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Film, Newspaper, Quote, ExternalLink } from 'lucide-react'; // Icons for type
import BlurText from '@/components/shared/blur-text';

interface CommunityStoryCardProps {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Testimonial';
  excerpt: string;
  imageUrl: string;
  author?: string; // Optional author
  imageHint: string;
}

const typeIcons = {
  Article: <Newspaper size={16} className="mr-1.5" />,
  Video: <Film size={16} className="mr-1.5" />,
  Testimonial: <Quote size={16} className="mr-1.5" />,
};

export function CommunityStoryCard({ id, title, type, excerpt, imageUrl, author, imageHint }: CommunityStoryCardProps) {
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
           {type === 'Video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Film size={48} className="text-white/80" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-primary border-primary/50 flex items-center">
            {typeIcons[type]} {type}
          </Badge>
          {author && <span className="text-xs text-muted-foreground">By {author}</span>}
        </div>
        <BlurText text={title} className="text-lg md:text-xl font-semibold mb-2 font-headline" />
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {type === 'Testimonial' && <Quote size={14} className="inline mr-1 -mt-1 text-muted-foreground/70"/>}
          {excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 md:p-6 border-t">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={`/community/${id}`}>
            {type === 'Video' ? 'Watch Video' : (type === 'Testimonial' ? 'Read Full Story' : 'Read Article')} 
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
