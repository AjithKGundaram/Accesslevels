import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  MatCardModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LevelService } from '../services/levels.service';
import { AccesslevelComponent } from './accesslevel/accesslevel.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AccesslevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    MatInputModule
  ],
  providers: [
    LevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
