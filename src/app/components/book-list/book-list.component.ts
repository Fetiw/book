import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example';
import {Book} from "../../models/book";
import {BookApiServiceService} from "../../book-api-service.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  p = 1;
  count = 5;

  constructor(
    public dialog: MatDialog,
    private bookApiService: BookApiServiceService,
  ) { }

  ngOnInit() {
    this.bookApiService
      .getAll()
      .subscribe(
        data  => this.books = data
      );
  }

  openDialog(id): void {
    this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: id,
    });
  }
}
