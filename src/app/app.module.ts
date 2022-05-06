import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaisieComponent} from './components/saisie/saisie.component';
import {DashbordComponent} from './components/dashbord/dashbord.component';
import {AuthentificationComponent} from './components/authentification/authentification.component';
import {AuthentifierComponent} from './components/authentifier/authentifier.component';
import { ObsComponent} from './components/obs/obs.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http"
import { ConcComponent } from './components/conc/conc.component';
import { FavComponent } from './components/fav/fav.component';
import { IntelliComponent } from './components/intelli/intelli.component';
import { ListestationsComponent } from './components/listestations/listestations.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ObservationComponent } from './components/observation/observation.component';
import { OptionsComponent } from './components/options/options.component';
import { PistesComponent } from './components/pistes/pistes.component';
import { StationComponent } from './components/station/station.component';
import { SousfavComponent } from './components/sousfav/sousfav.component';
import { FaitsaisissantComponent } from './components/faitsaisissant/faitsaisissant.component';
import { ListefavComponent } from './components/listefav/listefav.component';
import { GeneraliteComponent } from './components/saisie/generalite/generalite.component';
import { InfogeneraleComponent } from './components/saisie/infogenerale/infogenerale.component';
import { AffichageComponent } from './components/affichage/affichage.component';
import { CreationComponent } from './components/creation/creation.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthentifierComponent,
    SaisieComponent,
    AuthentificationComponent,
    ObsComponent,
    ConcComponent,
    DashbordComponent,
    FavComponent,
    IntelliComponent,
    ListestationsComponent,
    NavbarComponent,
    ObservationComponent,
    OptionsComponent,
    PistesComponent,
    StationComponent,
    SousfavComponent,
    FaitsaisissantComponent,
    ListefavComponent,
    GeneraliteComponent,
    InfogeneraleComponent,
    AffichageComponent,
    CreationComponent





  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
