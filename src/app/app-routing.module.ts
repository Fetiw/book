import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullBookPageComponent } from './pages/full-book-page/full-book-page.component';
import { BooksListPageComponent } from './pages/books-list-page/books-list-page.component';
import { BooksFormAddComponent } from './pages/books-form-add/books-form-add.component';
import { BookEditPageComponent } from './pages/book-edit-page/book-edit-page.component';
import {TableBooksComponent} from './pages/table-books/table-books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListPageComponent,
  },
  {
    path: 'book/:id',
    component: FullBookPageComponent
  },
  {
    path: 'book/:id/edit',
    component: BookEditPageComponent
  },
  {
    path: 'form',
    component: BooksFormAddComponent
  },
  {
    path: 'table',
    component: TableBooksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
