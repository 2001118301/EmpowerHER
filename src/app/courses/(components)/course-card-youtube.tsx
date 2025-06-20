
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, CheckCircle, Clock } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';
import type { YoutubeCourse } from '@/lib/course-data';

interface CourseCardYoutubeProps {
  course: YoutubeCourse;
}

export function CourseCardYoutube({ course }: CourseCardYoutubeProps) {
  const youtubeLink = `https://www.youtube.com/watch?v=${course.youtubeVideoId}`;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader className="p-0">
        <Link href={youtubeLink} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${course.title} on YouTube`}>
          <div className="aspect-video relative group">
            <Image
              src={course.thumbnailUrl}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={course.imageHint}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <Youtube size={48} className="text-white/80 group-hover:text-white transition-opacity duration-300" />
            </div>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-5">
        <BlurText text={course.title} className="text-md md:text-lg font-semibold mb-2 font-headline line-clamp-2" />
        {course.channelName && (
          <p className="text-xs text-muted-foreground mb-1">By: {course.channelName}</p>
        )}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Clock size={14} />
          <span>{course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-5 border-t border-primary/10 flex flex-col sm:flex-row items-center gap-2">
        <Button asChild className="w-full sm:w-auto flex-grow bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <Youtube size={16} className="mr-2" />
            Start Learning
          </Link>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto text-xs" disabled>
          <CheckCircle size={14} className="mr-1.5" />
          Mark Complete
        </Button>
      </CardFooter>
      <p className="px-4 pb-2 text-center text-[10px] text-muted-foreground opacity-70">
          (Progress tracking coming soon)
      </p>
    </Card>
  );
}
