import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { GitFork, Lightbulb, TrendingUp } from 'lucide-react';

export default function LearningPathsPage() {
  // Placeholder for state management if this becomes interactive
  // const [currentStep, setCurrentStep] = useState(1);
  // const [selections, setSelections] = useState({});

  return (
    <Container>
      <div className="text-center mb-12">
        <GitFork className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">Design Your Learning Journey</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Follow our step-by-step guide to select a personalized learning path that aligns with your goals and interests.
        </p>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-headline">Curriculum Selector</CardTitle>
          <CardDescription>Answer a few questions to help us tailor a path for you.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Step 1: Interests */}
          <div className="p-6 border rounded-lg bg-background/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="text-accent" /> Step 1: What are your primary interests?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Technology', 'Creative Arts', 'Business & Entrepreneurship', 'Writing & Humanities', 'Social Impact', 'Personal Development'].map(interest => (
                <div key={interest} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent/10 transition-colors">
                  <Checkbox id={`interest-${interest.toLowerCase().replace(/\s/g, '-')}`} />
                  <Label htmlFor={`interest-${interest.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Current Skill Level */}
          <div className="p-6 border rounded-lg bg-background/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-accent" /> Step 2: What is your current skill level in your chosen interest area?
            </h3>
            <RadioGroup defaultValue="beginner" className="space-y-2">
              {[
                { value: 'beginner', label: 'Beginner (Just starting out)' },
                { value: 'intermediate', label: 'Intermediate (Some experience)' },
                { value: 'advanced', label: 'Advanced (Comfortable with core concepts)' }
              ].map(option => (
                <div key={option.value} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent/10 transition-colors">
                  <RadioGroupItem value={option.value} id={`skill-${option.value}`} />
                  <Label htmlFor={`skill-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {/* Step 3: Learning Goals (Placeholder) */}
           <div className="p-6 border rounded-lg bg-background/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Step 3: What are your learning goals?
            </h3>
            <p className="text-muted-foreground"> (More interactive elements for goal selection coming soon!) </p>
            <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="goal-career" />
                    <Label htmlFor="goal-career">Career Advancement</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="goal-hobby" />
                    <Label htmlFor="goal-hobby">Personal Hobby / Interest</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="goal-business" />
                    <Label htmlFor="goal-business">Start a Business</Label>
                </div>
            </div>
          </div>


          <div className="flex justify-end pt-6 border-t">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Find My Path
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            This is a simplified selector. A more detailed, multi-step interactive experience is planned.
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}
