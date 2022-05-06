import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Inspecteur} from "../model/Inspecteur";
import {Station} from "../model/Station";

@Injectable({
  providedIn: 'root'
})
export class InspecteurService{


  constructor(private http: HttpClient ) {
  }

  public OnCreateInspecteur(inspecteur: Inspecteur): Observable<Inspecteur> {
    let host = environment.host;
    // hna na3mlou appel lel bakend(b esm lpath bel bakend ) w tzidou le parametre eli sta3meltou fel path "
    return this.http.post<Inspecteur>(host+"/inspecteurs/saveInspecteur",inspecteur);
  }
  /*public OngetAllStations(email: string): Observable<Station[]>{
    let host=environment.host;
    return this.http.post<Station[]>(host+"/messtations/getstationbyowner",email);

  }*/
}
