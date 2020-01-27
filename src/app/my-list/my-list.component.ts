import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {ReposService} from '../repos.service';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  viewIndex=4;
  display;
  repos=[];
  constructor(private reposService:ReposService ) {
  }
  
  ngOnInit() {
    this.reposService.getMyList().subscribe(data=>this.repos=data);
    this.reposService.getDispaly().subscribe(data=>this.display=data);
    this.reposService.onRoute();
  }

}
