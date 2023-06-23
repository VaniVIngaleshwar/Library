import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { bookmodel } from '../books/model';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

  data!: bookmodel[];
  // imagePath: string = "../../assets/";

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.api.getBook().subscribe(res => {
      this.data = res;
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
