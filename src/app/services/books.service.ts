import { httpResource } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private httpClient = inject(HttpClient);

  // public booksHttpResource = httpResource(() => 'https://the-one-api.dev/v2/book');

  // public booksResource = resource({
  //   loader: async () => {
  //     const response = await fetch('https://the-one-api.dev/v2/book')
  //     const data = await response.json()
  //     return data.docs;
  //   }
  // });

  // public getResourceBoos() {
  //   return this.booksResource.value();
  // }

  // public getBooks() {
  //   return this.httpClient.get('https://the-one-api.dev/v2/book');
  // }

  // Signal for the resource implementation
  // public booksSignal = toSignal(this.booksResource.get());

  // Keep the old implementation for backward compatibility
  // public getBooks() {
  //   return this.booksHttpResource();
  // }
}
// const booksResource = httpResource(() => 'https://the-one-api.dev/v2/book')Mo
// export const bookResource = httpResource(() => 'https://the-one-api.dev/v2/book');
// export const booksSignal = toSignal(bookResource.get());