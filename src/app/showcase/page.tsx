
"use client";

import { Container } from '@/components/shared/container';
import { PortfolioItemCard } from './(components)/portfolio-item-card';
import { PortfolioUploadForm } from './(components)/portfolio-upload-form';
import { Separator } from '@/components/ui/separator';
import { GalleryHorizontalEnd, Brush, Globe } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  { title: 'Handcrafted Pottery Collection', creator: 'Elena Rodriguez', description: 'A series of unique, earth-toned ceramic pieces inspired by nature.', imageUrl: 'https://placehold.co/600x400.png', projectUrl: '#', imageHint: 'pottery ceramics handmade' },
  { title: 'Community Mural Project', creator: 'Art Collective Group', description: 'A vibrant mural painted by local youth, depicting community heritage and future aspirations.', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'mural art community' },
  { title: 'Eco-Friendly Fashion Line', creator: 'Samuel Green', description: 'Sustainable clothing made from recycled materials, designed for comfort and style.', imageUrl: 'https://placehold.co/600x400.png', projectUrl: '#', imageHint: 'fashion clothes sustainable' },
  { title: 'Mobile App for Local Artisans', creator: 'Priya Sharma', description: 'An app connecting local artisans with customers, featuring profiles and product listings.', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'mobile app design' },
];

const externalShowcasePlatforms = [
  {
    id: 'behance',
    title: 'Behance',
    description: 'A free online portfolio platform by Adobe where artists, designers, and photographers can showcase their work to a global audience and get discovered.',
    url: 'https://www.behance.net/',
    icon: <Brush size={20} className="text-primary" />,
    category: 'Creative Portfolios'
  }
];

export default function ShowcasePage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <GalleryHorizontalEnd className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Community Showcase & Portfolio" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover amazing work from our community members and share your own creations.
        </p>
      </div>

      <div className="mb-12">
        <PortfolioUploadForm />
      </div>

      <Separator className="my-12" />

      <div>
        <BlurText text="Featured Works from Empower Hub" className="text-3xl font-bold mb-8 text-center font-headline" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2"> {/* Note: XL is 2 cols for wider cards */}
          {portfolioItems.map((item, index) => (
            <PortfolioItemCard
              key={index}
              title={item.title}
              creator={item.creator}
              description={item.description}
              imageUrl={item.imageUrl}
              projectUrl={item.projectUrl}
              imageHint={item.imageHint}
            />
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div>
        <BlurText text="Platforms to Showcase Your Work" className="text-3xl font-bold mb-8 text-center font-headline" />
         <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore these external platforms to build your creative portfolio and reach a wider audience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Centering for single item */}
          {externalShowcasePlatforms.map((platform) => (
             <Card key={platform.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg md:col-start-2 lg:col-start-2"> {/* Centering for single item */}
              <CardHeader>
                <div className="flex items-center gap-3">
                  {platform.icon}
                  <BlurText text={platform.title} className="text-xl font-semibold font-headline" />
                </div>
                 <CardDescription className="text-xs text-muted-foreground pt-1">{platform.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-4">{platform.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    Visit {platform.title}
                    <Globe size={16} className="ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

    </Container>
  );
}

    