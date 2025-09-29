import { inject, resource } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BooksService } from '../services/books.service';

export const booksResolver: ResolveFn<any> = (route, state) => {
  const booksService = inject(BooksService);

  // Resource Api nie działa w resolverze
  const booksResource = resource({
    loader: async () => {
      const response = await fetch('https://the-one-api.dev/v2/book')
      return await response.json()
    }
  });

  // const httpBooks = booksService.booksHttpResource;
  // console.log('books resolver httpResource books', httpBooks)
  // const books = booksService.booksResource.value();
  // console.log('books resolver resource books', books)
  // if (booksService.booksResource.hasValue()) {
  //   console.log('books resolver resource books inside hasValue()', books)
  //   console.log('books resolver resource books', booksService.booksResource.value())
  // }
  return booksResource.value();
};
