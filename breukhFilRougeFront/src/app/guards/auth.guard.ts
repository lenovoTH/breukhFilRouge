// import { inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

// export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

//   const router = inject(Router)
//   const token = localStorage.getItem('access token')
//   const role = localStorage.getItem('role')
//   if (token) {
//     console.log(route.data['role']);
//     return true;
//   }
//   router.navigate(['/'])
//   return false;

// };

//auth avec la fonction