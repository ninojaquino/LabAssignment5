import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  firstName: string;
  lastName: string;
  // constructor() {
  //   this.firstName = 'Nino';
  //   this.lastName = 'Aquino';
  // }

  showGreeting() {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
  }

  resetGreeting() {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'r1c2';

  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
