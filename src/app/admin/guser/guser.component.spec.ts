import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuserComponent } from './guser.component';

describe('GuserComponent', () => {
  let component: GuserComponent;
  let fixture: ComponentFixture<GuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
