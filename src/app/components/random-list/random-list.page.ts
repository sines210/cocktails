import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

import { RandomList } from '../../models/randomList';
import { HttpRequestsService } from '../../services/http-requests.service';


@Component({
  selector: 'app-random-list',
  templateUrl: './random-list.page.html',
  styleUrls: ['./random-list.page.scss'],
})
export class RandomListPage implements OnInit {
id: string;
list: RandomList[]



  constructor(private http: HttpRequestsService,  private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

      this.id = this.activatedRoute.snapshot.paramMap.get('id');

      this.http.getAllCocktailsRandom()
      .subscribe((res)=>{
	this.list = res['drinks'];
	console.log(res)
      })

  }



}
