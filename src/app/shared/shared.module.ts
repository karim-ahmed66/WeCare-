import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
  ],
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
