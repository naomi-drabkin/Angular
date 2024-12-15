import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachrFormComponent } from './teachr-form.component';

describe('TeachrFormComponent', () => {
  let component: TeachrFormComponent;
  let fixture: ComponentFixture<TeachrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachrFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
