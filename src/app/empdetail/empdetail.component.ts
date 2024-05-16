import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdetail',
  template:`<h1 style="text-align:center;">Employee Details</h1>
<button (click)="onEmployeeService()">Employee Details</button>
  
<ul *ngFor="let e of employees">
  <li>{{e.id}}-{{e.name}}-{{e.dept}}-{{e.desg}}</li>
  </ul>
  `,
  styles: []
})
export class EmpdetailComponent implements OnInit {
  public employees:any=[];
  constructor(private employeeservice:EmployeeService){
    }
  ngOnInit(){  }

    onEmployeeService()
    {this.employees=this.employeeservice.getEmployees();}

  
  }
  
