import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwTokenService } from './servicio/jw-token.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  
  constructor(private router:Router, private jwTokenService:JwTokenService){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //OBJETIVO DEL GUARD

      //si existe dime que es verdadero
      if(this.jwTokenService.token)
        return true;

      //sino mandame al login y devuelveme false
      
        this.router.navigate(["login"]);
        return false;
      
        


  }
  


}
