import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToIkon',
  standalone: true
})
export class ImageGalleryComponent {
  images = [
    { src: 'assets/images/debating.png', alt: 'Image 1' },
    { src: 'assets/images/enthusiastic.png', alt: 'Image 2' },
    { src: 'assets/images/excited.webp', alt: 'Image 3' },
    { src: 'assets/images/frightened.png', alt: 'Image 4' },
    { src: 'assets/images/happy.png', alt: 'Image 5' },
    { src: 'assets/images/nervous.png', alt: 'Image 6' },
    { src: 'assets/images/sad.png', alt: 'Image 7' },
  ];

  img: string = '';

  transform(value: string): any {
    this.img = value;

    switch (this.img) {
      case 'happy':
        return (this.images.find((i) => i.alt == 'Image 5'))?.src;
      case 'sad':
        return (this.images.find((i) => i.alt == 'Image 7'))?.src;
      case 'debating':
        return (this.images.find((i) => i.alt == 'Image 1'))?.src;
      case 'enthusiastic':
        return (this.images.find((i) => i.alt == 'Image 2'))?.src;
      case 'excited':
        return (this.images.find((i) => i.alt == 'Image 3'))?.src;
      case 'frightened':
        return (this.images.find((i) => i.alt == 'Image 4'))?.src;
      case 'nervous':
        return (this.images.find((i) => i.alt == 'Image 6'))?.src;
                   
      default:
        return null;
    }
  }
}