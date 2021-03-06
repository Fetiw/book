import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookFormComponent } from './components/book-form/book-form.component';
import { FullBookPageComponent } from './pages/full-book-page/full-book-page.component';
import { BooksListPageComponent } from './pages/books-list-page/books-list-page.component';
import { BooksFormAddComponent } from './pages/books-form-add/books-form-add.component';
import { BookEditPageComponent } from './pages/book-edit-page/book-edit-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HeaderComponent } from './components/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookListComponent } from './components/book-list/book-list.component';
import { DialogOverviewExampleDialogComponent } from './components/book-list/dialog-overview-example';
import { TableBooksComponent } from './pages/table-books/table-books.component';
import { TableComponent } from './components/table/table.component';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    FullBookPageComponent,
    BooksListPageComponent,
    BooksFormAddComponent,
    BookEditPageComponent,
    HeaderComponent,
    BookListComponent,
    DialogOverviewExampleDialogComponent,
    TableBooksComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    NgxPaginationModule,
    HttpClientModule,
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
