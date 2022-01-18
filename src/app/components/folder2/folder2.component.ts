import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

import { HttpRequestsService } from '../../services/http-requests.service';
import { RandomList } from '../../models/randomList';


@Component({
  selector: 'app-folder2',
  templateUrl: './folder2.component.html',
  styleUrls: ['./folder2.component.scss'],
})
export class Folder2Component implements OnInit {

  constructor(private http: HttpRequestsService, private activatedRoute:ActivatedRoute) { }


id: string;
list: RandomList[];




  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');


    this.http.getListByCategory(this.id)
    .subscribe((res)=>{
	this.list = res['drinks'];
    })



  }



}
