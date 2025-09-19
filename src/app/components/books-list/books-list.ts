import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-list',
  imports: [],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss'
})
export class BooksList implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  protected books$ = signal<any>([]);

  public ngOnInit() {
    this.books$.set(this.activatedRoute.snapshot.data['books']);
    console.log(this.books$())
  }
}
