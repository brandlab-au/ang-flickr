import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/flickr.component';
import { FlickrService } from './flickr.service';
import { YachtsComponent } from './yachts/yachts.component';

@NgModule({
  declarations: [AppComponent, FlickrComponent, YachtsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
