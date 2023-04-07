import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrermsAndConditionComponent } from './trerms-and-condition.component';

describe('TrermsAndConditionComponent', () => {
  let component: TrermsAndConditionComponent;
  let fixture: ComponentFixture<TrermsAndConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrermsAndConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrermsAndConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
