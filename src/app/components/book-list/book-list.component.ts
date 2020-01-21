import { Component, Input, OnInit } from '@angular/core';
import { removeBook } from '../../reducers/book.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input()
  books = [];
  p = 1;
  count = 5;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog(id): void {
    this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: id,
    });
  }
}
