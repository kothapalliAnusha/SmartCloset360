import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { ClothingItemComponent } from './clothing-item/clothing-item.component';
import { OutfitComponent } from './outfit/outfit.component';
import { LoginComponent } from './login/login.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ImageDataService } from './image-data.service';


@NgModule({
  declarations: [
    AppComponent,
    WardrobeComponent,
    ClothingItemComponent,
    OutfitComponent,
    LoginComponent,
    SuggestionComponent,
    FeedbackComponent,
    LogoutComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ImageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
