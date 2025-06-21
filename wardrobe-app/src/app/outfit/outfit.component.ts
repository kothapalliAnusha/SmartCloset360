import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageDataService } from '../image-data.service'; 
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.component.html',
  styleUrls: ['./outfit.component.css']
})
export class OutfitComponent {
  @ViewChild('dressForm', { static: false }) dressForm: ElementRef<HTMLFormElement> | undefined;
  dressImage: string | undefined;
  uploadSuccess: boolean = false;

  constructor(private http: HttpClient, private imageDataService: ImageDataService, private cd: ChangeDetectorRef) {}

  
  toggleSuccessMessage(show: boolean) {
    this.uploadSuccess = show;
  }
  
//   onSubmit() {
//     if (this.dressForm) {
//       const formData = new FormData(this.dressForm.nativeElement);
  
//       this.http.post('http://localhost:3000/upload', formData).subscribe(
//         (response: any) => {
//           if (response.success) {
//             console.log("Image uploaded successfully");
//             console.log("Image Filename:", response.imageFilename);
  
//             // Construct the image URL
//             const imageUrl = `http://localhost:3000/uploads/${response.imageFilename}`;
//             console.log("Image URL:", imageUrl);


//             console.log('Data before adding to service:', imageUrl);
// this.imageDataService.addImage(imageUrl);

// // Output the data after adding it to the service
// console.log('Data after adding to service:', this.imageDataService.getImageData());
//             // this.imageDataService.addImage(imageUrl);
//             // console.log("I am image service",this.imageDataService.getImageData());
//             // console.log("I am Add image service",this.imageDataService.addImage(imageUrl));
//             this.cd.detectChanges(); // Manually trigger change detection

            
//             this.dressImage = imageUrl; // Set the image URL to display in UI
//             this.toggleSuccessMessage(true); 
//           }
//         },
//         (error) => {
//           console.error(error);
//         }
//       );
//     }
//   }

onSubmit() {
  if (this.dressForm) {
    const formData = new FormData(this.dressForm.nativeElement);

    this.http.post('http://localhost:3000/upload', formData).subscribe(
      (response: any) => {
        if (response.success) {
          console.log("Image uploaded successfully");
          console.log("Image Filename:", response.imageFilename);

          // Construct the image URL
          const imageUrl = `http://localhost:3000/uploads/${response.imageFilename}`;
          console.log("Image URL:", imageUrl);

          // Add the image URL to the service
          const addimage = this.imageDataService.addImage(imageUrl);
          console.log("I am add image", addimage); // Will be true if successful, false if not
          
          // Manually trigger change detection to update the view
          this.cd.detectChanges();

          this.dressImage = imageUrl; // Set the image URL to display in UI
          this.toggleSuccessMessage(true); 
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


  
  
}
