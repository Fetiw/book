import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../models/book';
import {select, Store} from '@ngrx/store';
import {getAllBooks} from '../../reducers/book.selectors';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss']
})
export class TableBooksComponent implements OnInit {


  books$: Observable<Book[]> = this.store.pipe(
    select(getAllBooks)
  );

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

}
