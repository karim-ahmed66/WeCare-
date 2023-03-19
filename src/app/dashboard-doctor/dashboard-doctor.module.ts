import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesComponent } from './categories/categories.component';
import { TestsListComponent } from './tests-list/tests-list.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { ProfilesComponent } from '../pages/profiles/profiles.component';
import { DashboardHeadComponent } from './dashboard-head/dashboard-head.component';



@NgModule({
  declarations: [
    DashboardHomeComponent,
    SidebarComponent,
    CategoriesComponent,
    TestsListComponent,
    DoctorsComponent,
    PatientComponent,
    ProfilesComponent,
    DashboardHeadComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardDoctorModule { }
