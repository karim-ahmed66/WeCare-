import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardHomeComponent } from './dashboard-doctor/dashboard-home/dashboard-home.component';
import { AddPatientComponent } from './dashboard-doctor/add-patient/add-patient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: "addPatient", component: AddPatientComponent }
  ,
  {
    path: 'dashboard-home', component: DashboardHomeComponent,
    children: [{
      path: '',
      loadChildren: () => import('./dashboard-doctor/dashboard-doctor-routing.module').then(m => m.DashboardDoctorRoutingModule)
    },]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
