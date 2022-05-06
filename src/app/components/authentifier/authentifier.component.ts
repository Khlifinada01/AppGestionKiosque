import {Component, Injectable, OnInit} from '@angular/core';
import {StationService} from '../../Services/station.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Station} from '../../model/Station';
import {Observable} from 'rxjs';
import {InspecteurService} from '../../Services/inspecteur.service';
import {Inspecteur} from '../../model/Inspecteur';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";



@Component({
  selector: 'app-authentifier',
  templateUrl: './authentifier.component.html',
  styleUrls: ['./authentifier.component.css']
})
export class AuthentifierComponent implements OnInit {
  station: Station[]= new Array();
  Http!: HttpClient;
  data: any;
  value: any;
  // @ts-ignore
  inspecteur : Inspecteur= new Inspecteur();

  form = new FormGroup({
    ramemberme: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(private http: HttpClient, private router: Router, private stationService: StationService
  ) {
  }

  ngOnInit(): void {
  }

  /*onGetInspecteur(id: string): void {
    this.inspecteurService.getAllInspecteursById(id)
      .subscribe((data) => this.inspecteur$ = data);
  }
  */

  public OngetAllStations(){
    this.stationService. inspecEmail=this.inspecteur.email;
      this.router.navigateByUrl("afficher");

  }
  public OnCreateInspecteur() {
    this.router.navigateByUrl("creation");
  }
}



