import { Container } from '@/components/shared/container';
import { PortfolioItemCard } from './(components)/portfolio-item-card';
import { PortfolioUploadForm } from './(components)/portfolio-upload-form';
import { Separator } from '@/components/ui/separator';
import { GalleryHorizontalEnd } from 'lucide-react';

const portfolioItems = [
  { title: 'Handcrafted Pottery Collection', creator: 'Elena Rodriguez', description: 'A series of unique, earth-toned ceramic pieces inspired by nature.', imageUrl: 'https://placehold.co/600x400.png', projectUrl: '#', imageHint: 'pottery ceramics handmade' },
  { title: 'Community Mural Project', creator: 'Art Collective Group', description: 'A vibrant mural painted by local youth, depicting community heritage and future aspirations.', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'mural art community' },
  { title: 'Eco-Friendly Fashion Line', creator: 'Samuel Green', description: 'Sustainable clothing made from recycled materials, designed for comfort and style.', imageUrl: 'https://placehold.co/600x400.png', projectUrl: '#', imageHint: 'fashion clothes sustainable' },
  { title: 'Mobile App for Local Artisans', creator: 'Priya Sharma', description: 'An app connecting local artisans with customers, featuring profiles and product listings.', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'mobile app design' },
];

export default function ShowcasePage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <GalleryHorizontalEnd className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">Community Showcase & Portfolio</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover amazing work from our community members and share your own creations.
        </p>
      </div>

      <div className="mb-16">
        <PortfolioUploadForm />
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center font-headline">Featured Works</h2>
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
    </Container>
  );
}
