import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authservice: AuthService, public router: Router) { }
  
  logoutUser() {
    this.authservice.logout().subscribe((value) => {
      // alert(localStorage.getItem('role'))
      this.authservice.removeToken()
      this.router.navigate(['/'])
    })
  }
}
