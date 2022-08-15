import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { AcueilComponent } from './acueil/acueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateutilisateurComponent } from './updateutilisateur/updateutilisateur.component';
import { DetailutilisateurComponent } from './detailutilisateur/detailutilisateur.component';
import { CorrespondantComponent } from './correspondant/correspondant.component';
import { ListcorComponent } from './listcor/listcor.component';
import { UpdatecoresComponent } from './updatecores/updatecores.component';
import { DetailcorComponent } from './detailcor/detailcor.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ServiceComponent } from './service/service.component';
import { ListserviceComponent } from './listservice/listservice.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CourrierComponent } from './courrier/courrier.component';
import { ListcourrierComponent } from './listcourrier/listcourrier.component';
import { CanalComponent } from './canal/canal.component';
import { ListcanalComponent } from './listcanal/listcanal.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import { UpdatecourrierComponent } from './updatecourrier/updatecourrier.component';
import { DetailcourrierComponent } from './detailcourrier/detailcourrier.component';
import { UpdatecanalComponent } from './updatecanal/updatecanal.component';
import { DetailcanalComponent } from './detailcanal/detailcanal.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { AjouparticipanComponent } from './ajouparticipan/ajouparticipan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AcueilComponent,
    ListuserComponent,
    UpdateutilisateurComponent,
    DetailutilisateurComponent,
    CorrespondantComponent,
    ListcorComponent,
    UpdatecoresComponent,
    DetailcorComponent,
    LoginpageComponent,
    ServiceComponent,
    ListserviceComponent,
    CourrierComponent,
    ListcourrierComponent,
    ListcanalComponent,
    CanalComponent,
    UpdateserviceComponent,
    UpdatecourrierComponent,
    DetailcourrierComponent,
    UpdatecanalComponent,
    DetailcanalComponent,
    AjouparticipanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    ModalModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    BrowserAnimationsModule,
    
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
  RegistrationComponent,
  CanalComponent,
  ServiceComponent,
  UpdateserviceComponent,
  CourrierComponent ,
  AjouparticipanComponent
  ]

})
export class AppModule { }
