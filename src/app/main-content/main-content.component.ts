import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Nino',
      lastName: 'Aquino',
      course: 'Programming'
    }
    this.students[1] = {
      id: 2,
      firstName: 'LeBron',
      lastName: 'James',
      course: 'Nursing'
    }
    this.students[2] = {
      id: 3,
      firstName: 'Kobe',
      lastName: 'Bryant',
      course: 'Art'
    }
    this.students[3] = {
      id: 4,
      firstName: 'Michael',
      lastName: 'Jordan',
      course: 'Culinary'
    }
  }


  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 5,
      firstName: 'Dwyane',
      lastName: 'Wade',
      course: 'Military'
    };

    this.students.push(student);

  }

}
