import { Component } from '@angular/core';
import {
 
  CdkMenu,
  CdkMenuTrigger,
  CdkMenuItem,
  CdkMenuBar,
} from '@angular/cdk/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CdkMenu,
    CdkMenuTrigger,
    CdkMenuItem,
    CdkMenuBar,MatMenuModule,MatToolbarModule,RouterOutlet],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent {

}
