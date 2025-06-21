import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators'; // Import catchError from 'rxjs/operators' for better error handling
import { of } from 'rxjs'; // Import of from 'rxjs' for better error handling

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.error = '';

    const userData = { username: this.username, password: this.password };

    this.http.post('http://localhost:3000/login', userData)
      .pipe(
        catchError((error) => {
          console.error(error);
          this.error = 'An error occurred. Please try again later.';
          this.loading = false;
          return of(null); // Return an observable to handle the error
        })
      )
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.router.navigate(['/wardrobe']);
          } else {
            this.error = 'Login failed. Please check your credentials.';
          }
          this.loading = false;
        }
      );
  }
}
