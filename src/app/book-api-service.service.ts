import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./models/book";

const BASE_URL = '//5e27180f6eeb4400145367b1.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class BookApiServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${BASE_URL}/books`);
  }

  getById(id: number) {
    return this.http.get<Book>(`${BASE_URL}/books/${id}`);
  }

  addBook(book: Book) {
    return this.http.post<Book>(`${BASE_URL}/books`, book);
  }

  editBook(book: Book, id: number) {
    return this.http.put<Book>(`${BASE_URL}/books/${id}`, book);
  }

  deleteBook(id?: number) {
    return this.http.delete<Book>(`${BASE_URL}/books/${id}`);
  }

}
