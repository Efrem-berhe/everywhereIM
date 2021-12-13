import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { EverywhereIMMService, UserColor, UserColorService} from 'src/app/services/everywhere-imm.service';

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
    
    console.log(this.everywhereIM.CollectUserColor().then((res) =>{

      console.log(this.userColors$ = res.data);
    } )
    );
  }
}


