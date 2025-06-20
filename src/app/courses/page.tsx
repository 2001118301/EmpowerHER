
"use client";

import { useState, useTransition } from 'react';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Loader2, Sparkles, Lightbulb, TrendingUp, Target, BookOpen, ExternalLink, AlertTriangle, Send } from 'lucide-react';
import BlurText from '@/components/shared/blur-text';
import { suggestPersonalizedLearningPaths, type PersonalizedLearningPathsOutput } from '@/ai/flows/personalized-learning-paths';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const interestsList = ['Technology & Coding', 'Creative Arts & Design', 'Business & Entrepreneurship', 'Writing & Humanities', 'Social Impact & Community', 'Personal Development & Well-being'];
const skillLevels = [
  { value: 'beginner', label: 'Beginner (Just starting out, little to no experience)' },
  { value: 'intermediate', label: 'Intermediate (Some foundational knowledge or experience)' },
  { value: 'advanced', label: 'Advanced (Comfortable with core concepts, looking to deepen expertise)' }
];
const learningGoalsList = ['Learn a new hobby', 'Advance my career / Get a job', 'Start my own business/project', 'Improve specific skills', 'Explore new fields'];

type Step = "interests" | "skills" | "goals" | "plan";

export default function CoursesPage() {
  const [currentStep, setCurrentStep] = useState<Step>("interests");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>('beginner');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  
  const [isPending, startTransition] = useTransition();
  const [plan, setPlan] = useState<PersonalizedLearningPathsOutput | null>(null);
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

  const validateAndProceed = (nextStep: Step) => {
    if (currentStep === "interests" && selectedInterests.length === 0) {
      toast({ variant: "destructive", title: "Selection Required", description: "Please select at least one interest to continue." });
      return;
    }
    if (currentStep === "goals" && selectedGoals.length === 0) {
      toast({ variant: "destructive", title: "Selection Required", description: "Please select at least one learning goal." });
      return;
    }
    setCurrentStep(nextStep);
  };

  const handleSubmit = () => {
    if (selectedInterests.length === 0 || selectedGoals.length === 0) {
      toast({ variant: "destructive", title: "Selections Missing", description: "Please ensure you've selected interests and goals." });
      return;
    }

    setPlan(null);
    startTransition(async () => {
      const userProfile = `
        Interests: ${selectedInterests.join(', ')}.
        Current Skill Level: ${skillLevels.find(sl => sl.value === selectedSkillLevel)?.label || selectedSkillLevel}.
        Learning Goals: ${selectedGoals.join(', ')}.
      `;
      try {
        const result = await suggestPersonalizedLearningPaths({
          userProfile: userProfile.trim(),
        });
        setPlan(result);
        setCurrentStep("plan");
      } catch (error) {
        console.error("Error fetching personalized learning plan:", error);
        toast({
          variant: "destructive",
          title: "AI Error",
          description: "Could not generate your learning plan. Please try again later.",
        });
      }
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "interests":
        return (
          <CardContent className="space-y-6">
            <div className="text-xl font-semibold mb-1 flex items-center gap-2 text-primary">
              <Lightbulb /> <BlurText text="What piques your interest?" />
            </div>
            <p className="text-muted-foreground mb-4">Select all areas you're curious about or want to explore. This helps us find the best starting points for you.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {interestsList.map(interest => (
                <div key={interest} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/10 transition-colors cursor-pointer has-[:checked]:bg-accent/20 has-[:checked]:border-accent" onClick={() => handleInterestChange(interest)}>
                  <Checkbox 
                    id={`interest-${interest.toLowerCase().replace(/\s&/g, '-').replace(/\s/g, '-')}`} 
                    onCheckedChange={() => handleInterestChange(interest)} // Keep for accessibility if direct click fails
                    checked={selectedInterests.includes(interest)}
                    className="h-5 w-5"
                  />
                  <Label htmlFor={`interest-${interest.toLowerCase().replace(/\s&/g, '-').replace(/\s/g, '-')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        );
      case "skills":
        return (
          <CardContent className="space-y-6">
            <div className="text-xl font-semibold mb-1 flex items-center gap-2 text-primary">
              <TrendingUp /> <BlurText text="What's your current experience level?" />
            </div>
            <p className="text-muted-foreground mb-4">Honest self-assessment helps us tailor the difficulty and depth of suggestions.</p>
            <RadioGroup 
              value={selectedSkillLevel} 
              onValueChange={setSelectedSkillLevel} 
              className="space-y-3"
            >
              {skillLevels.map(option => (
                <Label key={option.value} htmlFor={`skill-${option.value}`} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/10 transition-colors cursor-pointer has-[:checked]:bg-accent/20 has-[:checked]:border-accent">
                  <RadioGroupItem value={option.value} id={`skill-${option.value}`} className="h-5 w-5" />
                  <span>{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </CardContent>
        );
      case "goals":
        return (
          <CardContent className="space-y-6">
            <div className="text-xl font-semibold mb-1 flex items-center gap-2 text-primary">
              <Target /> <BlurText text="What are your learning goals?" />
            </div>
            <p className="text-muted-foreground mb-4">What do you hope to achieve with new skills or knowledge? Select all that apply.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningGoalsList.map(goal => (
                <div key={goal} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/10 transition-colors cursor-pointer has-[:checked]:bg-accent/20 has-[:checked]:border-accent" onClick={() => handleGoalChange(goal)}>
                  <Checkbox 
                    id={`goal-${goal.toLowerCase().replace(/\s/g, '-')}`} 
                    onCheckedChange={() => handleGoalChange(goal)}
                    checked={selectedGoals.includes(goal)}
                    className="h-5 w-5"
                  />
                  <Label htmlFor={`goal-${goal.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium cursor-pointer">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        );
      default: return null;
    }
  };

  return (
    <Container>
      <div className="text-center mb-12">
        <Sparkles className="mx-auto h-16 w-16 text-primary mb-4" />
        <BlurText text="Craft Your Personalized Learning Adventure!" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Answer a few simple questions, and our AI will chart a unique learning path for you using the best free online resources.
        </p>
      </div>

      {currentStep !== "plan" && (
        <Card className="shadow-xl mb-12 border-2 border-primary/20">
          <CardHeader>
            <BlurText text="Let's Get Started" className="text-2xl font-bold font-headline" />
            <CardDescription>Help us understand your needs so we can create the perfect plan.</CardDescription>
          </CardHeader>
          {renderStepContent()}
          <CardFooter className="flex justify-between pt-6 border-t">
            {currentStep !== "interests" && (
              <Button variant="outline" onClick={() => setCurrentStep(currentStep === "skills" ? "interests" : "skills")}>
                Back
              </Button>
            )}
            {currentStep === "interests" && <div />} 
            
            {currentStep !== "goals" ? (
              <Button onClick={() => validateAndProceed(currentStep === "interests" ? "skills" : "goals")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isPending} className="bg-primary hover:bg-primary/90">
                {isPending ? (
                  <> <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating Plan... </>
                ) : (
                  <> <Send className="mr-2 h-5 w-5" /> Create My Plan </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      )}

      {isPending && currentStep === "plan" && (
         <div className="text-center py-10">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
            <BlurText text="Our AI is crafting your personalized learning plan..." className="text-xl font-semibold text-muted-foreground" />
            <p className="text-sm text-muted-foreground">This might take a few moments.</p>
        </div>
      )}

      {plan && currentStep === "plan" && (
        <Card className="shadow-xl border-2 border-accent/30">
          <CardHeader className="bg-accent/10">
            <BlurText text="Your Personalized Learning Plan!" className="text-2xl font-bold font-headline text-accent" />
            <CardDescription>{plan.introduction}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {plan.learningPlan.length > 0 ? (
              plan.learningPlan.map((step, index) => (
                <div key={index} className="p-4 border rounded-lg bg-background/50">
                  <BlurText text={`Step ${index + 1}: ${step.topic}`} className="text-xl font-semibold mb-2 text-primary" />
                  <p className="text-muted-foreground mb-3">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <BookOpen size={18} className="text-accent" />
                    <span>Suggested Resource: {step.suggestedResourceName}</span>
                  </div>
                  {step.suggestedResourceUrl ? (
                    <Button variant="link" asChild className="px-0 h-auto text-primary hover:text-accent">
                      <a href={step.suggestedResourceUrl} target="_blank" rel="noopener noreferrer">
                        Go to Resource <ExternalLink size={14} className="ml-1" />
                      </a>
                    </Button>
                  ) : step.notes ? (
                    <p className="text-xs text-muted-foreground italic">{step.notes}</p>
                  ) : <p className="text-xs text-muted-foreground italic">No specific link provided, try searching on the platform.</p>}
                </div>
              ))
            ) : (
              <Alert variant="default" className="border-yellow-500/50 bg-yellow-500/10 text-yellow-700">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <AlertTitle>Plan Under Construction</AlertTitle>
                <AlertDescription>
                  The AI is still thinking or couldn't generate specific steps right now. Try adjusting your selections or check back later!
                </AlertDescription>
              </Alert>
            )}
            <p className="text-center text-muted-foreground pt-4 border-t">{plan.conclusion}</p>
          </CardContent>
          <CardFooter className="flex justify-center">
             <Button variant="outline" onClick={() => { setCurrentStep("interests"); setPlan(null); }} className="bg-primary/10 hover:bg-primary/20 text-primary border-primary">
                Start Over / Refine Plan
              </Button>
          </CardFooter>
        </Card>
      )}
    </Container>
  );
}
