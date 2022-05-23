import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';

import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path : 'acueil', component: AcueilComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
