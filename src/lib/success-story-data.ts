
export interface SuccessStory {
  id: string;
  type: 'video' | 'article';
  title: string;
  name?: string; 
  summary: string;
  imageUrl: string;
  imageHint: string; 
  linkUrl: string; 
  youtubeVideoId?: string; 
  categoryTags: string[]; 
}

export const successStoriesData: SuccessStory[] = [
  {
    id: 'sylvia-chisangano',
    type: 'video',
    title: 'Sylvia Chisangano: Zambia\'s Seed Entrepreneur', // Keeping original title, assuming the new video is still relevant
    name: 'Sylvia Chisangano',
    summary: 'Discover how Sylvia became a successful seed entrepreneur in Zambia, transforming her community.', // Keeping original summary
    imageUrl: 'https://i.ytimg.com/vi/nGsk6n0GnNs/hqdefault.jpg', // Thumbnail for the new video
    imageHint: 'woman farmer zambia',
    linkUrl: 'https://www.youtube.com/watch?v=nGsk6n0GnNs', // Link to the new video
    youtubeVideoId: 'nGsk6n0GnNs', // New video ID
    categoryTags: ['Entrepreneurship', 'Agriculture'],
  },
  {
    id: 'asha-gond',
    type: 'video',
    title: 'Asha Gond: Tribal Skateboarder & Changemaker',
    name: 'Asha Gond',
    summary: 'Asha Gond challenges norms and inspires her village in India through skateboarding.',
    imageUrl: 'https://i.ytimg.com/vi/examplevideoId2/hqdefault.jpg', // Placeholder, ideally update if a specific video is chosen
    imageHint: 'girl skateboard india',
    linkUrl: 'https://www.youtube.com/results?search_query=Asha+Gond+skateboarder',
    youtubeVideoId: 'examplevideoId2', // Placeholder, can be updated to embed
    categoryTags: ['Personal Growth', 'Community', 'Sports'],
  },
  {
    id: 'empowering-rural-women-video',
    type: 'video',
    title: 'Empowering Rural Women: Stories of Strength',
    name: 'Various',
    summary: 'A compilation of inspiring stories showcasing the strength and hope of empowered rural women.',
    imageUrl: 'https://i.ytimg.com/vi/Gr89BWDGt6g/hqdefault.jpg', 
    imageHint: 'women group community',
    linkUrl: 'https://www.youtube.com/watch?v=Gr89BWDGt6g',
    youtubeVideoId: 'Gr89BWDGt6g', // Specific video ID for embedding
    categoryTags: ['Inspiration', 'Community'],
  },
  {
    id: 'muskan-ahirwar',
    type: 'article',
    title: 'Muskan Ahirwar: The Young Librarian',
    name: 'Muskan Ahirwar',
    summary: 'At just nine years old, Muskan started a community library for children in her slum in Bhopal, India.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'girl reading library',
    linkUrl: '#', // Placeholder for actual article link
    categoryTags: ['Education', 'Community', 'Leadership'],
  },
  {
    id: 'payal-jangid',
    type: 'article',
    title: 'Payal Jangid: Activist Against Child Marriage',
    name: 'Payal Jangid',
    summary: 'Payal escaped child marriage and became a global activist for children\'s rights in her village in Rajasthan, India.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'girl activist india',
    linkUrl: '#', // Placeholder for actual article link
    categoryTags: ['Activism', 'Personal Growth', 'Human Rights'],
  },
  {
    id: 'sister-zeph',
    type: 'article',
    title: 'Sister Zeph: Educator and Advocate',
    name: 'Sister Zeph',
    summary: 'Sister Zeph founded a school for girls in her courtyard in Pakistan, empowering them through education.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'woman teacher pakistan',
    linkUrl: '#', // Placeholder for actual article link
    categoryTags: ['Education', 'Leadership', 'Empowerment'],
  },
];
