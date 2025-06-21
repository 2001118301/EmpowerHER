
"use client";

import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import Link from 'next/link';
import BlurText from '@/components/shared/blur-text';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-purple-500 to-accent text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-full h-full object-cover opacity-20"
            src="https://cdn.pixabay.com/video/2021/09/19/89066-613200185_tiny.mp4"
          />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <Container className="relative z-10 text-center">
          <BlurText text="Welcome to EmpowerHER" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline whitespace-nowrap" />
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/90">
            Unlocking potential, fostering creativity, and building futures. Join our community to learn, grow, and make an impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </Container>
      </div>

      {/* Introduction Section */}
      <Container>
        <div className="text-center py-12">
            <div className="max-w-4xl mx-auto bg-accent text-accent-foreground p-8 md:p-12 rounded-xl shadow-lg">
                <BlurText text="Our Mission" className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-6" />
                <p className="text-lg sm:text-xl leading-relaxed italic">
                    "EmpowerHER is dedicated to unlocking the potential of rural girls through education, mentorship, and opportunity, ensuring every girl, regardless of where she lives, has the chance to learn, grow, and shape her own future with confidence and independence."
                </p>
            </div>
        </div>
      </Container>
      
    </>
  );
}
