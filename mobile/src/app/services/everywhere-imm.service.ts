import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HttpResponse } from '@capacitor-community/http';
import { NavController } from '@ionic/angular';


export interface UserColor {
  user_id?: number;
  color: string;
  color_code: string;
}

export class UserColorService {

  private resourceUri = 'http://localhost:8000/api/Everywhereiam';
  constructor() {}
}

@Injectable({
  providedIn: 'root'
})
export class EverywhereIMMService {

  private resourceUri = 'http://localhost:8000/api/Everywhereiam';

  constructor(public route: Router) { }


  
  create(){ 

    console.log(this.resourceUri);
     const options = {
         url: 'http://localhost:8000/api/Everywhereiam',
         headers: { 'Content-Type': 'application/json'}
      };
      this.route.navigate(['/tabs/tabs/tab1']);
       return Http.post(options);

  }

  CollectUserColor(): Promise<HttpResponse> {
    const options = {
      url: 'http://localhost:8000/api/Everywhereiam/1',
      headers: { 'Content-Type': 'application/json'}
    }
    console.log('user colors has been featched');
    return Http.get(options);
  }

  Delete(){
    console.log('delete function from everywhere I am is called');
    const options = {
      url: 'http://localhost:8000/api/Everywhereiam/1',
      headers: { 'Content-Type': 'application/json'}
   };
   this.route.navigate(['']);
    return Http.del(options);


  }

 
}



