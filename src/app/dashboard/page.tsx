import { Container } from '@/components/shared/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Target, Award, ShieldCheck, Edit3, PlusCircle } from 'lucide-react';
import Image from 'next/image';

const userProgress = {
  name: "Aisha K.", // Example user
  avatarUrl: "https://placehold.co/100x100.png",
  avatarHint: "woman smiling profile",
  currentCourses: [
    { title: "Introduction to Web Development", progress: 75, certificateId: null },
    { title: "Graphic Design Fundamentals", progress: 40, certificateId: null },
  ],
  completedCourses: [
    { title: "Community Leadership Basics", progress: 100, certificateId: "CERT123" },
  ],
  goals: [
    { title: "Complete Web Development Course", status: "In Progress" },
    { title: "Start a Freelance Portfolio", status: "To Do" },
    { title: "Mentor a New Learner", status: "To Do" },
  ],
  badges: [
    { name: "Early Bird", iconUrl: "https://placehold.co/64x64.png", iconHint: "badge bird", description: "Joined Empower Hub in the first month!" },
    { name: "Course Completer", iconUrl: "https://placehold.co/64x64.png", iconHint: "badge checkmark", description: "Completed your first course." },
    { name: "Community Helper", iconUrl: "https://placehold.co/64x64.png", iconHint: "badge handshake", description: "Helped another learner." },
  ],
};

export default function DashboardPage() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Image src={userProgress.avatarUrl} alt={userProgress.name} width={80} height={80} className="rounded-full border-2 border-primary shadow-md" data-ai-hint={userProgress.avatarHint} />
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Welcome back, {userProgress.name}!</h1>
            <p className="text-muted-foreground">Here's an overview of your learning journey.</p>
          </div>
        </div>
        <Button variant="outline"><Edit3 size={16} className="mr-2"/> Edit Profile</Button>
      </div>

      {/* Current Courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 font-headline">My Active Courses</h2>
        {userProgress.currentCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userProgress.currentCourses.map(course => (
              <Card key={course.title} className="shadow-lg">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={course.progress} className="mb-2 h-3" aria-label={`${course.title} progress ${course.progress}%`} />
                  <p className="text-sm text-muted-foreground">{course.progress}% complete</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Continue Learning</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">You are not currently enrolled in any courses. <a href="/courses" className="text-primary hover:underline">Explore courses</a> to get started!</p>
        )}
      </section>

      {/* Goals Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold font-headline">My Goals</h2>
          <Button variant="outline" size="sm"><PlusCircle size={16} className="mr-2"/> Add New Goal</Button>
        </div>
        {userProgress.goals.length > 0 ? (
        <div className="space-y-4">
          {userProgress.goals.map((goal, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className={`h-6 w-6 ${goal.status === "Completed" ? 'text-green-500' : 'text-primary'}`} />
                  <div>
                    <p className="font-medium">{goal.title}</p>
                    <p className={`text-xs ${goal.status === "Completed" ? 'text-green-600' : 'text-muted-foreground'}`}>{goal.status}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        ) : (
           <p className="text-muted-foreground">You haven't set any goals yet. Click "Add New Goal" to start planning.</p>
        )}
      </section>

      {/* Certificates Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 font-headline">My Certificates</h2>
        {userProgress.completedCourses.filter(c => c.certificateId).length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userProgress.completedCourses.filter(c => c.certificateId).map(course => (
            <Card key={course.certificateId} className="shadow-lg text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <ShieldCheck className="mx-auto h-12 w-12 text-green-500 mb-3" />
              <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground mb-4">Certificate ID: {course.certificateId}</CardDescription>
              <Button variant="outline" size="sm">Download Certificate</Button>
            </Card>
          ))}
        </div>
         ) : (
           <p className="text-muted-foreground">You haven't earned any certificates yet. Complete a course to get your first one!</p>
        )}
      </section>

      {/* Badges Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 font-headline">Earned Badges</h2>
        {userProgress.badges.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {userProgress.badges.map((badge, index) => (
            <Card key={index} className="shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <Image src={badge.iconUrl} alt={badge.name} width={48} height={48} className="mb-2" data-ai-hint={badge.iconHint}/>
              <p className="text-sm font-medium">{badge.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
            </Card>
          ))}
        </div>
        ) : (
          <p className="text-muted-foreground">No badges earned yet. Keep learning and participating to unlock them!</p>
        )}
      </section>
    </Container>
  );
}
