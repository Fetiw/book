import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-full-book-page',
  templateUrl: './full-book-page.component.html',
  styleUrls: ['./full-book-page.component.scss']
})
export class FullBookPageComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.book = this.bookService.getBookById(id);
    });
  }

}
