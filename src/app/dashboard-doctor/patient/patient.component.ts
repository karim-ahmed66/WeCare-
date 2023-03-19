import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addpatient() {
    this.router.navigateByUrl('addPatient');
  }
}
