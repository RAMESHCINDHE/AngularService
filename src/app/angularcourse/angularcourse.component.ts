import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-angularcourse',
  templateUrl: './angularcourse.component.html',
  styleUrl: './angularcourse.component.css'
  
})
export class AngularcourseComponent implements OnInit{
title:string="Angular";
constructor(private enrollservice:EnrollService){}
ngOnInit(){}
onEnrollService(){
  this.enrollservice.enrollCourse(this.title);
}

}
