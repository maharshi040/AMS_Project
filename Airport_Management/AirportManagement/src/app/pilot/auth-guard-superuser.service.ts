import { Injectable } from '@angular/core';
import { AMSService } from '../ams.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardSuperuserService implements CanActivate{

  constructor(private amsservice:AMSService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.amsservice.superuser)
    {
      this.router.navigateByUrl('/home')
      return false;
    }
    return true;
  }
}