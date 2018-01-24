import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
