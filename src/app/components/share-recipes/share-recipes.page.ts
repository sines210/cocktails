import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { CrudService } from '../../services/crud.service';
import { Crud } from '../../models/crud';

@Component({
  selector: 'app-share-recipes',
  templateUrl: './share-recipes.page.html',
  styleUrls: ['./share-recipes.page.scss'],
})
export class ShareRecipesPage implements OnInit {

name: string;
type: string;
category:string;
crud: Crud[]; 


  constructor(private http:CrudService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

  }

  onSubmit(form:NgForm){
	this.crud = form.value
	console.log(this.crud)

	this.http.postFormService(this.crud)
	.subscribe((res)=>{
		console.log(res)
		alert("Votre recette a bien été envoyée pour publication")
		/*ici soit mettre une alerte ionic custom avec redirection a l'accueil ou a la recette pubiliee ou bien une alerte avec delay et redirection*/
		})


	}
	    
}
