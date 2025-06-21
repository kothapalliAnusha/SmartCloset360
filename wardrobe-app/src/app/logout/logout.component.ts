import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout() {
    // Implement your logout logic here, e.g., clearing user data or tokens.

    // After logging out, you can redirect the user to the login page or any other page.
    this.router.navigate(['/login']);
  }
}
