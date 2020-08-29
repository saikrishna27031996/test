import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private route: Router){

  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        console.log(localStorage.getItem('userName'))
        if(localStorage.getItem('userName')!= null){

            return true;
        }else{
            alert('Please Login')
            this.route.navigate(['']);
            return false;
        }
    
    }

}