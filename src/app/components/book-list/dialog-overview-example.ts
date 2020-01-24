import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { removeBook } from '../../reducers/book.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import {BookApiServiceService} from "../../book-api-service.service";

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./book-list.component.scss']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private bookServices: BookApiServiceService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeBook() {
    this.bookServices
      .deleteBook(+this.data)
      .subscribe(
        () => this.dialogRef.close()
      );
  }

}
