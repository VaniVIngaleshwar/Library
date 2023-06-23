import { Component } from '@angular/core';
import { studmodel } from '../students/model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiSService } from '../api-s.service';

@Component({
  selector: 'app-studupdate',
  templateUrl: './studupdate.component.html',
  styleUrls: ['./studupdate.component.css']
})
export class StudupdateComponent {
  public dataid!:number;
  public student!:studmodel;
  constructor(private activatedroute:ActivatedRoute, private router:Router, private api:ApiSService){

  }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
this.dataid=param['get']("id");
//console.log("data id is",this.dataid)
    })
    this.api.fetchdata(this.dataid).subscribe((data:studmodel)=>{
this.student=data;
    })
  }
  update(){
    this.api.updatebook(this.student,this.dataid).subscribe((res:studmodel)=>{
    this.router.navigate(["/"])
  })
  }
}
