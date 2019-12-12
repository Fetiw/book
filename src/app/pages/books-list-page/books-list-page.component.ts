import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { getAllBooks } from '../../reducers/book.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-list-page',
  templateUrl: './books-list-page.component.html',
  styleUrls: ['./books-list-page.component.scss']
})
export class BooksListPageComponent implements OnInit {

  books$: Observable<Book[]> = this.store.pipe(
    select(getAllBooks)
  );

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }
}
