import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcourseComponent } from './angularcourse.component';

describe('AngularcourseComponent', () => {
  let component: AngularcourseComponent;
  let fixture: ComponentFixture<AngularcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
