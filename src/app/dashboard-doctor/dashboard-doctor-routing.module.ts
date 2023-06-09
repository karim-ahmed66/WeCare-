import { TestsListComponent } from './tests-list/tests-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [
  { path: "", component: CategoriesComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "patient", component: PatientComponent },
  { path: "doctors", component: DoctorsComponent },
  { path: "tests-list", component: TestsListComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDoctorRoutingModule {
}
