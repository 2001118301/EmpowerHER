import { Container } from '@/components/shared/container';
import { CourseCard } from './(components)/course-card';
import { PersonalizedLearningForm } from './(components)/personalized-learning-form';
import { Separator } from '@/components/ui/separator';

const courses = [
  { id: 'web-dev-intro', title: 'Introduction to Web Development', description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build your first websites.', imageUrl: 'https://placehold.co/600x400.png', category: 'Technology', progress: 25, imageHint: 'laptop code' },
  { id: 'graphic-design', title: 'Graphic Design Fundamentals', description: 'Explore design principles, color theory, and typography with open-source tools.', imageUrl: 'https://placehold.co/600x400.png', category: 'Creative Arts', imageHint: 'design tools palette' },
  { id: 'creative-writing', title: 'Creative Writing Workshop', description: 'Develop your storytelling skills and learn to craft compelling narratives and poetry.', imageUrl: 'https://placehold.co/600x400.png', category: 'Arts & Humanities', imageHint: 'notebook pen' },
  { id: 'entrepreneurship', title: 'Basic Entrepreneurship', description: 'Understand business planning, marketing strategies, and financial literacy for startups.', imageUrl: 'https://placehold.co/600x400.png', category: 'Business', progress: 0, imageHint: 'business plan growth' },
  { id: 'digital-art', title: 'Digital Art with Krita', description: 'Master Krita for creating stunning digital paintings and illustrations from scratch.', imageUrl: 'https://placehold.co/600x400.png', category: 'Creative Arts', imageHint: 'digital tablet art' },
  { id: 'community-leadership', title: 'Community Leadership', description: 'Learn to lead projects, inspire teams, and make a positive impact in your community.', imageUrl: 'https://placehold.co/600x400.png', category: 'Social Impact', progress: 70, imageHint: 'community meeting people' },
];

// Dummy page for course details
export function CourseDetailsPage({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === params.courseId);
  if (!course) return <Container><p>Course not found.</p></Container>;

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p>{course.description}</p>
      {/* Add more course content here */}
    </Container>
  );
}


export default function CoursesPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">Our Courses</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our diverse range of courses designed to equip you with valuable skills.
        </p>
      </div>

      <div className="mb-16">
        <PersonalizedLearningForm />
      </div>
      
      <Separator className="my-12" />

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center font-headline">Explore All Courses</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              category={course.category}
              progress={course.progress}
              imageHint={course.imageHint}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
