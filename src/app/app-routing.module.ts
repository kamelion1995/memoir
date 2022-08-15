import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';
import { CanalComponent } from './canal/canal.component';
import { CorrespondantComponent } from './correspondant/correspondant.component';
import { CourrierComponent } from './courrier/courrier.component';
import { DetailcanalComponent } from './detailcanal/detailcanal.component';
import { DetailcourrierComponent } from './detailcourrier/detailcourrier.component';
import { DetailutilisateurComponent } from './detailutilisateur/detailutilisateur.component';
import { ListcanalComponent } from './listcanal/listcanal.component';
import { ListcorComponent } from './listcor/listcor.component';
import { ListcourrierComponent } from './listcourrier/listcourrier.component';
import { ListserviceComponent } from './listservice/listservice.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


import { RegistrationComponent } from './registration/registration.component';
import { ServiceComponent } from './service/service.component';
import { UpdatecanalComponent } from './updatecanal/updatecanal.component';
import { UpdatecoresComponent } from './updatecores/updatecores.component';
import { UpdatecourrierComponent } from './updatecourrier/updatecourrier.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import { UpdateutilisateurComponent } from './updateutilisateur/updateutilisateur.component';

const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path : 'acueil', component: AcueilComponent},
  {path: 'listuser', component:ListuserComponent},
  {path: 'updateutilisateur/:id', component:UpdateutilisateurComponent},
  {path: 'detailutilisateur/:id', component:DetailutilisateurComponent},
  {path: 'correspondant', component:CorrespondantComponent},
  {path:'listcor', component:ListcorComponent},
  {path: 'updatecores/:id', component:UpdatecoresComponent},
  {path: 'detailcor/:id', component:DetailutilisateurComponent},
  {path: '',component:LoginpageComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path: 'listservice', component:ListserviceComponent},
  {path:'service', component:ServiceComponent},
  {path:'courrier', component:CourrierComponent},
  {path:'listcourrier', component: ListcourrierComponent},
  {path:'canal', component:CanalComponent},
  {path:'listcanal', component:ListcanalComponent},
  {path: 'updateservice/:id',component:UpdateserviceComponent},
  {path:'updatecourrier/:id', component:UpdatecourrierComponent},
  {path:'detailcourrier/:id',component:DetailcourrierComponent},
  {path:'updatecanal/:id',component:UpdatecanalComponent },
  {path:'detailcanal/:id',component:DetailcanalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
