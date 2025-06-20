
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Film, BookOpen, ExternalLink, UserCircle } from 'lucide-react';
import type { SuccessStory } from '@/lib/success-story-data';
import BlurText from '@/components/shared/blur-text';

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  const TypeIcon = story.type === 'video' ? Film : BookOpen;
  const buttonText = story.type === 'video' ? 'Watch Now' : 'Read Full Story';

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-video relative group">
          <Image
            src={story.imageUrl}
            alt={story.title}
            fill={true}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={story.imageHint}
          />
          {story.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
              <Film size={48} className="text-white/80" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-primary border-primary/50 flex items-center">
            <TypeIcon size={14} className="mr-1.5" />
            {story.type.charAt(0).toUpperCase() + story.type.slice(1)}
          </Badge>
          {story.categoryTags && story.categoryTags.length > 0 && (
            <Badge variant="outline" className="text-xs">
              {story.categoryTags[0]} {/* Display first tag for brevity */}
            </Badge>
          )}
        </div>
        <BlurText text={story.title} className="text-lg md:text-xl font-semibold mb-2 font-headline" />
        {story.name && (
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
            <UserCircle size={16} />
            <span>{story.name}</span>
          </div>
        )}
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {story.summary}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 md:p-6 border-t">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={story.linkUrl} target="_blank" rel="noopener noreferrer">
            {buttonText}
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
