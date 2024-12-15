import { Component } from '@angular/core';
import { ImageGalleryComponent } from "../pipe/text-to-ikon.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ikon',
  standalone: true,
  imports: [ImageGalleryComponent, FormsModule],
  templateUrl: './ikon.component.html',
  styleUrl: './ikon.component.css'
})
export class IkonComponent {
  text:string = 'happy';
}
