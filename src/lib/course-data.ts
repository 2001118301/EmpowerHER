
import type { LucideIcon } from 'lucide-react';
import { BookText, Laptop, Scissors, Briefcase, HeartPulse, Leaf, Compass, Globe, Sparkles } from 'lucide-react';

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
  youtubeVideoId?: string; // Optional, for specific YouTube videos
  externalUrl?: string; // For general YouTube links (search, channel) or other platforms
  category: CourseCategory;
  duration: string;
  channelName?: string;
  imageHint: string;
}

export const courseCategories: { name: CourseCategory | 'All'; icon: LucideIcon }[] = [
  { name: 'All', icon: Sparkles },
  { name: 'Literacy & Communication', icon: BookText },
  { name: 'Digital & Technology', icon: Laptop },
  { name: 'Entrepreneurship & Business', icon: Briefcase },
  { name: 'Hand Skills / Crafts', icon: Scissors },
  { name: 'Health & Nursing Basics', icon: HeartPulse },
  { name: 'Personal Growth', icon: Leaf },
  { name: 'Life Skills', icon: Compass },
  { name: 'Digital Earning Skills', icon: Globe },
];


export const youtubeCoursesData: YoutubeCourse[] = [
  // Literacy & Communication
  {
    id: 'lit-comm-5',
    title: 'Spoken English Course by Great Learning',
    description: 'A comprehensive free course covering the fundamentals of spoken English to improve fluency and confidence.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/spoken-english',
    category: 'Literacy & Communication',
    duration: 'Varies',
    channelName: 'Great Learning',
    imageHint: 'english learning speaking',
  },
  {
    id: 'lit-comm-2',
    title: 'Free Spoken English Tips Playlist',
    description: 'A collection of tips and lessons for improving spoken English, via YouTube playlists.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Free+Spoken+English+Tips+Playlist',
    category: 'Literacy & Communication',
    duration: 'Varies',
    channelName: 'YouTube',
    imageHint: 'language learning',
  },
  {
    id: 'lit-comm-3',
    title: 'Easy English Practice for Beginners',
    description: 'Practice materials and lessons for beginners learning English on YouTube.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Easy+English+Practice+for+Beginners',
    category: 'Literacy & Communication',
    duration: 'Varies',
    channelName: 'YouTube',
    imageHint: 'beginner english study',
  },
  {
    id: 'lit-comm-4',
    title: 'Communication Skills YouTube Playlist by Jayne Latz',
    description: 'A curated YouTube playlist focusing on communication skills by Jayne Latz.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Communication+Skills+Jayne+Latz+Playlist',
    category: 'Literacy & Communication',
    duration: 'Varies',
    channelName: 'YouTube (Jayne Latz)',
    imageHint: 'skills development playlist',
  },

  // Digital & Technology
  {
    id: 'dig-tech-0',
    title: 'Rural Women Online Digital Intensives 2024',
    description: 'Digital intensive programs for rural women available on YouTube.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Rural+Women+Online+Digital+Intensives+2024',
    category: 'Digital & Technology',
    duration: 'Varies',
    channelName: 'YouTube',
    imageHint: 'women online learning',
  },
  {
    id: 'dig-tech-1',
    title: 'Digital Skills Training Orientation for Youth/Women',
    description: 'Orientation for digital skills training programs targeted at youth and women.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.lifewire.com', // Primary domain from user list for this item
    category: 'Digital & Technology',
    duration: 'Varies',
    channelName: 'Lifewire / YouTube',
    imageHint: 'youth tech training',
  },
  {
    id: 'dig-tech-2',
    title: 'Applied Digital Skills (Google)',
    description: 'Google\'s free video curriculum on applied digital skills.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://grow.google/applied-digital-skills/',
    category: 'Digital & Technology',
    duration: 'Varies',
    channelName: 'Google',
    imageHint: 'google skills learning',
  },
  {
    id: 'dig-tech-3',
    title: 'Digital Skills for Everyday Tasks',
    description: 'Learn digital skills for common everyday tasks through YouTube tutorials.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Digital+Skills+for+Everyday+Tasks',
    category: 'Digital & Technology',
    duration: 'Varies',
    channelName: 'YouTube / Arkdefo',
    imageHint: 'computer tasks tutorial',
  },
  {
    id: 'dig-tech-4',
    title: 'WFP List of Free Digital Skills Training Courses',
    description: 'A list of free digital skills training courses curated by WFP Innovation.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://wfpinnovation.medium.com/', // Primary domain from user list
    category: 'Digital & Technology',
    duration: 'Varies',
    channelName: 'WFP Innovation (Medium)',
    imageHint: 'digital training list',
  },

  // Entrepreneurship & Business
  {
    id: 'ent-biz-0',
    title: 'Tech for Good: Leverage Digital Skills',
    description: 'Learn how to leverage digital skills for social good and entrepreneurship via YouTube.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Tech+for+Good+Leverage+Digital+Skills',
    category: 'Entrepreneurship & Business',
    duration: 'Varies',
    channelName: 'YouTube',
    imageHint: 'social entrepreneurship tech',
  },
  {
    id: 'ent-biz-1',
    title: 'Free Communication & Business Courses (Udemy/Alison)',
    description: 'Explore free courses in communication and business on platforms like Udemy and Alison.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.alison.com', // Primary domain
    category: 'Entrepreneurship & Business',
    duration: 'Varies',
    channelName: 'Alison / Udemy',
    imageHint: 'online courses business',
  },
  {
    id: 'ent-biz-2',
    title: 'Free Code Camp (Suggestion)',
    description: 'Consider Free Code Camp for online coding and digital certificates relevant to entrepreneurship.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.freecodecamp.org', // Known URL
    category: 'Entrepreneurship & Business',
    duration: 'Varies',
    channelName: 'Free Code Camp',
    imageHint: 'coding education',
  },
  {
    id: 'ent-biz-3',
    title: 'Coursera Free Entrepreneurship Tracks (Suggestion)',
    description: 'Explore free entrepreneurship courses and tracks available for audit on Coursera.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.coursera.org',
    category: 'Entrepreneurship & Business',
    duration: 'Varies',
    channelName: 'Coursera',
    imageHint: 'coursera learning business',
  },
  {
    id: 'ent-biz-4',
    title: 'SBA Learning Center (Suggestion)',
    description: 'The Small Business Administration (SBA) offers free learning resources for small businesses.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.sba.gov/learning-center', // Known URL
    category: 'Entrepreneurship & Business',
    duration: 'Varies',
    channelName: 'SBA',
    imageHint: 'small business admin learning',
  },

  // Hand Skills / Crafts
  {
    id: 'hnd-craft-0',
    title: 'Free Sewing Course Playlist',
    description: 'A YouTube playlist offering free sewing courses and tutorials.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Free+Sewing+Course+Playlist',
    category: 'Hand Skills / Crafts',
    duration: 'Varies',
    channelName: 'YouTube / Seamwork',
    imageHint: 'sewing craft learn',
  },
  {
    id: 'hnd-craft-1',
    title: 'Sewing for Beginners Playlist',
    description: 'A YouTube playlist designed for individuals new to sewing.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Sewing+for+Beginners+Playlist',
    category: 'Hand Skills / Crafts',
    duration: 'Varies',
    channelName: 'YouTube',
    imageHint: 'sewing machine fabric',
  },
  {
    id: 'hnd-craft-2',
    title: 'Basics of Sewing (Alison)',
    description: 'A free structured course on the basics of sewing, offered by Alison.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.alison.com',
    category: 'Hand Skills / Crafts',
    duration: 'Varies',
    channelName: 'Alison',
    imageHint: 'online sewing course',
  },
  {
    id: 'hnd-craft-3',
    title: 'Learn Sewing for Free – Arkdefo',
    description: 'Free resources and courses for learning sewing from Arkdefo.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://courses.arkdefo.com/', // Primary domain
    category: 'Hand Skills / Crafts',
    duration: 'Varies',
    channelName: 'Arkdefo',
    imageHint: 'sewing lessons free',
  },
  {
    id: 'hnd-craft-4',
    title: 'Crazy Little Projects – Learn to Sew Online',
    description: 'Learn to sew with online tutorials and projects from Crazy Little Projects.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://crazylittleprojects.com/',
    category: 'Hand Skills / Crafts',
    duration: 'Varies',
    channelName: 'Crazy Little Projects',
    imageHint: 'diy sewing projects',
  },

  // Health & Nursing Basics
  {
    id: 'hlt-nurse-0',
    title: 'CPR, AED & First Aid Course (Alison)',
    description: 'A comprehensive course on CPR, AED, and First Aid available on Alison.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.alison.com',
    category: 'Health & Nursing Basics',
    duration: 'Varies',
    channelName: 'Alison',
    imageHint: 'cpr first aid course',
  },
  {
    id: 'hlt-nurse-1',
    title: 'FirstAidForFree.com – Basic to Advanced',
    description: 'Free first aid courses ranging from basic to advanced levels.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.firstaidforfree.com/',
    category: 'Health & Nursing Basics',
    duration: 'Varies',
    channelName: 'FirstAidForFree.com',
    imageHint: 'first aid training online',
  },
  {
    id: 'hlt-nurse-2',
    title: 'American Red Cross Online First Aid',
    description: 'Online first aid courses and resources from the American Red Cross.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.redcross.org/take-a-class/first-aid/first-aid-training/first-aid-online',
    category: 'Health & Nursing Basics',
    duration: 'Varies',
    channelName: 'American Red Cross',
    imageHint: 'red cross online course',
  },
  {
    id: 'hlt-nurse-3',
    title: 'Cursa First Aid Courses',
    description: 'A range of free first aid topics available through Cursa app/platform.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://cursa.app/', // Primary domain
    category: 'Health & Nursing Basics',
    duration: 'Varies',
    channelName: 'Cursa',
    imageHint: 'mobile learning first aid',
  },
  {
    id: 'hlt-nurse-4',
    title: 'Basic First Aid Training (YouTube, Nurse Eunice)',
    description: 'Basic first aid training video by Nurse Eunice on YouTube.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Basic+First+Aid+Training+Nurse+Eunice',
    category: 'Health & Nursing Basics',
    duration: 'Varies',
    channelName: 'YouTube (Nurse Eunice)',
    imageHint: 'youtube first aid nurse',
  },

  // Personal Growth
  {
    id: 'pers-growth-0',
    title: '5-Minute Mindfulness Meditation for Stress',
    description: 'Quick mindfulness meditation sessions for stress relief, available on YouTube.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=5-Minute+Mindfulness+Meditation+Stress',
    category: 'Personal Growth',
    duration: '5 mins',
    channelName: 'YouTube',
    imageHint: 'meditation stress relief',
  },
  {
    id: 'pers-growth-1',
    title: 'Free Masterclass: Confident Communication',
    description: 'A free masterclass on confident communication, often found on YouTube or Instagram.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Free+Masterclass+Confident+Communication',
    category: 'Personal Growth',
    duration: 'Varies',
    channelName: 'YouTube / Instagram',
    imageHint: 'confidence communication skills',
  },
  {
    id: 'pers-growth-2',
    title: 'Challenges & Opportunities in the Digital Era – Rural Women Online',
    description: 'Discussions on challenges and opportunities for rural women in the digital age.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Challenges+Opportunities+Digital+Era+Rural+Women+Online',
    category: 'Personal Growth',
    duration: 'Varies',
    channelName: 'YouTube (Rural Women Online)',
    imageHint: 'women empowerment digital',
  },
  {
    id: 'pers-growth-3',
    title: 'Google AI Productivity Course (Suggestion)',
    description: 'Consider Google\'s AI courses for improving productivity.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://grow.google/intl/europe/courses/?category=ai', // Example relevant link
    category: 'Personal Growth',
    duration: 'Varies',
    channelName: 'Google',
    imageHint: 'ai productivity learning',
  },
  {
    id: 'pers-growth-4',
    title: 'Free Life Skills Courses via DigitalDefynd (Suggestion)',
    description: 'DigitalDefynd curates lists of free courses, including life skills.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://digitaldefynd.com/best-free-life-skills-courses/',
    category: 'Personal Growth',
    duration: 'Varies',
    channelName: 'DigitalDefynd',
    imageHint: 'life skills online courses',
  },

  // Life Skills
  {
    id: 'life-skill-0',
    title: 'Life Skills via First Aid Modules (FirstAidForFree)',
    description: 'Learn life skills through the context of first aid modules.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.firstaidforfree.com/',
    category: 'Life Skills',
    duration: 'Varies',
    channelName: 'FirstAidForFree.com',
    imageHint: 'practical life skills',
  },
  {
    id: 'life-skill-1',
    title: 'WFP Digital Skills List including Life Skills Modules',
    description: 'WFP Innovation\'s list of digital skills, which includes life skills components.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://wfpinnovation.medium.com/',
    category: 'Life Skills',
    duration: 'Varies',
    channelName: 'WFP Innovation (Medium)',
    imageHint: 'essential skills learning',
  },
  {
    id: 'life-skill-2',
    title: 'YouTube: Digital Skills Every Day',
    description: 'Explore everyday digital skills through YouTube tutorials.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.youtube.com/results?search_query=Digital+Skills+Every+Day',
    category: 'Life Skills',
    duration: 'Varies',
    channelName: 'YouTube',
    imageHint: 'daily digital tasks',
  },
  {
    id: 'life-skill-3',
    title: 'Harvard Online Free Courses via edX (Life Management)',
    description: 'Free courses from Harvard via edX, including topics on life management.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.edx.org/school/harvardx',
    category: 'Life Skills',
    duration: 'Varies',
    channelName: 'HarvardX (edX)',
    imageHint: 'harvard free courses online',
  },
  {
    id: 'life-skill-4',
    title: 'Duolingo for Language Life Skill',
    description: 'Use Duolingo to learn a new language, an essential life skill.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.duolingo.com/',
    category: 'Life Skills',
    duration: 'Varies',
    channelName: 'Duolingo',
    imageHint: 'language app learning',
  },

  // Digital Earning Skills
  {
    id: 'dig-earn-0',
    title: 'Free Code Camp – Coding and Tech Skills',
    description: 'Learn coding and technology skills for free with Free Code Camp, opening doors to digital earning.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.freecodecamp.org',
    category: 'Digital Earning Skills',
    duration: 'Varies',
    channelName: 'Free Code Camp',
    imageHint: 'coding for income',
  },
  {
    id: 'dig-earn-1',
    title: 'Kadenze STEAM Courses – Includes Tech + Digital Art',
    description: 'Explore STEAM (Science, Technology, Engineering, Arts, Math) courses on Kadenze, including tech and digital art for potential earning.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://www.kadenze.com/courses',
    category: 'Digital Earning Skills',
    duration: 'Varies',
    channelName: 'Kadenze',
    imageHint: 'digital art tech courses',
  },
  {
    id: 'dig-earn-2',
    title: 'IBM SkillsBuild – Free Digital Career Tracks',
    description: 'IBM SkillsBuild offers free digital skills training and career tracks.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://skillsbuild.org/',
    category: 'Digital Earning Skills',
    duration: 'Varies',
    channelName: 'IBM SkillsBuild',
    imageHint: 'ibm career skills',
  },
  {
    id: 'dig-earn-3',
    title: 'MIT OpenCourseWare – Self-Paced Tech Courses',
    description: 'Access self-paced technology courses from MIT OpenCourseWare for advanced digital skills.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://ocw.mit.edu/',
    category: 'Digital Earning Skills',
    duration: 'Varies',
    channelName: 'MIT OpenCourseWare',
    imageHint: 'mit free tech courses',
  },
  {
    id: 'dig-earn-4',
    title: 'Django Girls – Free Python/Django Workshops',
    description: 'Django Girls offers free workshops to learn Python and Django, valuable for web development careers.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    externalUrl: 'https://djangogirls.org/',
    category: 'Digital Earning Skills',
    duration: 'Varies (Workshops)',
    channelName: 'Django Girls',
    imageHint: 'python django workshop',
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
