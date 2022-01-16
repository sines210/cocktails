import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';

import { RandomList } from '../models/randomList';



@Injectable({
  providedIn: 'any'
})


export class HttpRequestsService {

  constructor(private http:HttpClient) {}

  	getAllCocktailsRandom():Observable<RandomList[]>{
			 return this.http.get<RandomList[]>('https://the-cocktail-db.p.rapidapi.com/randomselection.php',
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": "29e104d4a7mshb365983abdb823ap1b0fa8jsn456511362ded"}
		      })  		      	  
  		   }



  	getCocktail(id:string):Observable<RandomList[]>{
			 return this.http.get<RandomList[]>(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`,
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": "29e104d4a7mshb365983abdb823ap1b0fa8jsn456511362ded"}
		      })  		      	  
  		   }


  	getListCategories():Observable<RandomList[]>{
			 return this.http.get<RandomList[]>(`https://the-cocktail-db.p.rapidapi.com/list.php?c=list`,
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": "29e104d4a7mshb365983abdb823ap1b0fa8jsn456511362ded"}
		      })  		      	  
  		   }

		   		   
  	getListByCategory(id:string):Observable<RandomList[]>{
			 return this.http.get<RandomList[]>(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${id}`,
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": "29e104d4a7mshb365983abdb823ap1b0fa8jsn456511362ded"}
		      })  		      	  
  		   }



}
