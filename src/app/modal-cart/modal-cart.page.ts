import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.page.html',
  styleUrls: ['./modal-cart.page.scss'],
})
export class ModalCartPage implements OnInit {

      /* @Input() title: string;
       @Input() article: number;
       @Input() total: number;
       @Input() submit: string;*/

       articles: number=0;
       total:  number=0;

  constructor() { }

  ngOnInit() {

	 this.articles++;
	 this.total = this.total + 10
  	     
  }

	addArticle(){
	  this.articles++;
	  this.total = this.total + 10 
	}

	
	removeArticle(){
	  this.articles--;
	  this.total = this.total - 10;
	}

}
