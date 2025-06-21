import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageDataService {
  imageData: string[] = [];

  addImage(image: string): boolean {
    try {
      this.imageData.push(image);
      return true; // Indicate success
    } catch (error) {
      console.error(error);
      return false; // Indicate failure
    }
  }
  

  getImageData() {
    return this.imageData;
  }
}
