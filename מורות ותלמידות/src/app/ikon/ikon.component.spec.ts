import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkonComponent } from './ikon.component';

describe('IkonComponent', () => {
  let component: IkonComponent;
  let fixture: ComponentFixture<IkonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IkonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IkonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
