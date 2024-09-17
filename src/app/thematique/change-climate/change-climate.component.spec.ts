import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeClimateComponent } from './change-climate.component';

describe('ChangeClimateComponent', () => {
  let component: ChangeClimateComponent;
  let fixture: ComponentFixture<ChangeClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeClimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
