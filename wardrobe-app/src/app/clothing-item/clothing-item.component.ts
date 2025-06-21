import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clothing-item',
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.css']
})
export class ClothingItemComponent implements OnInit {
  imageData: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("ClothingItemComponent initialized");
    // Retrieve data from the resolver and log it
    this.imageData = this.route.snapshot.data['imageData']; // Use ['imageData'] to access the resolved data
    console.log("I am Image data", this.imageData);
  }
}
