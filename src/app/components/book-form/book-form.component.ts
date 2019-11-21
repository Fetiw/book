import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookService } from '../../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Input()
  book?: Book;

  form = this.formBuilder.group({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
    pagesQuantity: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    if (this.book) {
      this.form.patchValue(this.book);
    }
  }

  onSubmit() {
    if (this.book) {
      this.bookService.updateBook(this.book.id, this.form.value);
    } else {
      this.bookService.addBook(this.form.value);
    }

    this.form.reset();
  }

}
