import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'EduFeb10';
  // color:string='Red';
  // age:number=53;

  title = 'Edureka input variable';
  color:string='Red';
  age:number=53;
  ShowComp: boolean= false;

  showorHide(){
    this.ShowComp=!this.ShowComp;
  }
}
