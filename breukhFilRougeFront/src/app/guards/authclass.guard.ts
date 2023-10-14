import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
// import { AuthService } from "src/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthClass {
    constructor(private authservice: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = localStorage.getItem('access token')
        const role = localStorage.getItem('role')
        if (token && role === route.data['role']) {
            return true;
        }
        this.router.navigate(['/'])
        return false;
    }
}
