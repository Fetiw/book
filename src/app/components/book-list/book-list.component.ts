import { Component, Input, OnInit } from '@angular/core';
import { removeBook } from '../../reducers/book.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input()
  books = [];
  p: Number = 1;
  count: Number = 5;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  removeBook(id) {
    this.store.dispatch(removeBook(+id));
  }

}
