import { Component } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { ApiService } from '../api.service';
import { bookmodel } from '../books/model';

@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css']
})
export class BookupdateComponent {
  public dataid!:number;
  public book!:bookmodel;
  constructor(private activatedroute:ActivatedRoute, private router:Router, private api:ApiService){

  }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
this.dataid=param['get']("id");
    })
    this.api.fetchData(this.dataid).subscribe((data:bookmodel)=>{
this.book=data;
    })
  }
  update(){
    this.api.updateBook(this.book,this.dataid).subscribe((res:bookmodel)=>{
    this.router.navigate(["/"])
  })
  }
}
