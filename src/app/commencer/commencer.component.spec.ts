import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommencerComponent } from './commencer.component';

describe('CommencerComponent', () => {
  let component: CommencerComponent;
  let fixture: ComponentFixture<CommencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommencerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
