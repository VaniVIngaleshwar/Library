import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookmodel } from './books/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  baseurl: string = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  addBook(data: bookmodel) {
    return this.http.post<bookmodel>("http://localhost:3000/books", data)
  }


  getBook() {
    return this.http.get<bookmodel[]>("http://localhost:3000/books");
  }

  deletBook(id: number) {
    return this.http.delete<bookmodel>("http://localhost:3000/books/" + id);
  }

  fetchData(id: number) {
    return this.http.get<bookmodel>("http://localhost:3000/books/" + id);
  }


  updateBook(data: bookmodel, id: number) {
    return this.http.put<bookmodel>("http://localhost:3000/books/" + id, data);
  }

  searchBooks(name: string) {
    return this.http.get<any>(`${this.baseurl}?name=${name}`);
  }
}
