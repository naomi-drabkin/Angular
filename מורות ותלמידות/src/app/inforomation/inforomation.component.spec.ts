import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforomationComponent } from './inforomation.component';

describe('InforomationComponent', () => {
  let component: InforomationComponent;
  let fixture: ComponentFixture<InforomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InforomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
