import { Book } from '@/types/book';
import { booksBatch1 } from './books-batch1';
import { booksBatch2 } from './books-batch2';
import { booksBatch3 } from './books-batch3';
import { booksBatch4 } from './books-batch4';
import { booksBatch5 } from './books-batch5';
import { booksBatch6 } from './books-batch6';
import { booksBatch7 } from './books-batch7';
import { booksBatch8 } from './books-batch8';
import { booksBatch9 } from './books-batch9';
import { booksBatch10 } from './books-batch10';
import { booksBatch11 } from './books-batch11';
import { booksBatch12 } from './books-batch12';
import { isbnMap } from './isbns';

// Combine all batches
const allBooks: Book[] = [
  ...booksBatch1,
  ...booksBatch2,
  ...booksBatch3,
  ...booksBatch4,
  ...booksBatch5,
  ...booksBatch6,
  ...booksBatch7,
  ...booksBatch8,
  ...booksBatch9,
  ...booksBatch10,
  ...booksBatch11,
  ...booksBatch12,
];

// Deduplicate by slug (first occurrence wins) and merge ISBNs
const seen = new Set<string>();
export const books: Book[] = allBooks
  .filter((book) => {
    if (seen.has(book.slug)) return false;
    seen.add(book.slug);
    return true;
  })
  .map((book) => ({
    ...book,
    isbn: book.isbn || isbnMap[book.slug],
  }));

export default books;
