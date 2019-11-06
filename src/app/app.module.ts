import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import {CommentiService} from './services/commenti.service';
import {HttpClientModule} from '@angular/common/http';
import { CommentiComponent } from './components/commenti/commenti.component';
import {MyairbbService} from './services/myairbb.service';
import { UsermybbComponent } from './components/usermybb/usermybb.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsermybbdetailComponent } from './components/usermybbdetail/usermybbdetail.component';

import { LoginadminsellerComponent } from './components/loginadminseller/loginadminseller.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminexperiencesComponent } from './components/adminexperiences/adminexperiences.component';
import { AdmincarsComponent } from './components/admincars/admincars.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    CommentiComponent,
    UsermybbComponent,
    NotfoundComponent,
    UsermybbdetailComponent,
    LoginadminsellerComponent,
    AdminhomeComponent,
    AdminexperiencesComponent,
    AdmincarsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService,
  CommentiService,
  MyairbbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
