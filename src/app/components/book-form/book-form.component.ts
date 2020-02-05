import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { AppState } from '../../reducers';
import { select, Store } from '@ngrx/store';
import { getBookAuthors } from '../../reducers/book.selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BookApiServiceService } from "../../book-api-service.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnChanges {

  authors$: Observable<string[]> = this.store.pipe(select(getBookAuthors));

  @Input()
  book: Book;

  form = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    pagesQuantity: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private bookApiService: BookApiServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form.controls.author.valueChanges
      .subscribe(value => {
        this.authors$ = this.store.pipe(select(getBookAuthors, value || ''));
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const bookChange: SimpleChange = changes.book;

    if (bookChange.currentValue !== bookChange.previousValue) {
      this.form.patchValue(this.book);
    }
  }

  onSubmit() {
    const now = new Date().toISOString().split('T')[0];

    if (this.book) {
      this.bookApiService.editBook({
          ...this.book,
          ...this.form.value,
          updatedAt: now,
        },
        this.book.id
      )
        .subscribe((book: Book) => {
          this.router.navigate(['book/' + book.id]);
        });
    } else {
      this.bookApiService.addBook({
        ...this.form.value,
        createdAt: now,
        updatedAt: now,
      })
        .subscribe((book: Book) => this.router.navigate(['book/' + book.id]));
    }
  }
}
