import { Component } from '@angular/core';
import {  EverywhereIMMService } from 'src/app/services/everywhere-imm.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private everywhereIM: EverywhereIMMService) {}

  DeleteUser(): void{
    console.log('delete user has been called');
    this.everywhereIM.Delete();
    console.log('user has been deleted');
  }
}
