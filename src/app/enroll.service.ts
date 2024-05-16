import { Injectable } from '@angular/core';
/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class EnrollService {

  constructor() { }
  enrollCourse(name:string)
  {
    alert(`Thanks for enrolling the '${name}'course`);
  }
}
