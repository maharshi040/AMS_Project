import { Injectable } from '@angular/core';
import { AMSService } from '../ams.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardPilotService implements CanActivate{

  constructor(private amsservice:AMSService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.amsservice.pilot)
    {
      this.router.navigateByUrl('/home')
      return false;
    }
    return true;
  }
}
