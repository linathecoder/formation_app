import { Routes } from '@angular/router';

// Auth
import { SigninComponent } from './signin-component/signin-component';

// Admin
import { Dashboard } from './admin/dashboard/dashboard';
import { Condidates } from './admin/condidates/condidates';
import { Instructors } from './admin/instructors/instructors';
import { Trainings } from './admin/trainings/trainings';

// Public
import { Home } from './public/home/home';
import { Formations } from './public/formations/formations';
import { FormationsDetails } from './public/formations-details/formations-details';

export const routes: Routes = [
  // Public
  { path: '', component: Home },
  { path: 'formations', component: Formations },
  { path: 'formation/:id', component: FormationsDetails },

  // Auth
  { path: 'signin', component: SigninComponent },

  // Admin
  {
    path: 'admin-space',
    component: Dashboard,
    children: [
      { path: 'condidates', component: Condidates },
      { path: 'instructors', component: Instructors },
      { path: 'trainings', component: Trainings },
    ]
  }
];
