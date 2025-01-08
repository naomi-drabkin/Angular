import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCoursesComponent } from './menu-courses.component';

describe('MenuCoursesComponent', () => {
  let component: MenuCoursesComponent;
  let fixture: ComponentFixture<MenuCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
