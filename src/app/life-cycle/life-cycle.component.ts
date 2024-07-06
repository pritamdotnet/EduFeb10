import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
@Input() title:string='';
  constructor() {
    console.log("Inside constructor");
   }
  ngOnInit(): void {
    console.log("Inside ngOnInit");
  }
  ngOnChanges(){
    console.log("Inside ngOnChanges");
  }
  ngDoCheck(){
    console.log("Inside ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("Inside ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("Inside ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("Inside ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("Inside ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("Inside ngOnDestroy");
  }
}
