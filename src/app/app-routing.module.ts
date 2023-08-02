import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from './shared/auth/user.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    canActivate: [userGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
