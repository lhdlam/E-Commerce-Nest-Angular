import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openMenu: boolean = false
  isUserAuthenticated: any
  isLogin: any


  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authUser()
  }

  toggleMenu() {
    this.openMenu = !this.openMenu
    console.log('VALUE', this.openMenu)
  }

  authUser() {

    let token: any = window.localStorage.getItem('token')

    if (!token) {
      this.isUserAuthenticated = false
      this.isLogin = false
    }

    if (token) {
      this.authService.verifiedUser(token).subscribe((data: any) => {
        console.log("data", data);
        
        if (data && data === 'Authorized') {
          this.isUserAuthenticated = true
          this.isLogin = true
        } else {
          this.isUserAuthenticated = false
          if (data === 'Login') {
            this.isLogin = true
          } else {
            this.isLogin = false
          }
        }
      })
    }
    
  }

  logout(){
    this.router.navigate(['/auth/login'])
    window.localStorage.setItem('token', '')
  }
}
