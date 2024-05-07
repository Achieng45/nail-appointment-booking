import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "../taskbar/taskbar.component";


@Component({
    selector: 'app-base',
    standalone: true,
    templateUrl: './base.component.html',
    styleUrl: './base.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, TaskbarComponent]
})
export class BaseComponent {

isImageLoaded:boolean=false;
ngOnInit(): void {
  setTimeout(()=>{
    this.isImageLoaded=true;
  },2000);
}
book(){
  console.log("clicked")
}
}
