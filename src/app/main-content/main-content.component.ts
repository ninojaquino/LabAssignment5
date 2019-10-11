import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }


  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Nino',
        lastName: 'Aquino',
        course: 'Programming',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Mike',
        lastName: 'Tyson',
        course: 'Boxing',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Mohammad',
        lastName: 'Ali',
        course: 'Super Boxing',
        editMode: false
      }

    ];
  }


  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    }
    );
    this.disableAddButton = true;
  }

  removeStudent(index: number) {
    console.log('index', index);
    this.studentArray.splice(index, 1);
  }

  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;

  }


}
