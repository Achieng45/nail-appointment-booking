import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'
@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

isImageLoaded:boolean=false;
ngOnInit(): void {
  setTimeout(()=>{
    this.isImageLoaded=true;
  },2000);
}

}
