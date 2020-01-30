import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {ReposService} from '../repos.service'
@Component({
  selector: 'app-line-repos',
  templateUrl: './line-repos.component.html',
  styleUrls: ['./line-repos.component.scss']
})
export class LineReposComponent implements OnInit {
  @Input() item;
  constructor(private reposService:ReposService ) { }

  ngOnInit() {
  }
  clickLike(id:Number):void{
    this.reposService.changeLike(id)
  }
}
