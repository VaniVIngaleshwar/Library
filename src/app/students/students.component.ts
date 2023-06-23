import { Component } from '@angular/core';
import { studmodel } from './model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiSService } from '../api-s.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  studform!:FormGroup;
  data!:undefined|studmodel[];
  constructor(private formbuilder:FormBuilder,private api:ApiSService){}

  ngOnInit(): void {
    this.studform=this.formbuilder.group({
      name:['',Validators.required,Validators.name],
      email:['',Validators.required, Validators.email],
      semester:['',Validators.required],  
      usn:['',Validators.required]  
    })
    this.getstud();
  }

  get name() {
    return this.studform.get('name');
  }

  get email() {
    return this.studform.get('email');
  }

  get semester() {
    return this.studform.get('semester');
  }

  get usn() {
    return this.studform.get('usn');
  }

addstud(data:studmodel){
  this.api.addstud(data).subscribe((res=>{
  this.studform.reset();
  }))
  this.getstud();
    }
  
    getstud(){
      this.api.getstud().subscribe(res=>{
        this.data=res;
      })
}

deletbook(data:any){
  this.api.deletestud(data.id).subscribe(res=>{
    this.getstud();
  })
}

searchStudents(event:any){
  console.log(event.target.value);

   if(event.target.value){
    this.api.searchStudents(event.target.value).subscribe(res=>{
      this.data=res;
    })
   }else{
    this.getstud();
   }
}
}
