import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { StudupdateComponent } from './studupdate/studupdate.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomeComponent,
    HeaderComponent,
    StudentsComponent,
    FooterComponent,
    BookupdateComponent,
    StudupdateComponent,
    SearchbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
