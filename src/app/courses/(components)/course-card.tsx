
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from '@/components/ui/card'; // Removed CardTitle
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tag } from 'lucide-react'; 
import BlurText from '@/components/shared/blur-text';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  progress?: number; 
  imageHint: string;
}

export function CourseCard({ id, title, description, imageUrl, category, progress, imageHint }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={imageUrl}
            alt={title}
            fill={true}
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Tag size={14} className="text-primary"/>
          <span>{category}</span>
        </div>
        <BlurText text={title} className="text-lg md:text-xl font-semibold mb-2 font-headline" />
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} aria-label={`${progress}% complete`} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 md:p-6 border-t">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={`/courses/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

