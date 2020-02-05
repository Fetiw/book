import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import {HttpClient} from '@angular/common/http';
import {BookApiServiceService} from '../../book-api-service.service';

@Component({
  selector: 'app-full-book-page',
  templateUrl: './full-book-page.component.html',
  styleUrls: ['./full-book-page.component.scss']
})
export class FullBookPageComponent implements OnInit {

  book: Book;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private bookApiService: BookApiServiceService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
    this.bookApiService
      .getById(id)
      .subscribe(
       data => this.book = data
      );
    });

  }

  removeBook() {
    this.route.params.subscribe(({id}) => {
      this.bookApiService
        .deleteBook(id)
        .subscribe(
          () => this.router.navigate(['/'])
        );
    });
  }

}
