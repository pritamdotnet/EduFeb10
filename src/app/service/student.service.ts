import { Injectable } from '@angular/core';
import { student } from '../student/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  allStudents:student[]=[];
  private baseUrl: string = "http://localhost:3000/student";

//   allStudents:student[]=[
//     {
//     id:1,
//     studName:'vicky',
//     studTotalMarks:80,
//     studDob: new Date(2021,11,12),
//     studGender:'Male'
//   },
//   {
//     id:2,
//     studName:'nicky',
//     studTotalMarks:80,
//     studDob: new Date(2021,11,13),
//     studGender:'Female'
//   }
// ];


constructor(private httpClient: HttpClient) { }

// getAllStudents():student[]{
// return this.allStudents;
// }
// getAllStudents(): Observable<student[]> {
//   return this.httpClient.get<student[]>(this.baseUrl);
// }


// get response from http -observable 
getAllStudents():Observable<student[]>{
  return this.httpClient.get<student[]>(this.baseUrl);
  }

getAStudent(studId:number):Observable<student>{
return this.httpClient.get<student>(this.baseUrl+'/'+studId); // http://localhost:3000/student/101
}
deleteStudent(studId:number):Observable<void>{
return this.httpClient.delete<void>(this.baseUrl+'/'+studId);
}

}
