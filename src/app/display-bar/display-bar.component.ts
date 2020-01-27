import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ReposService} from '../repos.service'
@Component({
  selector: 'app-display-bar',
  templateUrl: './display-bar.component.html',
  styleUrls: ['./display-bar.component.scss']
})
export class DisplayBarComponent implements OnInit {
  constructor(private reposService:ReposService ) { }
  ngOnInit() {
  }
  changeDisplay(value:string){
    this.reposService.setDisplay(value);
  }
}
