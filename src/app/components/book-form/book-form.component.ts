import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { AppState } from '../../reducers';
import { select, Store } from '@ngrx/store';
import { getBookAuthors, getBookLastId } from '../../reducers/book.selectors';
import { addBook, updateBook } from '../../reducers/book.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  lastId: number;

  authors$: Observable<string[]> = this.store.pipe(select(getBookAuthors));

  @Input()
  book?: Book;

  form = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    pagesQuantity: new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.pipe(select(getBookLastId)).subscribe(id => this.lastId = id);
    this.form.controls.author.valueChanges
      .subscribe(value => {
        this.authors$ = this.store.pipe(select(getBookAuthors, value || ''));
      });
    if (this.book) {
      this.form.patchValue(this.book);
    }
  }

  onSubmit() {
    const now = new Date().toISOString().split('T')[0];
    if (this.book) {
      this.store.dispatch(updateBook({
        ...this.book,
        ...this.form.value,
        updatedAt: now,
      }, this.book.id));
      this.router.navigate(['book/' + this.book.id]);
    } else {
      this.store.dispatch(addBook({
        ...this.form.value,
        id: this.lastId + 1,
        createdOn: now,
        updatedAt: now,
      }));
      this.router.navigate(['book/' + this.lastId]);
    }
  }
}
