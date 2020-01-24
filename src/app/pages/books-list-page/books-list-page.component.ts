import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import {BookApiServiceService} from "../../book-api-service.service";

@Component({
  selector: 'app-books-list-page',
  templateUrl: './books-list-page.component.html',
  styleUrls: ['./books-list-page.component.scss']
})
export class BooksListPageComponent implements OnInit {

  books: Book[];

  constructor(
    private store: Store<AppState>,
    private bookApiService: BookApiServiceService,

  ) { }

  ngOnInit() {
    this.bookApiService
      .getAll()
      .subscribe(
        data  => this.books = data as Book[]
      );
  }
}
