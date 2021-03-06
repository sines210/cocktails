import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

import { HttpRequestsService } from '../../services/http-requests.service';
import { RandomList } from '../../models/randomList';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})


export class FolderPage implements OnInit {
  public folder:string;
  list:RandomList[];
  idDrink:string;
  id:string;
  category:string

  constructor(private activatedRoute: ActivatedRoute, private httpRequest: HttpRequestsService ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    

    this.httpRequest.getListCategories()
    .subscribe((res)=>{
	this.list = res['drinks'];
    })
  }

}
