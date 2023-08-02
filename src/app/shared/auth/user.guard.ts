import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';


export const userGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const radicUser = JSON.parse(localStorage.getItem('radicUser') || '{}');
  return radicUser?.id ? true : router.navigate(['/auth/login']);
};
