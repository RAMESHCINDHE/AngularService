import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptcourseComponent } from './javascriptcourse.component';

describe('JavascriptcourseComponent', () => {
  let component: JavascriptcourseComponent;
  let fixture: ComponentFixture<JavascriptcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JavascriptcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
