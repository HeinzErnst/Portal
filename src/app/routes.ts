import { Routes } from '@angular/router'

import { Error404Component } from './errors/404.component'

export const appRoutes : Routes = [
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]