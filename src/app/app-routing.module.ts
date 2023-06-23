import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { StudupdateComponent } from './studupdate/studupdate.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'update/:id',component:BookupdateComponent},
  {path:'students',component:StudentsComponent},
  {path:'studupdate/:id',component:StudupdateComponent},
  {path:'searchbooks',component:SearchbooksComponent},
  {path:'',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
