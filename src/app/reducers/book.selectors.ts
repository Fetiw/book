import { createSelector } from '@ngrx/store';
import { AppState } from './index';
import { BookReducerState } from './book.reducer';
import { Book } from '../models/book';

export const selectBooks = (state: AppState) => state.book;

export const getAllBooks = createSelector(
  selectBooks,
  (state: BookReducerState) => state.books
);

export const getBookById = createSelector(
  selectBooks,
  getAllBooks,
  (state: BookReducerState, books: Book[], id: number) => books.find(book => book.id === id)
);

export const getBookLastId = createSelector(
  selectBooks,
  getAllBooks,
  (state: BookReducerState, books: Book[]) => books.length
);

export const getBookAuthors = createSelector(
  selectBooks,
  getAllBooks,
  (state: BookReducerState, books: Book[], contains: string = '') => books
    .map(book => book.author)
    .filter(author => author.toLowerCase().includes(contains.toLowerCase()))
);

export const getBookName = createSelector(
  selectBooks,
  getAllBooks,
  (state: BookReducerState, books: Book[], contains: string = '') => books
    .map(book => book.title)
    .filter(nameBook => nameBook.toLowerCase().includes(contains.toLowerCase()))
);

export const getAllBookOfAuthor = createSelector(
  selectBooks,
  getAllBooks,
  (state: BookReducerState, books: Book[], author: string ) => books.filter(book => book.author === author)
);
