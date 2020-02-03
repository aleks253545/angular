import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ReposService} from '../repos.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  constructor(private reposService: ReposService) {
  }
  tagValue = '';
  languageValue = '';
  ngOnInit() {
  }
  sendInfo() {
    this.reposService.setRepos({tag: this.tagValue, language: this.languageValue});
  }

}
