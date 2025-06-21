import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { ClothingItemComponent } from './clothing-item/clothing-item.component';
import { OutfitComponent } from './outfit/outfit.component';
import { LoginComponent } from './login/login.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', redirectTo: '/wardrobe', pathMatch: 'full' },
  { path: 'wardrobe', component: WardrobeComponent },
  { path: 'clothing', component: ClothingItemComponent },
  { path: 'outfit', component: OutfitComponent },
  { path: 'login', component: LoginComponent },
  { path: 'suggestion', component: SuggestionComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
