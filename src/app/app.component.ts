import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "./taskbar/taskbar.component";
import { BaseComponent } from "./base/base.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, TaskbarComponent, BaseComponent,CommonModule,RouterModule],
})
export class AppComponent  {
 
  
  
}
