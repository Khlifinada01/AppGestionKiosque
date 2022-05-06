import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Station} from "../model/Station";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StationService {
inspecEmail!: string;
  constructor(private Http : HttpClient) {

  }
  public GetStationById(id: number):Observable<Station>{
    return this.Http.post<Station>("/GetstationById",id);

  }
  public OngetAllStations(): Observable<Station[]>{
    let host=environment.host;
    return this.Http.post<Station[]>(host+"/inspecteurs/getstationbyowner",this.inspecEmail);

  }

  GetAllStations() {
    let host=environment.host;
    return this.Http.get<Station[]>(host+"/messtations/getStation");

  }
}
