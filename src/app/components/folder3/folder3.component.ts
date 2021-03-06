import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { ModalController, NavParams } from '@ionic/angular';

import { ModalCartPage } from '../modal-cart/modal-cart.page';
import { HttpRequestsService } from '../../services/http-requests.service';
import { RandomList } from '../../models/randomList';


@Component({
  selector: 'app-folder3',
  templateUrl: './folder3.component.html',
  styleUrls: ['./folder3.component.scss'],
})

export class Folder3Component implements OnInit {

  constructor(private http: HttpRequestsService, private activatedRoute:ActivatedRoute, public modalController:ModalController) { }


id: string;
list: RandomList[];
/*modalOptions: ModalOptions[];*/



  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.getCocktail(this.id)
    .subscribe((res)=>{
	this.list = res['drinks'][0];
    })

  }


/*
  async presentModal(){
  	const modal = await this.modalController.create({
	      	 component: ModalCartPage,
		 cssClass: 'my-custom-class',
		 componentProps: {
		 	'title': 'Panier',
			'article': 0,
			'total': 0,
			'submit': 'Payer'
		 }
	      });
	     
	      return await modal.present();
	}*/


}
