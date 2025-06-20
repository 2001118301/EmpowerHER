
export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  modules?: number;
  duration?: string;
  instructor?: string;
  level?: string;
  // progress could be a user-specific property, not part of general course data
}

export const coursesData: Course[] = [
  { 
    id: 'web-dev-intro', 
    title: 'Introduction to Web Development', 
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build your first websites.', 
    longDescription: 'Dive deep into the world of web development. Understand how websites work, learn to structure content with HTML, style it with CSS, and add interactivity with JavaScript. By the end of this course, you will have built several mini-projects and a portfolio-ready website.', 
    imageUrl: 'https://placehold.co/800x450.png', 
    imageHint: 'coding screen laptop',
    category: 'Technology', 
    modules: 10, 
    duration: '20 hours', 
    instructor: 'Jane Doe', 
    level: 'Beginner' 
  },
  { 
    id: 'graphic-design', 
    title: 'Graphic Design Fundamentals', 
    description: 'Explore design principles, color theory, and typography with open-source tools.', 
    longDescription: 'Unleash your creativity with graphic design. This course will teach you the core principles of visual communication, how to use color effectively, master typography, and utilize free tools like GIMP and Inkscape to create stunning designs.', 
    imageUrl: 'https://placehold.co/800x450.png', 
    imageHint: 'design tools art',
    category: 'Creative Arts', 
    modules: 8, 
    duration: '15 hours', 
    instructor: 'John Smith', 
    level: 'Beginner' 
  },
  {
    id: 'creative-writing',
    title: 'Creative Writing Workshop',
    description: 'Develop your storytelling skills and learn to craft compelling narratives and poetry.',
    longDescription: 'This workshop focuses on various forms of creative writing, including short stories, poetry, and character development. You will learn techniques to engage readers and express your unique voice.',
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'writing notebook pen',
    category: 'Arts & Humanities',
    modules: 6,
    duration: '12 hours',
    instructor: 'Alice Brown',
    level: 'All Levels'
  },
  {
    id: 'basic-entrepreneurship',
    title: 'Basic Entrepreneurship',
    description: 'Understand business planning, marketing strategies, and financial literacy for startups.',
    longDescription: 'Get introduced to the essentials of starting and managing a small business. This course covers idea generation, market research, basic financial planning, and marketing fundamentals.',
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'business meeting planning',
    category: 'Business',
    modules: 12,
    duration: '25 hours',
    instructor: 'Robert Green',
    level: 'Beginner'
  },
  {
    id: 'digital-art-krita',
    title: 'Digital Art with Krita',
    description: 'Master Krita for creating stunning digital paintings and illustrations from scratch.',
    longDescription: 'Learn to use Krita, a powerful free and open-source painting program. This course covers interface basics, brush management, layers, and techniques for digital illustration and painting.',
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'digital art tablet',
    category: 'Creative Arts',
    modules: 9,
    duration: '18 hours',
    instructor: 'Clara White',
    level: 'Beginner to Intermediate'
  },
  {
    id: 'community-leadership',
    title: 'Community Leadership',
    description: 'Learn to lead projects, inspire teams, and make a positive impact in your community.',
    longDescription: 'This course provides skills for effective community leadership, including project management, communication, conflict resolution, and volunteer coordination. Aimed at aspiring community organizers and leaders.',
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'community group working',
    category: 'Social Impact',
    modules: 7,
    duration: '14 hours',
    instructor: 'David Lee',
    level: 'All Levels'
  }
];
