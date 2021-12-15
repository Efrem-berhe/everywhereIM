import { Component, OnInit } from '@angular/core';
import { EverywhereIMMService, Users} from 'src/app/services/everywhere-imm.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  users$: Users[] = [];
  userData$: [];
  constructor(private everywhereIM: EverywhereIMMService) {}

  ngOnInit(){
    this.everywhereIM.findAll().then((res) =>{
      //this.dataArray = res.data;
      this.userData$ = res.data;
      console.log(this.userData$);
    });
  }

}
