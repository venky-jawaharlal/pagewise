import { Book, Category, CATEGORIES } from '@/types/book';

export function getBookBySlug(books: Book[], slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getBooksByCategory(books: Book[], category: Category): Book[] {
  return books.filter((book) => book.category === category);
}

export function searchBooks(books: Book[], query: string): Book[] {
  const lowered = query.toLowerCase().trim();
  if (!lowered) return books;

  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowered) ||
      book.author.toLowerCase().includes(lowered) ||
      book.oneLiner.toLowerCase().includes(lowered) ||
      book.tags.some((tag) => tag.toLowerCase().includes(lowered)) ||
      book.category.toLowerCase().includes(lowered)
  );
}

export function sortBooks(
  books: Book[],
  sortBy: 'title' | 'author' | 'rating' | 'year'
): Book[] {
  return [...books].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        return a.author.localeCompare(b.author);
      case 'rating':
        return b.rating - a.rating;
      case 'year':
        return b.year - a.year;
      default:
        return 0;
    }
  });
}

export function getRelatedBooks(books: Book[], currentBook: Book, limit = 4): Book[] {
  return books
    .filter(
      (book) =>
        book.slug !== currentBook.slug &&
        (book.category === currentBook.category ||
          book.tags.some((tag) => currentBook.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function getCategoryCount(books: Book[]): Record<Category, number> {
  const counts = {} as Record<Category, number>;
  books.forEach((book) => {
    counts[book.category] = (counts[book.category] || 0) + 1;
  });
  return counts;
}

export function getFeaturedBooks(books: Book[], limit = 6): Book[] {
  return [...books].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCategorySlug(category: Category): string {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-');
}

export function parseCategorySlug(slug: string): Category | undefined {
  return CATEGORIES.find(
    (cat) => formatCategorySlug(cat) === slug
  );
}
