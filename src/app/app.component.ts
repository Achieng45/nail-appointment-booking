import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "./taskbar/taskbar.component";
import { BaseComponent } from "./base/base.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, TaskbarComponent, BaseComponent]
})
export class AppComponent {
  title = 'nail-appointment';
}
