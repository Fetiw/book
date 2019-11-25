import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { getBookById } from '../../reducers/book.selectors';
import { removeBook} from '../../reducers/book.actions';

@Component({
  selector: 'app-full-book-page',
  templateUrl: './full-book-page.component.html',
  styleUrls: ['./full-book-page.component.scss']
})
export class FullBookPageComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.book$ = this.store.pipe(
        select(getBookById, +id),
      );
    });
  }

  removeBook() {
    this.route.params.subscribe(({id}) => {
      this.store.dispatch(removeBook(+id));
      this.router.navigate(['/']);
    });
  }

}
