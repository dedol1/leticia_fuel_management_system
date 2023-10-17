import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  username = sessionStorage.getItem('username') as string
  email = sessionStorage.getItem('email') as string

  constructor(private authService: AuthService){}

  logout(){
    this.authService.logOut()
  }

}
