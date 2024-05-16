import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-javascriptcourse',
  templateUrl: './javascriptcourse.component.html',
  styleUrl: './javascriptcourse.component.css'
})
export class JavascriptcourseComponent implements OnInit {
title:string="JavaScript";


  constructor(private enrollservice:EnrollService){}
  ngOnInit()  {  }
  onEnrollService(){
    this.enrollservice.enrollCourse(this.title);
  }
}

