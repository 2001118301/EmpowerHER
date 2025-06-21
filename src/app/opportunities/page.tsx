
"use client";

import { useState, useMemo } from 'react';
import { Container } from '@/components/shared/container';
import BlurText from '@/components/shared/blur-text';
import { Briefcase, Building, MapPin, Search, GraduationCap, Code } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';


// Mock data for opportunities
const opportunitiesData = [
  {
    id: 'scholar-1',
    title: 'Women in Tech Scholarship',
    organization: 'InnovateHER Foundation',
    type: 'Scholarship',
    level: 'Bachelors',
    field: 'Computer Science',
    location: 'Global (Online)',
    description: 'A full-tuition scholarship for women pursuing a bachelor\'s degree in computer science or related tech fields.',
    tags: ['Tech', 'Bachelors', 'Full-Tuition'],
    url: '#',
  },
  {
    id: 'intern-1',
    title: 'Junior Web Developer Internship',
    organization: 'Tech for Good Inc.',
    type: 'Internship',
    field: 'Web Development',
    location: 'Remote',
    description: 'Assist in developing and maintaining web applications for non-profit organizations. A great learning opportunity for aspiring developers.',
    tags: ['Web Development', 'React', 'Non-Profit'],
    url: '#',
  },
  {
    id: 'scholar-2',
    title: 'Future Leaders Master\'s Grant',
    organization: 'Global Empowerment Initiative',
    type: 'Scholarship',
    level: 'Masters',
    field: 'Public Policy',
    location: 'Varies by University',
    description: 'A grant program to support exceptional women pursuing a Master\'s degree in public policy or international relations.',
    tags: ['Leadership', 'Masters', 'Grant'],
    url: '#',
  },
  {
    id: 'intern-2',
    title: 'Graphic Design Volunteer Intern',
    organization: 'Creative Impact Agency',
    type: 'Internship',
    field: 'Graphic Design',
    location: 'Remote',
    description: 'Create impactful visual content for social good campaigns. Your design skills can make a real difference.',
    tags: ['Graphic Design', 'Social Media', 'Canva'],
    url: '#',
  },
  {
    id: 'scholar-3',
    title: 'Foundation Year STEM Bursary',
    organization: 'STEM-Forward Org',
    type: 'Scholarship',
    level: 'Foundation',
    field: 'STEM',
    location: 'National',
    description: 'Financial assistance for young women enrolling in a foundation year program for a STEM-related degree.',
    tags: ['STEM', 'Foundation', 'Bursary'],
    url: '#',
  },
   {
    id: 'intern-3',
    title: 'Marketing & Outreach Internship',
    organization: 'Community Growth Hub',
    type: 'Internship',
    field: 'Marketing',
    location: 'Part-time, Remote',
    description: 'Help plan and execute digital marketing campaigns to grow our community outreach programs.',
    tags: ['Marketing', 'Community', 'Social Media'],
    url: '#',
  },
  {
    id: 'scholar-4',
    title: 'Albukhary International University Scholarship',
    organization: 'Albukhary International University (AIU)',
    type: 'Scholarship',
    level: 'Bachelors',
    field: 'Various Fields',
    location: 'Malaysia (On-Campus)',
    description: 'AIU offers scholarships for talented students from diverse backgrounds, focusing on social enterprise and holistic development. Check their admissions page for details.',
    tags: ['Bachelors', 'Malaysia', 'Social Enterprise'],
    url: 'https://aiu.edu.my/admissions-and-applications/',
  },
];


export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredOpportunities = useMemo(() => {
    return opportunitiesData.filter(opp => {
      const matchesType = selectedType === 'All' || opp.type === selectedType;
      const matchesSearch = searchTerm.trim() === '' || 
                            opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            opp.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesType && matchesSearch;
    });
  }, [searchTerm, selectedType]);

  const OpportunityCard = ({ opp }: { opp: (typeof opportunitiesData)[0] }) => {
    const TypeIcon = opp.type === 'Scholarship' ? GraduationCap : Code;
    return (
       <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-l-4 border-primary">
        <CardHeader>
           <div className="flex justify-between items-start">
            <BlurText text={opp.title} className="text-xl font-semibold font-headline pr-4" />
            <Badge variant={opp.type === 'Scholarship' ? "default" : "secondary"} className="flex-shrink-0">
                <TypeIcon className="mr-1.5 h-4 w-4" />
                {opp.type}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
            <Building size={16} /> {opp.organization}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
             {opp.level && <Badge variant="outline">Level: {opp.level}</Badge>}
             {opp.field && <Badge variant="outline">Field: {opp.field}</Badge>}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-4">{opp.description}</p>
        </CardContent>
        <CardFooter className="border-t pt-4 flex flex-col items-start gap-4">
           <div className="flex flex-wrap gap-2">
            {opp.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
            <Badge variant="outline" className="text-xs flex items-center gap-1"><MapPin size={12}/>{opp.location}</Badge>
          </div>
          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href={opp.url} target="_blank" rel="noopener noreferrer">
              Learn More & Apply
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <Container>
      <div className="text-center mb-12">
        <Briefcase className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Find Your Future Opportunity" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore scholarships and internships to kickstart your career and academic journey.
        </p>
      </div>
      
      <Card className="mb-12 shadow-lg sticky top-20 z-30 bg-card/95 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Search className="text-primary"/>
            <BlurText text="Filter Opportunities" className="text-xl font-semibold font-headline" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow">
            <Label htmlFor="search-opps">Search by keyword</Label>
            <Input 
              id="search-opps"
              placeholder="e.g., 'Web Development', 'Grant'..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-shrink-0">
             <Label>Filter by type</Label>
             <RadioGroup
              defaultValue="All"
              className="flex items-center space-x-4 mt-2"
              onValueChange={setSelectedType}
              value={selectedType}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="All" id="r-all" />
                <Label htmlFor="r-all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Scholarship" id="r-scholarship" />
                <Label htmlFor="r-scholarship">Scholarships</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Internship" id="r-internship" />
                <Label htmlFor="r-internship">Internships</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Opportunities Grid */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opp) => (
            <OpportunityCard key={opp.id} opp={opp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-muted/50 rounded-lg">
            <BlurText text="No Matching Opportunities Found" className="text-2xl font-semibold text-primary" />
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter settings.</p>
        </div>
      )}
    </Container>
  );
}
