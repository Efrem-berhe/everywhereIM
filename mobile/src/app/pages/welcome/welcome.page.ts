import { Component, OnInit } from '@angular/core';
import {  EverywhereIMMService } from 'src/app/services/everywhere-imm.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  datauser: any;
  constructor(private everywhereIM: EverywhereIMMService) {
   }

  ngOnInit() {
    
  }

CreateUsers(): void{
  console.log('create users button clicked');
  this.everywhereIM.create();
  console.log('create user called');

}

}
