import { Component, inject, OnInit, ResourceRef, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  imports: [],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss'
})
export class BooksList implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private readonly booksService = inject(BooksService);

  protected books$ = signal<any>([]);
  protected booksResource$: ResourceRef<any> = null!;

  public ngOnInit() {
    console.log('BooksList this.activatedRoute.snapshot.data[\'books\']', this.activatedRoute.snapshot.data['books'])
    if (this.activatedRoute.snapshot.data['books']) {
      this.books$.set(this.activatedRoute.snapshot.data['books'].docs);
    }
    console.log('Books list component this.books$()', this.books$())

    // this.booksResource$ = this.booksService.booksResource;
    // console.log('Books list component books', this.booksResource$.value())
  }
}
