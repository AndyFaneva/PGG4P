import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrehomeComponent } from './membrehome.component';

describe('MembrehomeComponent', () => {
  let component: MembrehomeComponent;
  let fixture: ComponentFixture<MembrehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrehomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembrehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
