import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // if (asdfasdf) {
    //   this.router.navigateByUrl('/login');
    //   return false;
    // }/
    console.log('guard activated.');
    const r = Math.random() - 0.5;
    if (r > 0) {
      console.log('guard refuse.');
      return false;
    }
    console.log('guard accept.');
    return true;
  }
}
