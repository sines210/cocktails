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
formData: FormData;


  constructor(private http:CrudService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

  }

/*  onSubmit(form:NgForm){
	this.crud = form.value
	console.log(this.crud)

	this.http.postFormService(this.crud)
	.subscribe((res)=>{
		console.log(res)
		alert("Votre recette a bien été envoyée pour publication")
		})


	}*/


 onSubmit(name:string, type:string, category:string, instructions:string, ingredient1:string, ingredient2:string, ingredient3:string, ingredient4:string, ingredient5:string, ingredient6:string){
	this.formData = new FormData();
	this.formData.append('name', name);
	this.formData.append('type', type);
	this.formData.append('category', category);
	this.formData.append('instructions', instructions);
	this.formData.append('ingredient1', ingredient1);
	this.formData.append('ingredient2', ingredient2);
	this.formData.append('ingredient3', ingredient3);
	this.formData.append('ingredient4', ingredient4);
	this.formData.append('ingredient5', ingredient5);
	this.formData.append('ingredient6', ingredient6);

	this.http.postFormService(this.formData)
	.subscribe((res)=>{
		console.log(res)
		alert("Votre recette a bien été envoyée pour publication")
		/*ici soit mettre une alerte ionic custom avec redirection a l'accueil ou a la recette pubiliee ou bien une alerte avec delay et redirection*/
		})


	}


}
