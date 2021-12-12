import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HttpResponse } from '@capacitor-community/http';
import { NavController } from '@ionic/angular';


export interface EverywhereIMM {
  id?: number;
  titile: string;
  completed: boolean;
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


 
}



