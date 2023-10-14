import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservice: AuthService, private router: Router) { }
  login!: string
  password!: string

  loginUser() {
    const data = {
      "login": this.login,
      "password": this.password
    }
    this.authservice.login(data).subscribe(value => {
      // console.log(value);
      if (value.status == true) {
        this.authservice.setToken(value.token)
        this.authservice.setRole(value.user.role)
        this.authservice.setId(value.user.id)
        if (value.user.role === "RP") {
          this.router.navigate(['/page/rp/dashboard'])
        }
        else if (value.user.role === "prof") {
          this.router.navigate(['/page/prof/listecour'])
        }
      }
      else {
        console.log('not login');
      }
    })
  }

}

