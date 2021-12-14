import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { EverywhereIMMService, UserColor} from 'src/app/services/everywhere-imm.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  userColors$: UserColor[] = [];

  constructor(private everywhereIM: EverywhereIMMService) {

    console.log('ChildComponent:Constructor');
  }

  ngOnInit() {
    
    console.log('ChildComponent:OnInit');
    
    this.everywhereIM.CollectUserColor().then((res) =>{
      //this.dataArray = res.data;
      this.userColors$ = res.data;
      //console.log(this.userColors$ = res.data);
    });
  }


}


