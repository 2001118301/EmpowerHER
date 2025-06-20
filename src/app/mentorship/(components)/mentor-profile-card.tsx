
"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'; // Removed CardTitle
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';

interface MentorProfileCardProps {
  name: string;
  expertise: string[];
  bio: string;
  imageUrl: string;
  imageHint: string;
}

export function MentorProfileCard({ name, expertise, bio, imageUrl, imageHint }: MentorProfileCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="items-center text-center p-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
          <Image
            src={imageUrl}
            alt={name}
            fill={true}
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
        <BlurText text={name} className="text-xl font-bold font-headline leading-none tracking-tight" />
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {expertise.map(skill => (
            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">{skill}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6">
        <p className="text-sm text-muted-foreground line-clamp-3 text-center">{bio}</p>
      </CardContent>
      <CardFooter className="p-6 border-t">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <MessageSquare size={16} className="mr-2" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}

