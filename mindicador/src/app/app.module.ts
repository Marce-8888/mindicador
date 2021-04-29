import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './webComponents/home/home.component';
import { DetailsComponent } from './webComponents/details/details.component';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ObjToArrayPipe } from './obj-to-array.pipe';
import { NavBarComponent } from './webComponents/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ObjToArrayPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
