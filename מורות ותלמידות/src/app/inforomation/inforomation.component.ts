import { Component, ElementRef, ViewChild } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';

@Component({
  selector: 'app-inforomation',
  standalone: true,
  imports: [InfromationPopupComponent],
  templateUrl: './inforomation.component.html',
  styleUrl: './inforomation.component.css'
})
export class InforomationComponent {
  @ViewChild(InfromationPopupComponent) child: InfromationPopupComponent;
  @ViewChild('p1') childP : ElementRef;
  

  DeletStudent(){
    this.childP.nativeElement.innerText = "I changed you"
    this.child.Popup("האם אתה בטוח שברצונך למחוק תלמיד זה?")
  }

}
