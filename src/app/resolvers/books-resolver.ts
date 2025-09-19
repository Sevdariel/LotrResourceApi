import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BooksService } from '../services/books.service';

export const booksResolver: ResolveFn<any> = (route, state) => {
  const booksService = inject(BooksService);

  const books = booksService.booksResource.value();
  console.log('books resolver books', books)
  return books
};
