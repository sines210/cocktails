import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';

import { Crud } from '../models/crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


constructor(private http: HttpClient) {}
 

/* methode ngForm
   	   postFormService(crud:any):Observable<any>{
	     return this.http.post('http://localhost:3000/index.php',crud, { responseType:'text'} )
	}*/


	postFormService(formData:FormData):Observable<any>{
		return this.http.post('http://localhost:3000/index.php', formData, {responseType:'text'})
	}


}
