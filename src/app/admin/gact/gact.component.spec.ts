import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GactComponent } from './gact.component';

describe('GactComponent', () => {
  let component: GactComponent;
  let fixture: ComponentFixture<GactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
