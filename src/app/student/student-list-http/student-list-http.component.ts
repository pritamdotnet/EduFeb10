import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';
import { StudentService } from 'src/app/service/student.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
  allStudents: student[] = [];
  filterData: string = '';
  constructor(private studentService: StudentService, private httpClient: HttpClient,private router:Router) { }

  ngOnInit(): void {
    //  this.allStudents = this.studentService.getAllStudents();

    this.studentService.getAllStudents().subscribe({
      next: (response) => { this.allStudents = response },
      error: (err) => { console.log(err) }
    })

  }
  viewStudent(studId:number){
    this.router.navigate(['student-view-http',studId])
  }

}
