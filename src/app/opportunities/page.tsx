
import { Container } from '@/components/shared/container';
import BlurText from '@/components/shared/blur-text';
import { Briefcase, Building, Search } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Mock data for opportunities
const opportunities = [
  {
    id: 'opp-1',
    title: 'Junior Web Developer Internship',
    company: 'Tech for Good Inc.',
    location: 'Remote',
    type: 'Internship',
    description: 'Assist in developing and maintaining web applications for non-profit organizations. A great learning opportunity for aspiring developers.',
    tags: ['Web Development', 'React', 'Non-Profit'],
  },
  {
    id: 'opp-2',
    title: 'Graphic Design Volunteer',
    company: 'Global Empowerment Initiative',
    location: 'Remote',
    type: 'Volunteer',
    description: 'Create impactful visual content for our social media campaigns and awareness programs. Your design skills can make a real difference.',
    tags: ['Graphic Design', 'Social Media', 'Canva'],
  },
  {
    id: 'opp-3',
    title: 'Small Business Grant for Women Entrepreneurs',
    company: 'InnovateHER Foundation',
    location: 'National',
    type: 'Grant',
    description: 'A grant program designed to support women-led startups with funding and mentorship. Applications open until December.',
    tags: ['Entrepreneurship', 'Funding', 'Startup'],
  },
];


export default function OpportunitiesPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <Briefcase className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Opportunities & Careers" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find internships, volunteer roles, grants, and career opportunities to apply your skills.
        </p>
      </div>
      
      {/* Search and Filter Section - Placeholder */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Search className="text-primary"/>
            <BlurText text="Find Your Next Opportunity" className="text-xl font-semibold font-headline" />
          </div>
          <CardDescription>Use the filters below to find relevant opportunities. (Filtering coming soon)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Search by title or keyword..." />
            <Input placeholder="Location (e.g., Remote)" />
            <Button className="w-full md:w-auto" variant="default">Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((opp) => (
          <Card key={opp.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <CardHeader>
              <BlurText text={opp.title} className="text-xl font-semibold font-headline" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                <Building size={16} /> {opp.company}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">{opp.type}</Badge>
                <Badge variant="outline">{opp.location}</Badge>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-4">{opp.description}</p>
            </CardContent>
            <CardFooter className="border-t pt-4 flex flex-col items-start gap-4">
               <div className="flex flex-wrap gap-2">
                {opp.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Learn More & Apply
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

    </Container>
  );
}
