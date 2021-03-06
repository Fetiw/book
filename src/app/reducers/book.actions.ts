import { createAction } from '@ngrx/store';

export const addBook = createAction('[Book] add book', book => ({book}));

export const updateBook = createAction('[Book] update book', (book, id) => ({book, id}));

export const removeBook = createAction('[Book] remove book', id => ({id}));
