import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-edit-page',
  templateUrl: './book-edit-page.component.html',
  styleUrls: ['./book-edit-page.component.scss']
})
export class BookEditPageComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.book = this.bookService.getBookById(id);
    });
  }

}
