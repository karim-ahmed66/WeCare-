import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './dashboard-doctor/dashboard-home/dashboard-home.component';
import { SidebarComponent } from './dashboard-doctor/sidebar/sidebar.component';
import { CategoriesComponent } from './dashboard-doctor/categories/categories.component';
import { TestsListComponent } from './dashboard-doctor/tests-list/tests-list.component';
import { DoctorsComponent } from './dashboard-doctor/doctors/doctors.component';
import { PatientComponent } from './dashboard-doctor/patient/patient.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { DashboardHeadComponent } from './dashboard-doctor/dashboard-head/dashboard-head.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    CategoriesComponent,
    TestsListComponent,
    DoctorsComponent,
    PatientComponent,
    ProfilesComponent,
    DashboardHeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
