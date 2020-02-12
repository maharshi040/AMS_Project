import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AMSService } from '../ams.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardManagerService implements CanActivate{

  constructor(private amsservice:AMSService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.amsservice.manager)
    {
      this.router.navigateByUrl('/home')
      return false;
    }
    return true;
  }
}
