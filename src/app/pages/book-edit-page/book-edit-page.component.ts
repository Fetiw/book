import {Component, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BookApiServiceService} from "../../book-api-service.service";
import {Book} from "../../models/book";

@Component({
  selector: 'app-book-edit-page',
  templateUrl: './book-edit-page.component.html',
  styleUrls: ['./book-edit-page.component.scss']
})
export class BookEditPageComponent implements OnInit {

  @Output()
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookApiService: BookApiServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.bookApiService.getById(id)
        .subscribe(
          // console.log
        );
    });
  }

}
