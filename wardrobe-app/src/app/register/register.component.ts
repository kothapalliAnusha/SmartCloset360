import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const registrationData = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };
  
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
    });
  
    // Send a POST request to the server with no-cache headers
    this.http.post('http://localhost:3000/register', registrationData, { headers }).subscribe((response) => {
      console.log('Registration response:', response);
      
      
    });
  }
}
