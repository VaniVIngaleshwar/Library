import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { bookmodel } from './model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookform!: FormGroup;
  data: undefined | bookmodel[];
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.bookform = this.formbuilder.group({
      bid: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required],
      price:['', Validators.required]
    })
    this.getBook();
  }

  get bid() {
    return this.bookform.get('bid');
  }

  get name() {
    return this.bookform.get('name');
  }

  get type() {
    return this.bookform.get('type');
  }

  get author() {
    return this.bookform.get('author');
  }

  get year() {
    return this.bookform.get('year');
  }

  get price() {
    return this.bookform.get('price');
  }

  addBook(data: bookmodel) {
    this.api.addBook(data).subscribe((res => {
      this.bookform.reset();
    }))
    this.getBook();
  }

  getBook() {
    this.api.getBook().subscribe(res => {
      this.data = res;
    })
  }

  deletBook(data: any) {
    this.api.deletBook(data.id).subscribe(res => {
      this.getBook();
    })
  }

  searchBook(event: any) {
    if (event.target.value) {
      this.api.searchBooks(event.target.value).subscribe(res => {
        this.data = res;
      })
    } else {
      this.getBook();
    }
  }
}
