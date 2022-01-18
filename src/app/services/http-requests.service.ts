import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';

import { RandomList } from '../models/randomList';



@Injectable({
  providedIn: 'any'
})


export class HttpRequestsService {

  constructor(private http:HttpClient) {}

/***Random List***/
  	getAllCocktailsRandom():Observable<RandomList[]>{
			 return this.http.get<RandomList[]>('https://the-cocktail-db.p.rapidapi.com/randomselection.php',
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": ""}
		      })  		      	  
  		   }

/***Cocktail By Id***/
  	getCocktail(id:string):Observable<RandomList[]>{
			 return this.http.get<RandomList[]>(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`,
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": ""}
		      })  		      	  
  		   }

/***Categories List***/
  	getListCategories():Observable<RandomList[]>{
			 return this.http.get<RandomList[]>(`https://the-cocktail-db.p.rapidapi.com/list.php?c=list`,
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": ""}
		      })  		      	  
  		   }

/***List by category chosen***/		   		   
  	getListByCategory(id:string):Observable<RandomList[]>{
			 return this.http.get<RandomList[]>(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${id}`,
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": ""}
		      })  		      	  
  		   }


/***Latest Cocktails List***/
  	getLatestCocktailsList():Observable<RandomList[]>{
			 return this.http.get<RandomList[]>(`https://the-cocktail-db.p.rapidapi.com/latest.php`,
		{
			 "headers": {
		      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		      "x-rapidapi-key": ""}
		      })  		      	  
  		   }

}
