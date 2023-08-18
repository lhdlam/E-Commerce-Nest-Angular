import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openMenu: boolean = false
  isUserAuthenticated: any

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authUser()
  }

  toggleMenu() {
    this.openMenu = !this.openMenu
    console.log('VALUE', this.openMenu)
  }

  authUser() {

    let token : any = window.localStorage.getItem('token')

    if (!token) {
      this.isUserAuthenticated = false
    }

    if (token) {
      this.authService.verifiedUser(token).subscribe((data: any) => {
        if (data && data === 'Authorized') {
          this.isUserAuthenticated = true
        } else {
          this.isUserAuthenticated = false
        }
      })
    }
  }
}
