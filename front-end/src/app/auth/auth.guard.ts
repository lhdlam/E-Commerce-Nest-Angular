import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { AuthService } from "./services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router
        ) {}


    isLoggedIn() {
        let token: any = window.localStorage.getItem('token')

        if (!token) {
            this.router.navigate(['/'])
            return false
        } else {
            return this.authService.verifiedUser(token).pipe(
                map(res => {
                    if (res === 'Authorized') {
                        return true
                    } else {
                        this.router.navigate(['/'])
                        return false
                    }
                }),
                catchError((err) => {
                    return of(false)
                })
            )
        }


    }


    canActivate() {
      return this.isLoggedIn()
    }
}