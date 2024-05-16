import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { AngularcourseComponent } from './angularcourse/angularcourse.component';
import { JavascriptcourseComponent } from './javascriptcourse/javascriptcourse.component';
import { EnrollService } from './enroll.service';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpdetailComponent,
    AngularcourseComponent,
    JavascriptcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    EnrollService,
    EmployeeService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
