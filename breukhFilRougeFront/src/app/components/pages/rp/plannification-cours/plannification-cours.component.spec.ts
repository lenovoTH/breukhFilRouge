import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannificationCoursComponent } from './plannification-cours.component';

describe('PlannificationCoursComponent', () => {
  let component: PlannificationCoursComponent;
  let fixture: ComponentFixture<PlannificationCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannificationCoursComponent]
    });
    fixture = TestBed.createComponent(PlannificationCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
