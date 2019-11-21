import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list-page',
  templateUrl: './books-list-page.component.html',
  styleUrls: ['./books-list-page.component.scss']
})
export class BooksListPageComponent implements OnInit {

  books: Book[] = [];

  constructor( private bookService: BookService ) { }

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }
}
