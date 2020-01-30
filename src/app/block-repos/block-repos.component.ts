import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Repositories,ReposService} from '../repos.service';

@Component({
  selector: 'app-block-repos',
  templateUrl: './block-repos.component.html',
  styleUrls: ['./block-repos.component.scss']
})
export class BlockReposComponent implements OnInit {
  @Input() item:Repositories;
  constructor(private reposService:ReposService ) { }

  ngOnInit() {
  }
  onChangeLike(id):void{
    this.reposService.changeLike(id);
  }
}
