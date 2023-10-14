import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  role: string = "";

  constructor(private authService: AuthService) { }

  login() {
    const payload = {
      "username": this.username,
      "password": this.password
    }

    this.authService.login(payload).subscribe({
      next: (response: any) => {
        sessionStorage.setItem("token", response.token)
        sessionStorage.setItem("userId", response.user.id)
        sessionStorage.setItem("email", response.user.email)
        sessionStorage.setItem("username", response.user.username)
        sessionStorage.setItem("role", response.user.role)
        this.role = response.user.role;

        Swal.fire('Successful!', 'User login successful', 'success').then((result) => {
          if (result.isConfirmed) {
            if (this.role == "Manager") {
              window.location.href = '/admin/dashboard';
            }
            if (this.role == "Fuel Attendant") {
              window.location.href = '/attendant/dashboard';
            }
            if (this.role == "Fuel Transporter") {
              window.location.href = '/transporter/dashboard';
            }
          }
        }
        )

      },
      error: (error: any) => {
        Swal.fire('Failure!', error.error.message, 'error')
      }
    })

  }

}
