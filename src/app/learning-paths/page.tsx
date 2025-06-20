
"use client";

import { useState, useTransition } from 'react';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { GitFork, Lightbulb, TrendingUp, Loader2, Sparkles, AlertTriangle, BookOpen, Globe } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';
import { suggestPersonalizedLearningPaths, type PersonalizedLearningPathsOutput } from '@/ai/flows/personalized-learning-paths';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

const MOCK_AVAILABLE_COURSES = `
1. Introduction to Web Development: Learn HTML, CSS, JavaScript basics. Good for beginners interested in tech.
2. Graphic Design Fundamentals: Explore principles of design, color theory, and typography using open-source tools like GIMP and Inkscape. Suitable for artistic individuals.
3. Creative Writing Workshop: Develop storytelling skills, poetry, and scriptwriting. For those passionate about expression.
4. Basic Entrepreneurship & Financial Literacy: Understand business planning, marketing, and managing personal finances. Essential for aspiring entrepreneurs.
5. Digital Art with Krita: Learn to create digital paintings and illustrations. A great follow-up or alternative to Graphic Design Fundamentals.
6. Community Leadership & Project Management: Skills for organizing local initiatives and managing small projects. For those wanting to make a difference.
7. Advanced JavaScript & React: Deep dive into modern web development frameworks. For those with basic web dev knowledge.
`;

const interestsList = ['Technology', 'Creative Arts', 'Business & Entrepreneurship', 'Writing & Humanities', 'Social Impact', 'Personal Development'];
const skillLevels = [
  { value: 'beginner', label: 'Beginner (Just starting out)' },
  { value: 'intermediate', label: 'Intermediate (Some experience)' },
  { value: 'advanced', label: 'Advanced (Comfortable with core concepts)' }
];
const learningGoalsList = ['Career Advancement', 'Personal Hobby / Interest', 'Start a Business', 'Skill Enhancement'];

const externalLearningPlatforms = [
  {
    id: 'khan-academy',
    title: 'Khan Academy',
    description: 'A massive, completely free library of courses on math, science, economics, computing, arts, and humanities.',
    url: 'https://www.khanacademy.org/',
    category: 'Comprehensive Learning',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp',
    description: 'Thousands of hours of free, project-based learning for coding and web development. Users earn verified certifications.',
    url: 'https://www.freecodecamp.org/',
    category: 'Web Development & Coding',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'google-digital-garage',
    title: 'Google Digital Garage',
    description: 'Free courses from Google on digital marketing, career development, and data.',
    url: 'https://learndigital.withgoogle.com/digitalgarage/',
    category: 'Digital Skills & Career',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'coursera-free',
    title: 'Coursera (Free Courses)',
    description: 'University-level courses from top institutions. Many courses can be audited for free.',
    url: 'https://www.coursera.org/',
    category: 'Higher Education',
    icon: <BookOpen size={20} className="text-primary" />,
  },
  {
    id: 'gcfglobal',
    title: 'GCFGlobal',
    description: 'Over 200 topics with free tutorials on essential life and tech skills.',
    url: 'https://edu.gcfglobal.org/en/',
    category: 'Essential Life & Tech Skills',
    icon: <BookOpen size={20} className="text-primary" />,
  },
];

export default function LearningPathsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>('beginner');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<PersonalizedLearningPathsOutput | null>(null);
  const { toast } = useToast();

  const handleInterestChange = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleGoalChange = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const handleSubmit = () => {
    if (selectedInterests.length === 0) {
      toast({ variant: "destructive", title: "Selection Missing", description: "Please select at least one interest." });
      return;
    }
    if (selectedGoals.length === 0) {
      toast({ variant: "destructive", title: "Selection Missing", description: "Please select at least one learning goal." });
      return;
    }

    setSuggestions(null);
    startTransition(async () => {
      const userProfile = `
        Interests: ${selectedInterests.join(', ')}.
        Current Skill Level: ${skillLevels.find(sl => sl.value === selectedSkillLevel)?.label || selectedSkillLevel}.
        Learning Goals: ${selectedGoals.join(', ')}.
      `;
      try {
        const result = await suggestPersonalizedLearningPaths({
          userProfile: userProfile.trim(),
          availableCourses: MOCK_AVAILABLE_COURSES,
        });
        setSuggestions(result);
      } catch (error) {
        console.error("Error fetching personalized learning paths:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not fetch personalized learning suggestions. Please try again.",
        });
      }
    });
  };

  return (
    <Container>
      <div className="text-center mb-12">
        <GitFork className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Design Your Learning Journey" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Answer a few questions, and our AI will help tailor a learning path for you from our available courses.
        </p>
      </div>

      <Card className="shadow-xl mb-12">
        <CardHeader>
          <BlurText text="Curriculum Selector" className="text-2xl font-bold font-headline leading-none tracking-tight" />
          <CardDescription>Select your interests, skill level, and goals to get personalized path suggestions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Step 1: Interests */}
          <div className="p-6 border rounded-lg bg-background/50">
            <div className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="text-accent" />
              <BlurText text="Step 1: What are your primary interests?" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {interestsList.map(interest => (
                <div key={interest} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent/10 transition-colors">
                  <Checkbox 
                    id={`interest-${interest.toLowerCase().replace(/\s&/g, '-').replace(/\s/g, '-')}`} 
                    onCheckedChange={() => handleInterestChange(interest)}
                    checked={selectedInterests.includes(interest)}
                  />
                  <Label htmlFor={`interest-${interest.toLowerCase().replace(/\s&/g, '-').replace(/\s/g, '-')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Current Skill Level */}
          <div className="p-6 border rounded-lg bg-background/50">
            <div className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-accent" />
              <BlurText text="Step 2: What is your current skill level in your chosen interest area(s)?" />
            </div>
            <RadioGroup 
              value={selectedSkillLevel} 
              onValueChange={setSelectedSkillLevel} 
              className="space-y-2"
            >
              {skillLevels.map(option => (
                <div key={option.value} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent/10 transition-colors">
                  <RadioGroupItem value={option.value} id={`skill-${option.value}`} />
                  <Label htmlFor={`skill-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
           {/* Step 3: Learning Goals */}
           <div className="p-6 border rounded-lg bg-background/50">
             <div className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="text-accent" />
                <BlurText text="Step 3: What are your learning goals?" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningGoalsList.map(goal => (
                <div key={goal} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent/10 transition-colors">
                  <Checkbox 
                    id={`goal-${goal.toLowerCase().replace(/\s/g, '-')}`} 
                    onCheckedChange={() => handleGoalChange(goal)}
                    checked={selectedGoals.includes(goal)}
                  />
                  <Label htmlFor={`goal-${goal.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end pt-6 border-t px-6">
            <Button size="lg" onClick={handleSubmit} disabled={isPending} className="bg-primary hover:bg-primary/90">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Your Path...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find My Path
                </>
              )}
            </Button>
          </CardFooter>
      </Card>

      {suggestions && (
        <Card className="mt-12 shadow-xl">
          <CardHeader>
            <BlurText text="Your AI-Powered Learning Path Suggestions" className="text-2xl font-bold font-headline text-primary" />
          </CardHeader>
          <CardContent>
            {suggestions.suggestedLearningPaths.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-4">Based on your selections, here are some suggested learning paths from Empower Hub courses:</p>
                <ul className="space-y-3 list-disc list-inside mb-6 bg-primary/5 p-4 rounded-md border border-primary/20">
                  {suggestions.suggestedLearningPaths.map((path, index) => (
                    <li key={index} className="text-md font-medium">{path}</li>
                  ))}
                </ul>
                <Alert variant="default" className="bg-accent/10 border-accent/30">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <BlurText text="AI Reasoning" className="font-semibold text-accent mb-1 leading-none tracking-tight" />
                  <AlertDescription className="text-accent/90">
                    {suggestions.reasoning}
                  </AlertDescription>
                </Alert>
              </>
            ) : (
              <Alert variant="default" className="border-yellow-500/50 bg-yellow-500/10 text-yellow-700">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                 <BlurText text="No Specific Paths Found" className="font-semibold text-yellow-700 mb-1" />
                <AlertDescription>
                  We couldn't find a perfect pre-defined path based on your selections. However, here's some general advice: {suggestions.reasoning} Consider exploring individual courses in our catalog!
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      <Separator className="my-12" />

      <div>
        <BlurText text="Additional Free Learning Resources" className="text-3xl font-bold mb-8 text-center font-headline" />
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Supplement your learning path with these excellent free external resources.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {externalLearningPlatforms.map((platform) => (
            <Card key={platform.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {platform.icon || <BookOpen size={24} className="text-primary" />}
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

    