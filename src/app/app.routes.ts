import { Routes } from '@angular/router';
import { booksResolver } from './resolvers/books-resolver';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/books-list/books-list').then(m => m.BooksList),
        resolve: {
            books: booksResolver
        }
    }
];
