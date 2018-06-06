import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MyListService } from './my-list.service';

@Injectable()
export class MyListGuard implements CanActivate {

  constructor(
    private mlistService: MyListService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.mlistService.getList().length) {
      return true;
    } else {
      return false;
    }
  }
}
