import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

import { RandomList } from '../models/randomList';
import { HttpRequestsService } from '../services/http-requests.service';



@Component({
  selector: 'app-folder4',
  templateUrl: './folder4.page.html',
  styleUrls: ['./folder4.page.scss'],
})



export class Folder4Page implements OnInit {

id:string;
list:RandomList[];


  constructor(private http: HttpRequestsService,  private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

      this.id = this.activatedRoute.snapshot.paramMap.get('id');

      this.http.getAllCocktailsRandom()
      .subscribe((res)=>{
	this.list = res['drinks'];
      })

  }


}
