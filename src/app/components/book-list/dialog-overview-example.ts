import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookApiServiceService } from '../../book-api-service.service';
import { Book } from '../../models/book';

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
export class DialogOverviewExampleDialogComponent {

  books: Book[];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
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
        () => {
          this.dialogRef.close();
        },
      );
  }

}
