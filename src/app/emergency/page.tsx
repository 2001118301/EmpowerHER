import { Container } from '@/components/shared/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Phone, Globe, ShieldAlert, LifeBuoy, Siren } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  description: string;
  phone?: string;
  website?: string;
  type: 'hotline' | 'online' | 'local';
}

const emergencyResources: Resource[] = [
  { id: 'national-hotline', name: 'National Crisis Hotline', description: '24/7 confidential support for individuals in distress.', phone: '1-800-273-TALK (8255)', type: 'hotline' },
  { id: 'local-shelter', name: 'Local Women\'s Shelter', description: 'Provides safe housing and support services for women and children.', phone: ' (City Specific) 555-0100', type: 'local' },
  { id: 'online-safety', name: 'Online Safety Guide', description: 'Resources for staying safe online and reporting abuse.', website: 'https://www.onlinesafety.org (example)', type: 'online' },
  { id: 'mental-health', name: 'Mental Health Support Network', description: 'Find local mental health professionals and support groups.', website: 'https://www.mentalhealthsupport.org (example)', type: 'online' },
  { id: 'child-helpline', name: 'Child Helpline International', description: 'Global network of child helplines offering support to children and young people.', phone: ' (Country Specific) 116111', type: 'hotline' },
  { id: 'legal-aid', name: 'Local Legal Aid Society', description: 'Provides free legal services to low-income individuals.', phone: '(City Specific) 555-0200', type: 'local' },
];

export default function EmergencyHelpPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <Siren className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-destructive">Emergency Help & Resources</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          If you are in immediate danger, please call your local emergency number (e.g., 911, 112).
          Below are additional resources for support.
        </p>
      </div>

      <Alert variant="destructive" className="mb-12">
        <ShieldAlert className="h-5 w-5" />
        <AlertTitle className="font-bold">Immediate Danger</AlertTitle>
        <AlertDescription>
          If you or someone you know is in immediate danger, please contact your local emergency services immediately.
          This page provides resources but is not a substitute for emergency response.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencyResources.map((resource) => (
          <Card key={resource.id} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <LifeBuoy className="h-7 w-7 text-primary" />
                <CardTitle className="font-headline">{resource.name}</CardTitle>
              </div>
              <Badge variant={resource.type === 'hotline' ? 'destructive' : resource.type === 'local' ? 'secondary' : 'outline'} className="capitalize">
                {resource.type}
              </Badge>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{resource.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 pt-4 border-t">
              {resource.phone && (
                <a href={`tel:${resource.phone}`} className="flex items-center gap-2 text-primary hover:underline text-sm font-medium">
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
        Please note: Some contact details are placeholders and should be updated with actual local information.
      </p>
    </Container>
  );
}
