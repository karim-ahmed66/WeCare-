import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
  constructor(
    private router: Router,
  ) { }

  goToTest() {
    this.router.navigateByUrl('TestsList');
  }
}


