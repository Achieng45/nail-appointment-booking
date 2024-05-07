import { Routes } from '@angular/router';

import { BookingComponent } from './booking/booking.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { BaseComponent } from './base/base.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
     {path:'booking',component:BookingComponent},
    // {path:'taskbar',component:TaskbarComponent},
    {path:'',component:BaseComponent}
];
