import { Component } from '@angular/core';
import {
 
  CdkMenu,
  CdkMenuTrigger,
  CdkMenuItem,
  CdkMenuBar,
} from '@angular/cdk/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CdkMenu,
    CdkMenuTrigger,
    CdkMenuItem,
    CdkMenuBar,MatMenuModule,MatToolbarModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent {

}
