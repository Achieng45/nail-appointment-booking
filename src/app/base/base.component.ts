import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "../taskbar/taskbar.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
    selector: 'app-base',
    standalone: true,
    templateUrl: './base.component.html',
    styleUrl: './base.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, TaskbarComponent,MatButtonModule,MatIconModule]
})
export class BaseComponent implements AfterViewInit {
  testimonials = [
    {
      text: "I've been coming to Nails by Adino for over a year, and I couldn't be happier with the service. The staff is incredibly friendly, and they always make me feel welcome. My nails have never looked better! I highly recommend this place to anyone looking for top-notch nail care.",
      image: '/assets/profilet.jpg',
      name: 'Samantha R'
    },
    {
      text: "Nails by Adino is my go-to spot for a relaxing and rejuvenating manicure. The salon is always clean and beautifully decorated, creating a perfect atmosphere for pampering. The technicians are skilled and attentive to detail. I always leave feeling like a new person!",
      image: '/assets/profilet.jpg',
      name: 'Jane D'
    },
    {
      text: "I had an amazing experience at [Nail Salon Name]! The staff took their time to ensure my nails were perfect, and the range of colors and designs they offer is fantastic. It's clear they prioritize customer satisfaction. I'll definitely be back!",
      image: '/assets/profilet.jpg',
      name: 'Emily T'
    },
    
  ];
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView:1,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar:{
        el: '.swiper-button-next',
      },
      direction:'horizontal',
      loop:true
      
    });
    
  }
 
stars:number[]=[1,2,3,4,5]
isImageLoaded:boolean=false;
ngOnInit(): void {
  setTimeout(()=>{
    this.isImageLoaded=true;
  },2000);
}

}
