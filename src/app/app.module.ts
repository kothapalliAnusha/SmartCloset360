import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { ClothingItemComponent } from './clothing-item/clothing-item.component';
import { OutfitComponent } from './outfit/outfit.component';

@NgModule({
  declarations: [
    AppComponent,
    WardrobeComponent,
    ClothingItemComponent,
    OutfitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
