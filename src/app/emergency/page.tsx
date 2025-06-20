
"use client";

import { Container } from '@/components/shared/container';
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Phone, Globe, ShieldAlert, LifeBuoy, Siren, Info, Users, BookOpen } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';

interface Resource {
  id: string;
  name: string;
  description: string;
  phone?: string;
  website?: string;
  type: 'hotline' | 'online' | 'local' | 'information' | 'supportNetwork';
  icon?: React.ReactNode; // Optional specific icon
}

const emergencyResources: Resource[] = [
  { 
    id: 'national-crisis-hotline', 
    name: 'National Crisis Hotline (Example)', 
    description: '24/7 confidential support for individuals in distress. Please find your specific country\'s primary crisis number.', 
    phone: '1-800-273-TALK (8255) / 988 (US Example)', 
    type: 'hotline',
    icon: <Phone className="h-5 w-5" />
  },
  { 
    id: 'local-shelter', 
    name: 'Local Women\'s Shelter (Example)', 
    description: 'Provides safe housing and support services for women and children. Search for "[Your City/Region] women\'s shelter".', 
    phone: '(City Specific) 555-0100', 
    type: 'local',
    icon: <Users className="h-5 w-5" />
  },
  {
    id: 'befrienders-worldwide',
    name: 'Befrienders Worldwide',
    description: 'A global network of emotional support centers. Helps users find a helpline in their own country for confidential support.',
    website: 'https://www.befrienders.org/',
    type: 'supportNetwork',
    icon: <Globe className="h-5 w-5" />
  },
  {
    id: 'un-women-violence',
    name: 'UN Women - Violence Against Women Resources',
    description: 'Authoritative information and resources about ending violence against women. Understand different forms of violence and global efforts.',
    website: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women/facts-and-figures',
    type: 'information',
    icon: <Info className="h-5 w-5" />
  },
  {
    id: 'unicef-online-safety',
    name: 'UNICEF - Online Safety for Youth',
    description: 'Articles, guides, and tips for young people on staying safe online, dealing with cyberbullying, and protecting privacy.',
    website: 'https://www.unicef.org/protection/online-safety',
    type: 'information',
    icon: <ShieldAlert className="h-5 w-5" />
  },
  { 
    id: 'child-helpline-international', 
    name: 'Child Helpline International', 
    description: 'Global network of child helplines. Connects to national child helplines; find your country-specific number on their site.', 
    website: 'https://www.childhelplineinternational.org/',
    type: 'hotline',
    icon: <Phone className="h-5 w-5" />
  },
  { 
    id: 'local-legal-aid', 
    name: 'Local Legal Aid Society (Example)', 
    description: 'Provides free legal services to low-income individuals. Search for "[Your City/Region] legal aid".', 
    phone: '(City Specific) 555-0200', 
    type: 'local',
    icon: <BookOpen className="h-5 w-5" />
  },
];

const getTypeStyles = (type: Resource['type']) => {
  switch (type) {
    case 'hotline':
      return 'border-destructive bg-destructive/10 text-destructive';
    case 'local':
      return 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400';
    case 'online':
      return 'border-green-500 bg-green-500/10 text-green-600 dark:text-green-400';
    case 'information':
      return 'border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400';
    case 'supportNetwork':
      return 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400';
    default:
      return 'border-foreground text-foreground';
  }
}

export default function EmergencyHelpPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <Siren className="mx-auto h-16 w-16 text-destructive mb-4" />
        <BlurText text="Emergency Help & Resources" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-destructive" />
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your safety is important. The resources below can provide support. Remember to update placeholder numbers with your local, official emergency contacts.
        </p>
      </div>

      <Alert variant="destructive" className="mb-12">
        <ShieldAlert className="h-5 w-5" />
        <AlertTitle><BlurText text="Immediate Danger: Contact Local Authorities First!" className="font-bold" /></AlertTitle>
        <AlertDescription>
          If you or someone you know is in immediate danger, please contact your local emergency services immediately (e.g., 911, 112, 999, or your country's specific emergency number).
          The resources on this page are for support and information but are NOT a substitute for emergency response.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencyResources.map((resource) => (
          <Card key={resource.id} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col border-t-4 border-primary">
            <CardHeader>
              <div className="flex items-start gap-3 mb-2">
                <span className={`p-2 rounded-full bg-primary/10 text-primary`}>
                  {resource.icon || <LifeBuoy className="h-6 w-6" />}
                </span>
                <div>
                  <BlurText text={resource.name} className="font-headline text-xl font-semibold leading-tight" />
                  <div className={`mt-1 capitalize px-2 py-0.5 text-xs font-semibold rounded-full border inline-flex items-center ${getTypeStyles(resource.type)}`}>
                    {resource.type.replace(/([A-Z])/g, ' $1')} {/* Add space before capital letters for display */}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{resource.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 pt-4 border-t">
              {resource.phone && (
                <a href={`tel:${resource.phone.replace(/\s|\(|\)/g, '')}`} className="flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                  <Phone size={16} /> {resource.phone}
                </a>
              )}
              {resource.website && (
                <a href={resource.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                  <Globe size={16} /> Visit Website
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
       <p className="text-center text-sm text-muted-foreground mt-12">
        Please verify and update placeholder contact details (marked "Example" or "City Specific") with actual local information. Empower Hub provides these links for informational purposes; we do not endorse or control these external sites.
      </p>
    </Container>
  );
}

    