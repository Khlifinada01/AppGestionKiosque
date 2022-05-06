import { Component, OnInit } from '@angular/core';
import {Inspecteur} from "../../model/Inspecteur";
import {InspecteurService} from "../../Services/inspecteur.service";
@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
inspecteur : Inspecteur=new Inspecteur();
  constructor(private inspecteurService : InspecteurService) { }

  ngOnInit(): void {
  }
  public OnCreateInspecteur() {
    if (this.inspecteur.email!=null && this.inspecteur.DateRecrutement!=null) {
      this.inspecteurService.OnCreateInspecteur(this.inspecteur).subscribe(data=> {
        if (data!=null) {
          alert("inscription réussie")}
        else {
          alert("inscription échouée");
        }
      },error => alert("problem de connexion avec la base de donnée"));
    }
    else {
      alert("email ou date ne doit pas etre null !!")
    }
  }



  }
