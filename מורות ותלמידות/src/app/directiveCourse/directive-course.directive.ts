import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[DirectiveCourse]',
  standalone: true
})
export class DirectiveCourseDirective {

  constructor(private color:ElementRef) { }

  @Input() course:string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changeHighlight(this.course);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeHighlight('');
  }

  private changeHighlight(color: string) {
    this.color.nativeElement.style.backgroundColor = color;
  }
}
