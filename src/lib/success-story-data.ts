
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
  customDisplayHtml?: string; // Added for custom HTML rendering
}

export const successStoriesData: SuccessStory[] = [
  {
    id: 'sylvia-chisangano',
    type: 'video',
    title: 'Sylvia Chisangano: Zambia\'s Seed Entrepreneur',
    name: 'Sylvia Chisangano',
    summary: 'Discover how Sylvia became a successful seed entrepreneur in Zambia, transforming her community.',
    imageUrl: 'https://i.ytimg.com/vi/nGsk6n0GnNs/hqdefault.jpg', 
    imageHint: 'woman farmer zambia',
    linkUrl: 'https://www.youtube.com/watch?v=nGsk6n0GnNs', 
    youtubeVideoId: 'nGsk6n0GnNs', 
    categoryTags: ['Entrepreneurship', 'Agriculture'],
  },
  {
    id: 'asha-gond',
    type: 'video',
    title: 'Asha Gond: Tribal Skateboarder & Changemaker',
    name: 'Asha Gond',
    summary: 'Asha Gond challenges norms and inspires her village in India through skateboarding.',
    imageUrl: 'https://i.ytimg.com/vi/examplevideoId2/hqdefault.jpg', 
    imageHint: 'girl skateboard india',
    linkUrl: 'https://www.youtube.com/results?search_query=Asha+Gond+skateboarder',
    youtubeVideoId: 'examplevideoId2', 
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
    youtubeVideoId: 'Gr89BWDGt6g', 
    categoryTags: ['Inspiration', 'Community'],
  },
  {
    id: 'muskan-ahirwar',
    type: 'article',
    title: 'Muskan Ahirwar: The Young Librarian',
    name: 'Muskan Ahirwar',
    summary: "At just 9 years old, Muskan started a library in her slum to help other children discover the joy of reading. Her story of leadership and literacy has inspired the nation.",
    imageUrl: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/07/737093-muskan-ahirwar-100718.jpg',
    imageHint: 'girl reading library',
    linkUrl: 'https://www.bbc.com/news/world-asia-india-50952101',
    categoryTags: ['Education', 'Community', 'Leadership'],
    customDisplayHtml: `<div style="max-width: 320px; padding: 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: #fff; font-family: sans-serif; margin: auto;">   <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/07/737093-muskan-ahirwar-100718.jpg" alt="Muskan Ahirwar - Young Librarian" style="width: 100%; border-radius: 8px;">   <h3 style="margin-top: 12px; font-size: 1.2em; color: #333;">Muskan Ahirwar: The Young Librarian</h3>   <p style="color: #555;">At just 9 years old, Muskan started a library in her slum to help other children discover the joy of reading. Her story of leadership and literacy has inspired the nation.</p>   <a href="https://www.bbc.com/news/world-asia-india-50952101" target="_blank" style="display: inline-block; margin-top: 10px; padding: 8px 16px; background: #e91e63; color: #fff; text-decoration: none; border-radius: 8px;">Read Full Story</a> </div>`
  },
  {
    id: 'payal-jangid',
    type: 'article',
    title: 'Payal Jangid: Activist Against Child Marriage',
    name: 'Payal Jangid',
    summary: 'Payal escaped child marriage and became a global activist for children\'s rights in her village in Rajasthan, India.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'girl activist india',
    linkUrl: '#', 
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
    linkUrl: '#', 
    categoryTags: ['Education', 'Leadership', 'Empowerment'],
  },
];

