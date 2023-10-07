import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecourComponent } from './listecour.component';

describe('ListecourComponent', () => {
  let component: ListecourComponent;
  let fixture: ComponentFixture<ListecourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecourComponent]
    });
    fixture = TestBed.createComponent(ListecourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
