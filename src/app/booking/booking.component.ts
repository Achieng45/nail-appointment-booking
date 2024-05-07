import { Component } from '@angular/core';
import { TaskbarComponent } from "../taskbar/taskbar.component";
import { RouterModule, RouterOutlet} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-booking',
    standalone: true,
    templateUrl: './booking.component.html',
    styleUrl: './booking.component.css',
    imports: [TaskbarComponent,RouterModule,RouterOutlet,MatFormFieldModule,MatInputModule,MatSelectModule,ReactiveFormsModule,FormsModule]
})
export class BookingComponent {
    Professionals= new FormControl('')
    ProfessionalsList: string[]=['Any Professonal','Stephanie Achieng','Bridget Thomas','Susan Ayago','Rachel Shiro']
}
