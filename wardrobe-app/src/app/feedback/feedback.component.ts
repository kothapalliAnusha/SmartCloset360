import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  feedbackSubmitted: boolean = false;

  submitFeedback() {
    if (this.email && this.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i)) {
      this.feedbackSubmitted = true;
    }
  }
}
