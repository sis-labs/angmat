import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';

import { GraphQLModule } from './graphql.module';
import { UsermgrRoutingModule } from './usermgr-routing.module';

import { UsermgrComponent } from './usermgr.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagerHomePageComponent } from './user-manager-home-page/user-manager-home-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    UsermgrComponent,
    UserListComponent,
    UserManagerHomePageComponent,
    UserDetailsComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTreeModule,
    GraphQLModule,
    NgxDatatableModule,
    UsermgrRoutingModule,
  ],
  exports: [
    UsermgrComponent,
    UserListComponent,
    UserManagerHomePageComponent,
    UserDetailsComponent,
    UserFormComponent,
  ]
})
export class UsermgrModule { }
