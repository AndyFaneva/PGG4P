import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GprojetComponent } from './gprojet.component';

describe('GprojetComponent', () => {
  let component: GprojetComponent;
  let fixture: ComponentFixture<GprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
