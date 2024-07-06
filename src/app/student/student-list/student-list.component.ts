import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';
import { StudentService } from 'src/app/service/student.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  filterData: string = '';
  allStudents: student[] = [];

  // studentService:StudentService= new StudentService();

  // allStudents:student[]=[
  //     {
  //       id:1,
  //       studName:'Pritam',
  //       studTotalMarks:90,
  //       studDob: new Date(2020,12,12),
  //       studGender:'Male'
  //     },
  //     {
  //       id:2,
  //       studName:'Sweeta',
  //       studTotalMarks:95,
  //       studDob: new Date(2021,11,9),
  //       studGender:'Female'
  //     },
  //     {
  //       id:3,
  //       studName:'Puja',
  //       studTotalMarks:40,
  //       studDob: new Date(2021,5,10),
  //       studGender:'Female'
  //     },
  //     {
  //       id:4,
  //       studName:'Sumit',
  //       studTotalMarks:65,
  //       studDob: new Date(2020,4,11),
  //       studGender:'Male'
  //     }
  //   ];
  constructor(private studentService: StudentService,
   private httpClient:HttpClient
  ) {

  }

  ngOnInit(): void {
    //  this.allStudents = this.studentService.getAllStudents();

    this.studentService.getAllStudents().subscribe({
      next: (response) => {
         this.allStudents = response;
         },
      error: (err) => { console.error('Error fetching students:', err); }
    })
  }



  getMarkColor(TotalMarks: number) {
    if (TotalMarks >= 90)
      return 'green';
    else if (TotalMarks <= 80 && TotalMarks >= 60)
      return 'yellow';
    else
      return 'red';
  }
  addStudent() {
    let newStudent: student = {
      id: 0,
      studName: 'Test',
      studTotalMarks: 80,
      studDob: new Date(2020, 12, 12),
      studGender: 'Female'
    }
    this.allStudents.push(newStudent);
  }

}
