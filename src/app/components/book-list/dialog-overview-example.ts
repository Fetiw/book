import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { removeBook } from '../../reducers/book.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store<AppState>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeBook() {
    this.store.dispatch(removeBook(+this.data));
    this.dialogRef.close();
  }

}
