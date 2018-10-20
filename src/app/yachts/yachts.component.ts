import { Component, OnInit } from '@angular/core';
import { Yacht } from '../../yacht';
import { YACHTS } from '../mock-yachts';

@Component({
  selector: 'app-yachts',
  templateUrl: './yachts.component.html',
  styleUrls: ['./yachts.component.scss']
})
export class YachtsComponent implements OnInit {

  constructor() { }

    yachts=YACHTS;
  
    ngOnInit() {
  }
    selectedHero: Yacht;
onSelect(yacht: Yacht): void {
  this.selectedHero = yacht;
}

}
