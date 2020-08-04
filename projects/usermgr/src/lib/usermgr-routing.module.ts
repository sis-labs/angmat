import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsermgrComponent } from './usermgr.component';
import { UserManagerHomePageComponent } from './user-manager-home-page/user-manager-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsermgrComponent,
  },
  {
    path: 'home',
    component: UserManagerHomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermgrRoutingModule { }
