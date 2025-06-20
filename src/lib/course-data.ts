
import type { LucideIcon } from 'lucide-react';
import { BookText, Laptop, Scissors, Briefcase, HeartPulse, Brain, ClipboardCheck, DollarSign } from 'lucide-react';

export type CourseCategory = 
  | 'Literacy & Communication' 
  | 'Digital & Technology' 
  | 'Entrepreneurship & Business'
  | 'Hand Skills / Crafts'
  | 'Health & Nursing Basics'
  | 'Personal Growth'
  | 'Life Skills'
  | 'Digital Earning Skills';

export interface YoutubeCourse {
  id: string;
  title: string;
  description: string; 
  thumbnailUrl: string;
  youtubeVideoId: string; 
  category: CourseCategory;
  duration: string; 
  channelName?: string; 
  isFeatured?: boolean;
  imageHint: string;
}

export const courseCategories: { name: CourseCategory; icon: LucideIcon }[] = [
  { name: 'Literacy & Communication', icon: BookText },
  { name: 'Digital & Technology', icon: Laptop },
  { name: 'Entrepreneurship & Business', icon: Briefcase },
  { name: 'Hand Skills / Crafts', icon: Scissors },
  { name: 'Health & Nursing Basics', icon: HeartPulse },
  { name: 'Personal Growth', icon: Brain },
  { name: 'Life Skills', icon: ClipboardCheck },
  { name: 'Digital Earning Skills', icon: DollarSign },
];

export const youtubeCoursesData: YoutubeCourse[] = [
  {
    id: 'yt-comm-1',
    title: 'Learn English Conversation for Beginners',
    description: 'Master basic English conversation skills with practical examples and clear explanations. Perfect for starting your journey to fluent communication.',
    thumbnailUrl: 'https://i.ytimg.com/vi/3_qARIx2p2o/hqdefault.jpg',
    youtubeVideoId: '3_qARIx2p2o',
    category: 'Literacy & Communication',
    duration: '1h 15m',
    channelName: 'Learn English with EnglishClass101.com',
    isFeatured: true,
    imageHint: 'people talking communication',
  },
  {
    id: 'yt-comm-2',
    title: 'Public Speaking Tips: How to Captivate an Audience',
    description: 'Learn valuable tips and techniques to improve your public speaking and presentation skills, helping you to communicate effectively and confidently.',
    thumbnailUrl: 'https://i.ytimg.com/vi/eIho2S0ZahI/hqdefault.jpg',
    youtubeVideoId: 'eIho2S0ZahI',
    category: 'Literacy & Communication',
    duration: '45 mins',
    channelName: 'TED',
    imageHint: 'person speaking stage',
  },
  {
    id: 'yt-tech-1',
    title: 'Introduction to Graphic Design with Canva',
    description: 'Discover the basics of graphic design using the free and powerful tool, Canva. Create beautiful visuals for social media, presentations, and more.',
    thumbnailUrl: 'https://i.ytimg.com/vi/pKOde3S2U2s/hqdefault.jpg',
    youtubeVideoId: 'pKOde3S2U2s',
    category: 'Digital & Technology',
    duration: '2h 5m',
    channelName: 'Envato Tuts+',
    imageHint: 'graphic design computer',
  },
  {
    id: 'yt-tech-2',
    title: 'Learn Basic HTML and CSS for Beginners',
    description: 'Start your web development journey by learning the fundamental building blocks of websites: HTML for structure and CSS for styling.',
    thumbnailUrl: 'https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg',
    youtubeVideoId: 'G3e-cpL7ofc',
    category: 'Digital & Technology',
    duration: '1h 50m',
    channelName: 'freeCodeCamp.org',
    imageHint: 'coding screen html',
  },
  {
    id: 'yt-crafts-1',
    title: 'DIY Handmade Jewelry Ideas',
    description: 'Get inspired and learn easy techniques to create your own beautiful handmade jewelry. Perfect for gifts or starting a small craft business.',
    thumbnailUrl: 'https://i.ytimg.com/vi/h22hSCi0zGI/hqdefault.jpg',
    youtubeVideoId: 'h22hSCi0zGI',
    category: 'Hand Skills / Crafts',
    duration: '55 mins',
    channelName: '5-Minute Crafts',
    imageHint: 'handmade jewelry crafts',
  },
  {
    id: 'yt-biz-1',
    title: 'How to Start a Small Online Business',
    description: 'A comprehensive guide to starting your own online business, from idea generation to marketing your products or services.',
    thumbnailUrl: 'https://i.ytimg.com/vi/Zt_gA5Jv6aI/hqdefault.jpg',
    youtubeVideoId: 'Zt_gA5Jv6aI',
    category: 'Entrepreneurship & Business',
    duration: '1h 20m',
    channelName: 'Shopify',
    imageHint: 'laptop small business',
  },
  {
    id: 'yt-money-1',
    title: 'Personal Finance for Beginners: Budgeting & Saving',
    description: 'Take control of your finances! Learn essential budgeting techniques, how to save money effectively, and plan for your financial future.',
    thumbnailUrl: 'https://i.ytimg.com/vi/H_XlTBo/hqdefault.jpg', 
    youtubeVideoId: 'H_XlTBo', 
    category: 'Life Skills', // Changed category to Life Skills
    duration: '1h 5m',
    channelName: 'The Plain Bagel',
    imageHint: 'money savings piggy bank',
  },
  {
    id: 'yt-health-1',
    title: 'Basic First Aid and Emergency Response',
    description: 'Learn crucial first aid skills to handle common emergencies. This knowledge can save lives and provide immediate care when needed.',
    thumbnailUrl: 'https://i.ytimg.com/vi/Erq_L4C3P2c/hqdefault.jpg', // Example, find a suitable one
    youtubeVideoId: 'Erq_L4C3P2c', // Example
    category: 'Health & Nursing Basics',
    duration: '1h 00m',
    channelName: 'St John Ambulance',
    imageHint: 'first aid kit emergency',
  },
  {
    id: 'yt-growth-1',
    title: 'Mindfulness Meditation for Stress Relief',
    description: 'Discover the power of mindfulness to reduce stress, improve focus, and cultivate inner peace. Guided meditations for beginners.',
    thumbnailUrl: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
    youtubeVideoId: 'inpok4MKVLM',
    category: 'Personal Growth',
    duration: '25 mins per session',
    channelName: 'Goodful',
    imageHint: 'meditation calm person',
  },
  {
    id: 'yt-life-1',
    title: 'Effective Time Management Strategies',
    description: 'Learn how to manage your time effectively, prioritize tasks, and reduce procrastination to achieve your goals.',
    thumbnailUrl: 'https://i.ytimg.com/vi/iONDebHX9qk/hqdefault.jpg', // Example
    youtubeVideoId: 'iONDebHX9qk', // Example
    category: 'Life Skills',
    duration: '50 mins',
    channelName: 'Thomas Frank',
    imageHint: 'clock calendar planning',
  },
  {
    id: 'yt-digital-earn-1',
    title: 'Freelancing for Beginners: How to Get Started',
    description: 'A step-by-step guide to starting your freelance career, finding clients, and managing your work effectively online.',
    thumbnailUrl: 'https://i.ytimg.com/vi/7xXSWj_p3XA/hqdefault.jpg', // Example
    youtubeVideoId: '7xXSWj_p3XA', // Example
    category: 'Digital Earning Skills',
    duration: '1h 10m',
    channelName: 'Flux Academy',
    imageHint: 'laptop working freelance',
  },
];

// Existing internal course data (can be kept separate or merged if needed)
export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint: string;
  category: string; // This category might be different from YoutubeCourse categories
  modules?: number;
  duration?: string;
  instructor?: string;
  level?: string;
}

export const coursesData: Course[] = [
  { 
    id: 'web-dev-intro', 
    title: 'Introduction to Web Development (Internal)', 
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
    title: 'Graphic Design Fundamentals (Internal)', 
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
];

    