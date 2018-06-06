import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyListService } from './my-list.service';

@Injectable()
export class MyListGuard implements CanActivate {

  constructor(
    private mlistService: MyListService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.mlistService.getList().length) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
