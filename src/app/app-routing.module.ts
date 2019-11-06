import { AdmincarsComponent } from './components/admincars/admincars.component';
import { AdminexperiencesComponent } from './components/adminexperiences/adminexperiences.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { LoginadminsellerComponent } from './components/loginadminseller/loginadminseller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsermybbComponent} from './components/usermybb/usermybb.component';
import {CommentiComponent} from './components/commenti/commenti.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {UsermybbdetailComponent} from './components/usermybbdetail/usermybbdetail.component';

const routes: Routes = [
  {path: '', component: AdminhomeComponent},
  {path: 'commenti', component: CommentiComponent},
  {path: 'users', component: UsermybbComponent},
  {path: 'apartments', component: AdminhomeComponent},
  {path: 'experiences', component: AdminexperiencesComponent},
  {path: 'cars', component: AdmincarsComponent},
  {path: 'users/:id', component: UsermybbdetailComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
