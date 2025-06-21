import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
  selectedSeason: string = 'Summer'; // Define selectedSeason
  selectedOccasion: string = 'Party';
  selectedPlace: string = 'Party';
  suggestionMessage: string = '';

  onSubmit() {
    this.suggestionMessage = this.generateDressSuggestion(
      this.selectedOccasion,
      this.selectedSeason,
      this.selectedPlace
    );
  }


  private generateDressSuggestion(
    occasion: string,
    season: string,
    place: string
  ): string {
    if (season === 'Summer') {
      if (occasion === 'Party' && place === 'Party') {
        return 'A stylish sundress would be perfect for a summer party!';
      } else if (occasion === 'Festival' && place === 'Party') {
        return 'For a festival in summer, consider wearing comfortable shorts and a tank top.';
      } else if (occasion === 'Picnic' && place === 'Party') {
        return 'A casual summer dress is a great choice for a picnic.';
      }
    } else if (season === 'Winter') {
      if (occasion === 'Party' && place === 'Party') {
        return 'A long-sleeve dress and a coat would be a great choice for a winter party.';
      } else if (occasion === 'Festival' && place === 'Party') {
        return 'For a winter festival, wear a cozy sweater and jeans.';
      } else if (occasion === 'Picnic' && place === 'Party') {
        return 'In winter, opt for warm layers like sweaters and jeans for a picnic.';
      }
    } else if (season === 'Rainy') {
      if (occasion === 'Party' && place === 'Party') {
        return 'In rainy weather, consider a waterproof jacket and rain boots for a party.';
      } else if (occasion === 'Festival' && place === 'Party') {
        return 'For a rainy festival, go for a poncho and waterproof shoes.';
      } else if (occasion === 'Picnic' && place === 'Party') {
        return 'In the rain, bring an umbrella and wear waterproof clothing for a picnic.';
      }
    }
  
    return 'Please select your preferences to get a dress recommendation.';
  }
  
  
}
