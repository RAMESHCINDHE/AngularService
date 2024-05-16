import { Injectable } from '@angular/core';

@Injectable()
/*@Injectable({
  providedIn: 'root'
})*/
export class EmployeeService {


  constructor() { }
  getEmployees(){
    return [
     {id:101,name:"ramesh",dept:"cse",desg:"professor"},{id:409,name:"rambabu",dept:"cse",desg:"professor"},{id:103,name:"anupkanth",dept:"it",desg:"sr.asst.prof"},{id:503,name:"Dr s k",dept:"english",desg:"asst.professor"},{id:708,name:"saritha",dept:"maths",desg:"assoc.professor"}
    ];

  }
}
