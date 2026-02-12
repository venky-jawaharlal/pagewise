export interface Book {
  slug: string;
  title: string;
  author: string;
  authorBio: string;
  year: number;
  pages: number;
  category: Category;
  tags: string[];
  coverColor: string;
  coverEmoji: string;
  isbn?: string;
  rating: number;
  readingTime: string;
  oneLiner: string;
  keyTakeaways: string[];
  summary: string[];
  chapters: ChapterSummary[];
  quotes: Quote[];
  whoShouldRead: string[];
  relatedBooks: string[];
}

/** Lightweight subset of Book for listing pages — no heavy text content */
export type BookCardData = Pick<
  Book,
  | 'slug'
  | 'title'
  | 'author'
  | 'year'
  | 'category'
  | 'tags'
  | 'coverColor'
  | 'coverEmoji'
  | 'isbn'
  | 'rating'
  | 'readingTime'
  | 'oneLiner'
>;

export interface ChapterSummary {
  title: string;
  summary: string;
}

export interface Quote {
  text: string;
  context?: string;
}

export type Category =
  | 'Habits & Routines'
  | 'Focus & Deep Work'
  | 'Time Management'
  | 'Mindset & Psychology'
  | 'Leadership & Management'
  | 'Creativity & Innovation'
  | 'Communication & Influence'
  | 'Health & Energy'
  | 'Career & Skills'
  | 'Entrepreneurship'
  | 'Decision Making'
  | 'Personal Development'
  | 'Wealth & Finance'
  | 'Systems & Strategy';

export const CATEGORIES: Category[] = [
  'Habits & Routines',
  'Focus & Deep Work',
  'Time Management',
  'Mindset & Psychology',
  'Leadership & Management',
  'Creativity & Innovation',
  'Communication & Influence',
  'Health & Energy',
  'Career & Skills',
  'Entrepreneurship',
  'Decision Making',
  'Personal Development',
  'Wealth & Finance',
  'Systems & Strategy',
];

export const CATEGORY_ICONS: Record<Category, string> = {
  'Habits & Routines': '🔄',
  'Focus & Deep Work': '🎯',
  'Time Management': '⏰',
  'Mindset & Psychology': '🧠',
  'Leadership & Management': '👥',
  'Creativity & Innovation': '💡',
  'Communication & Influence': '🗣️',
  'Health & Energy': '⚡',
  'Career & Skills': '📈',
  'Entrepreneurship': '🚀',
  'Decision Making': '⚖️',
  'Personal Development': '🌱',
  'Wealth & Finance': '💰',
  'Systems & Strategy': '♟️',
};

export const CATEGORY_COLORS: Record<Category, string> = {
  'Habits & Routines': 'bg-emerald-500',
  'Focus & Deep Work': 'bg-blue-500',
  'Time Management': 'bg-amber-500',
  'Mindset & Psychology': 'bg-purple-500',
  'Leadership & Management': 'bg-indigo-500',
  'Creativity & Innovation': 'bg-pink-500',
  'Communication & Influence': 'bg-orange-500',
  'Health & Energy': 'bg-red-500',
  'Career & Skills': 'bg-teal-500',
  'Entrepreneurship': 'bg-cyan-500',
  'Decision Making': 'bg-violet-500',
  'Personal Development': 'bg-lime-500',
  'Wealth & Finance': 'bg-yellow-500',
  'Systems & Strategy': 'bg-slate-500',
};
