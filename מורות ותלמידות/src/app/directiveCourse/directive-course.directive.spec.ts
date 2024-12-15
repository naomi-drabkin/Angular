import { ElementRef } from '@angular/core';
import { DirectiveCourseDirective } from './directive-course.directive';

describe('DirectiveCourseDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new DirectiveCourseDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
