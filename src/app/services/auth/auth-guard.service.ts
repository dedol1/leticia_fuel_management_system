import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (isPlatformBrowser(this.platformId)) {
      const userRole = sessionStorage.getItem('role');
      if (this.isAuthorized(userRole, route.data?.['roles'])) {
        return true;
      } else {
        // console.log(userRole + 'masa');
        this.errorNotification();
        return this.router.createUrlTree([this.router.url]);
      }
    }
    return true;
  }

  private isAuthorized(userRole: string | null, allowedRoles: string[]): boolean {
    if (!userRole) {
      return false;
    }
    return allowedRoles?.includes(userRole);
  }

   errorNotification() {
    Swal.fire(
      'Sorry!',
      'Error message: You are not authorized to access this page.',
      'error'
    ).then((result)=>{
      if(result.isConfirmed){
        window.location.href =''
      }
    });
  }
  
}
