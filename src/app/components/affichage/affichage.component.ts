import { Component, OnInit } from '@angular/core';
import {Station} from "../../model/Station";
import {StationService} from "../../Services/station.service";

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
station : Station[]= new Array();

  constructor(private stationService:StationService) { }

  ngOnInit(): void {
   this.OngetAllStations();
  }
  public OngetAllStations(){
    this.stationService.OngetAllStations().subscribe(data=>{

        this.station= data;
    } , error => alert(" pas d acces à la bd"))
  }
}
