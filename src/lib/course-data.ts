
import type { LucideIcon } from 'lucide-react';
import { BookText, Laptop, Scissors, Landmark, Heart } from 'lucide-react';

export type CourseCategory = 
  | 'Literacy & Communication' 
  | 'Digital & Technology' 
  | 'Crafts & Entrepreneurship' 
  | 'Money & Business Skills' 
  | 'Personal Growth & Health';

export interface YoutubeCourse {
  id: string;
  title: string;
  description?: string; // For the featured course section primarily
  thumbnailUrl: string;
  youtubeVideoId: string; // For linking directly to the video
  category: CourseCategory;
  duration: string; // e.g., "1h 30m" or "45 mins"
  channelName?: string; // Optional: To credit the YouTube channel
  isFeatured?: boolean;
  imageHint: string;
}

export const courseCategories: { name: CourseCategory; icon: LucideIcon }[] = [
  { name: 'Literacy & Communication', icon: BookText },
  { name: 'Digital & Technology', icon: Laptop },
  { name: 'Crafts & Entrepreneurship', icon: Scissors },
  { name: 'Money & Business Skills', icon: Landmark },
  { name: 'Personal Growth & Health', icon: Heart },
];

export const youtubeCoursesData: YoutubeCourse[] = [
  {
    id: 'yt-comm-1',
    title: 'Learn English Conversation for Beginners',
    description: 'Master basic English conversation skills with practical examples and clear explanations. Perfect for starting your journey to fluent communication.',
    thumbnailUrl: 'https://i.ytimg.com/vi/3_qARIx2p2o/hqdefault.jpg', // Example, replace with actual
    youtubeVideoId: '3_qARIx2p2o', // Example
    category: 'Literacy & Communication',
    duration: '1h 15m',
    channelName: 'Learn English with EnglishClass101.com',
    isFeatured: true,
    imageHint: 'people talking communication',
  },
  {
    id: 'yt-comm-2',
    title: 'Public Speaking Tips: How to Captivate an Audience',
    thumbnailUrl: 'https://i.ytimg.com/vi/eIho2S0ZahI/hqdefault.jpg', // Example
    youtubeVideoId: 'eIho2S0ZahI', // Example
    category: 'Literacy & Communication',
    duration: '45 mins',
    channelName: 'TED',
    imageHint: 'person speaking stage',
  },
  {
    id: 'yt-tech-1',
    title: 'Introduction to Graphic Design with Canva',
    description: 'Discover the basics of graphic design using the free and powerful tool, Canva. Create beautiful visuals for social media, presentations, and more.',
    thumbnailUrl: 'https://i.ytimg.com/vi/pKOde3S2U2s/hqdefault.jpg', // Example
    youtubeVideoId: 'pKOde3S2U2s', // Example
    category: 'Digital & Technology',
    duration: '2h 5m',
    channelName: 'Envato Tuts+',
    imageHint: 'graphic design computer',
  },
  {
    id: 'yt-tech-2',
    title: 'Learn Basic HTML and CSS for Beginners',
    thumbnailUrl: 'https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg', // Example
    youtubeVideoId: 'G3e-cpL7ofc', // Example
    category: 'Digital & Technology',
    duration: '1h 50m',
    channelName: 'freeCodeCamp.org',
    imageHint: 'coding screen html',
  },
  {
    id: 'yt-crafts-1',
    title: 'DIY Handmade Jewelry Ideas',
    description: 'Get inspired and learn easy techniques to create your own beautiful handmade jewelry. Perfect for gifts or starting a small craft business.',
    thumbnailUrl: 'https://i.ytimg.com/vi/h22hSCi0zGI/hqdefault.jpg', // Example
    youtubeVideoId: 'h22hSCi0zGI', // Example
    category: 'Crafts & Entrepreneurship',
    duration: '55 mins',
    channelName: '5-Minute Crafts',
    imageHint: 'handmade jewelry crafts',
  },
  {
    id: 'yt-crafts-2',
    title: 'How to Start a Small Online Business',
    thumbnailUrl: 'https://i.ytimg.com/vi/Zt_gA5Jv6aI/hqdefault.jpg', // Example
    youtubeVideoId: 'Zt_gA5Jv6aI', // Example
    category: 'Crafts & Entrepreneurship',
    duration: '1h 20m',
    channelName: 'Shopify',
    imageHint: 'laptop small business',
  },
  {
    id: 'yt-money-1',
    title: 'Personal Finance for Beginners: Budgeting & Saving',
    description: 'Take control of your finances! Learn essential budgeting techniques, how to save money effectively, and plan for your financial future.',
    thumbnailUrl: 'https://i.ytimg.com/vi/H cistern_XlTBo/hqdefault.jpg', // Example
    youtubeVideoId: 'H cistern_XlTBo', // Example (link might be broken, replace)
    category: 'Money & Business Skills',
    duration: '1h 5m',
    channelName: 'The Plain Bagel',
    imageHint: 'money savings piggy bank',
  },
  {
    id: 'yt-money-2',
    title: 'Introduction to Investing',
    thumbnailUrl: 'https://i.ytimg.com/vi/CnX213p2n2E/hqdefault.jpg', // Example
    youtubeVideoId: 'CnX213p2n2E', // Example
    category: 'Money & Business Skills',
    duration: '30 mins',
    channelName: 'Graham Stephan',
    imageHint: 'stocks chart investment',
  },
  {
    id: 'yt-growth-1',
    title: 'Mindfulness Meditation for Stress Relief',
    description: 'Discover the power of mindfulness to reduce stress, improve focus, and cultivate inner peace. Guided meditations for beginners.',
    thumbnailUrl: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg', // Example
    youtubeVideoId: 'inpok4MKVLM', // Example
    category: 'Personal Growth & Health',
    duration: '25 mins per session',
    channelName: 'Goodful',
    imageHint: 'meditation calm person',
  },
  {
    id: 'yt-growth-2',
    title: 'Healthy Eating Habits for a Better Life',
    thumbnailUrl: 'https://i.ytimg.com/vi/Gmh_xMMJ2Pw/hqdefault.jpg', // Example
    youtubeVideoId: 'Gmh_xMMJ2Pw', // Example
    category: 'Personal Growth & Health',
    duration: '40 mins',
    channelName: 'Pick Up Limes',
    imageHint: 'healthy food fruits vegetables',
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
