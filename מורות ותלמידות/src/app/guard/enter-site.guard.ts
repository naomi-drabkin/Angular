import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EnterSiteService } from '../Services/enter web site/enter-site.service';

export const enterSiteGuard: CanActivateFn = (route, state) => {
  
  const enterWebSite = inject(EnterSiteService);
  const r = inject(Router);

  if(enterWebSite.IsPossible==false){

    r.navigate(['/LogOut'])
    return false;
  }

  return enterWebSite.IsPossible;
};
