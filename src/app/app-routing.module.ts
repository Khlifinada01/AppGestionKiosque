
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaisieComponent} from './components/saisie/saisie.component';
import {DashbordComponent} from './components/dashbord/dashbord.component';
import {AuthentificationComponent} from './components/authentification/authentification.component';
import {AuthentifierComponent} from './components/authentifier/authentifier.component';
import { ObsComponent} from './components/obs/obs.component';
import {ConcComponent} from './components/conc/conc.component';
import {GeneraliteComponent} from './components/saisie/generalite/generalite.component';
import {ListefavComponent} from './components/saisie/listefav/listefav.component';
import {IntelliComponent} from './components/intelli/intelli.component';
import {FaitsaisissantComponent} from './components/faitsaisissant/faitsaisissant.component';
import {ListestationsComponent} from './components/listestations/listestations.component';
import {InfogeneraleComponent} from "./components/saisie/infogenerale/infogenerale.component";
import { Inspecteur } from './model/Inspecteur';
import {CreationComponent} from "./components/creation/creation.component";
import {AffichageComponent} from "./components/affichage/affichage.component";


const routes: Routes = [
  {path: 'saisie', component: SaisieComponent},
  {path: 'authentifier', component: AuthentifierComponent},
  {path: 'analyse', component: DashbordComponent},
  {path: 'info', component: InfogeneraleComponent},
  {path: 'authe', component: AuthentificationComponent},
  { path : 'obs' , component: ObsComponent},
  { path : 'conc' , component: ConcComponent},
  { path : 'generalite' , component: GeneraliteComponent },
  { path : 'fav' , component: ListefavComponent},
  { path : 'intelli' , component: IntelliComponent},
  { path : 'fait' , component : FaitsaisissantComponent},
  {path : 'listestations' , component : ListestationsComponent},
  {path : 'creation' , component: CreationComponent},
  {path: 'afficher', component: AffichageComponent}
];

@NgModule({
  providers: [Inspecteur],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
