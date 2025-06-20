
"use client";

import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { MentorProfileCard } from './(components)/mentor-profile-card';
import { Users, MessageCircle, UserPlus, Send, Paperclip, Smile, Lightbulb, Link as LinkIcon, Briefcase, Globe } from 'lucide-react';
import Image from 'next/image';
import BlurText from '@/components/shared/blur-text';
import { Separator } from '@/components/ui/separator';

const mentors = [
  { name: 'Aisha Khan', expertise: ['Web Development', 'JavaScript'], bio: 'Software engineer with 5+ years of experience, passionate about helping beginners.', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'woman smiling professional' },
  { name: 'Ben Carter', expertise: ['Graphic Design', 'Branding'], bio: 'Freelance designer focused on visual identity and user experience design.', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'man glasses friendly' },
  { name: 'Chloe Davis', expertise: ['Entrepreneurship', 'Marketing'], bio: 'Startup founder and marketing strategist, eager to share insights.', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'woman confident business' },
];

const inspirationResources = [
  {
    id: 'ted-ed',
    title: 'TED-Ed (Education)',
    description: 'A library of short, beautifully animated educational videos on a vast range of subjects. Sparks curiosity and explains complex topics simply, broadening horizons and helping discover passions.',
    url: 'https://ed.ted.com/',
    icon: <Lightbulb size={20} className="text-primary" />,
    category: 'Inspiration & Learning'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'The world\'s largest professional network. Build a profile, connect with professionals in industries of interest, and follow companies. An essential tool for career visibility and networking.',
    url: 'https://www.linkedin.com/',
    icon: <Briefcase size={20} className="text-primary" />,
    category: 'Professional Networking'
  }
];

export default function MentorshipPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <Users className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Mentorship Program" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Connect with experienced mentors, get guidance, and accelerate your learning journey.
        </p>
      </div>

      {/* Mentor Profiles Section */}
      <section className="mb-12">
        <BlurText text="Meet Our Mentors" className="text-3xl font-bold mb-8 text-center font-headline" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <MentorProfileCard
              key={mentor.name}
              name={mentor.name}
              expertise={mentor.expertise}
              bio={mentor.bio}
              imageUrl={mentor.imageUrl}
              imageHint={mentor.imageHint}
            />
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Mentor Chat Placeholder Section */}
      <section className="mb-12">
        <BlurText text="Mentor Chat" className="text-3xl font-bold mb-8 text-center font-headline" />
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground">
            <div className="flex items-center gap-3">
              <MessageCircle size={28}/>
              <BlurText text="Secure Messaging" className="text-2xl font-bold font-headline leading-none tracking-tight" />
            </div>
            <CardDescription className="text-primary-foreground/80">Connect with your mentor through our secure chat platform.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex h-[500px] border-t">
              {/* Contact List */}
              <div className="w-1/3 border-r bg-muted/50 p-4 space-y-3 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-2">Contacts</h3>
                {[
                  { name: 'Aisha Khan', status: 'Online', avatar: 'https://placehold.co/40x40.png', imageHint: 'woman avatar' },
                  { name: 'Ben Carter', status: 'Offline', avatar: 'https://placehold.co/40x40.png', imageHint: 'man avatar' }
                ].map(contact => (
                  <div key={contact.name} className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/10 cursor-pointer transition-colors">
                    <div className="relative">
                      <Image src={contact.avatar} alt={contact.name} width={40} height={40} className="rounded-full" data-ai-hint={contact.imageHint} />
                      <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-muted/50 ${contact.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Chat Area */}
              <div className="w-2/3 flex flex-col">
                <div className="p-4 border-b flex items-center gap-3 bg-card">
                   <Image src="https://placehold.co/40x40.png" alt="Aisha Khan" width={40} height={40} className="rounded-full" data-ai-hint="woman avatar" />
                   <div>
                      <p className="font-semibold">Aisha Khan</p>
                      <p className="text-xs text-green-500">Online</p>
                   </div>
                </div>
                <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-background">
                  {/* Example Messages */}
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Hi there! How can I help you with your web development project today?</p>
                      <p className="text-xs text-muted-foreground mt-1 text-right">10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Hi Aisha! I'm struggling with CSS flexbox. Can you explain it simply?</p>
                       <p className="text-xs text-primary-foreground/70 mt-1 text-right">10:02 AM</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t bg-card">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon"><Paperclip size={20} /></Button>
                    <Button variant="ghost" size="icon"><Smile size={20} /></Button>
                    <Input type="text" placeholder="Type your message..." className="flex-grow" />
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground"><Send size={18} /></Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Full chat functionality is under development. This is a visual placeholder.
        </p>
      </section>

      <Separator className="my-12" />
      
      {/* Inspirational Resources Section */}
      <section className="mb-12">
        <BlurText text="Career Inspiration & Networking" className="text-3xl font-bold mb-8 text-center font-headline" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inspirationResources.map((resource) => (
            <Card key={resource.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {resource.icon}
                  <BlurText text={resource.title} className="text-xl font-semibold font-headline" />
                </div>
                <CardDescription className="text-xs text-muted-foreground pt-1">{resource.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-4">{resource.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Visit {resource.title}
                    <LinkIcon size={16} className="ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Mentor Sign-up Section */}
      <section>
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
                <UserPlus size={28} className="text-primary"/>
                <BlurText text="Become a Mentor" className="text-2xl font-bold font-headline text-primary leading-none tracking-tight" />
            </div>
            <CardDescription>Share your knowledge and experience. Help shape the next generation of talent.</CardDescription>
          </CardHeader>
          <form>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mentor-name">Full Name</Label>
                  <Input id="mentor-name" placeholder="e.g., Jane Doe" />
                </div>
                <div>
                  <Label htmlFor="mentor-email">Email Address</Label>
                  <Input id="mentor-email" type="email" placeholder="e.g., jane.doe@example.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="mentor-expertise">Areas of Expertise (comma-separated)</Label>
                <Input id="mentor-expertise" placeholder="e.g., Web Development, Graphic Design, Project Management" />
              </div>
              <div>
                <Label htmlFor="mentor-bio">Short Bio & Motivation</Label>
                <Textarea id="mentor-bio" placeholder="Tell us about yourself and why you want to be a mentor..." />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90">Apply to be a Mentor</Button>
            </CardFooter>
          </form>
        </Card>
      </section>
    </Container>
  );
}

    