import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist',
  template:`
  <h1 style="text-align:center;">Employee List</h1>
  <button (click)="onEmployeeService()">Emplist</button>
  <ul *ngFor="let e of employees">
  <li> {{e.name}}</li>
  </ul>
  
  `,
  styles: []
})
export class EmplistComponent implements OnInit{
  public employees:any=[];
constructor(private employeeservice:EmployeeService){
  }

ngOnInit(){ }

    onEmployeeService()
      {
      this.employees=this.employeeservice.getEmployees();
    }

}
