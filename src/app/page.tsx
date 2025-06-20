"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Removed CardTitle
import { MapPin, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import BlurText from '@/components/shared/blur-text';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-purple-500 to-accent text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Empowering community"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="community empowerment abstract"
          />
           <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <Container className="relative z-10 text-center">
          <BlurText text="Welcome to Empower Hub" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline" />
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/90">
            Unlocking potential, fostering creativity, and building futures. Join our community to learn, grow, and make an impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 shadow-lg transition-transform hover:scale-105">
              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </Container>
      </div>

      {/* Introduction Section */}
      <Container>
        <div className="text-center mb-12">
          <BlurText text="Our Mission" className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary" />
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Empower Hub is dedicated to providing accessible education, mentorship, and resources to help individuals achieve their goals and build a brighter future for themselves and their communities.
          </p>
        </div>
      </Container>
      
      {/* Stats/Impact Section */}
      <div className="bg-muted">
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <BlurText text="Learners Enrolled" className="text-sm font-medium leading-none tracking-tight" />
              <Users className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,200+</div>
              <p className="text-xs text-muted-foreground">+50 this month</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <BlurText text="Courses Available" className="text-sm font-medium leading-none tracking-tight" />
              <BarChart3 className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50+</div>
              <p className="text-xs text-muted-foreground">Covering diverse skills</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <BlurText text="Community Impact" className="text-sm font-medium leading-none tracking-tight" />
              <MapPin className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 Regions</div>
              <p className="text-xs text-muted-foreground">Expanding our reach</p>
            </CardContent>
          </Card>
        </Container>
      </div>

      {/* Impact Map Placeholder */}
      <Container>
         <Card className="shadow-lg">
          <CardHeader>
            <BlurText text="Our Global Impact" className="text-2xl font-bold text-center text-primary font-headline leading-none tracking-tight" />
          </CardHeader>
          <CardContent className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
             <Image 
                src="https://placehold.co/800x450.png" 
                alt="Impact Map Placeholder" 
                width={800} 
                height={450} 
                className="rounded-md object-cover"
                data-ai-hint="world map connections"
              />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
