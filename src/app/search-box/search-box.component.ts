import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {ReposService} from '../repos.service';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  viewIndex=4;
  display;
  repos=[];
  constructor(private reposService:ReposService ) {
  }
  
  ngOnInit() {
    this.reposService.getRepos().subscribe(data=>this.repos=data);
    this.reposService.getDispaly().subscribe(data=>this.display=data);
    this.reposService.onRoute();
  }

}
