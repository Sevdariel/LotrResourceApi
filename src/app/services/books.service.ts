import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class BooksService {
  public booksResource = httpResource(() => 'https://the-one-api.dev/v2/book');
}
// const booksResource = httpResource(() => 'https://the-one-api.dev/v2/book')
// export const bookResource = httpResource(() => 'https://the-one-api.dev/v2/book');
// export const booksSignal = toSignal(bookResource.get());