import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { ClothingItemComponent } from './clothing-item/clothing-item.component';
import { OutfitComponent } from './outfit/outfit.component';

const routes: Routes = [
  { path: '', redirectTo: '/wardrobe', pathMatch: 'full' }, // Redirect to the wardrobe component by default
  { path: 'wardrobe', component: WardrobeComponent },
  { path: 'clothing', component: ClothingItemComponent },
  { path: 'outfit', component: OutfitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
