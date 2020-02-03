import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
export interface Repositories {
  id: number;
  name: string;
  watchers: number;
  language: string;
  description: string;
  like: boolean;
  tag: string;
}
@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private $ChangeRepos = new Subject<any>();
  private $ChangeMyList = new Subject<any>();
  private $ChangeDisplay = new Subject<any>();
  constructor() { }
  repos: Repositories [] = [];
  myList: Repositories [] = [];
  display = 'block';
  viewIndex = 4;

  setRepos(e) {
    return fetch(`https://api.github.com/search/repositories?q=${e.tag}+language:${e.language}`)
        .then(res => res.json())
        .then(data => {
             this.repos = data.items.map(item => {
              let likeRep;
              this.myList.forEach(listitem => {
                 likeRep = (listitem.id === item.id) ? true : false;
               });
              return {
                id: item.id,
                name: item.name,
                watchers: item.watchers,
                language: item.language,
                description: item.description,
                like: likeRep,
                tag: e.tag
              };
            });
             this.$ChangeRepos.next(this.repos);
        });
  }
  getRepos(): Subject <Repositories[]> {
    return this.$ChangeRepos;
  }
  getMyList(): Subject <Repositories []> {
      return this.$ChangeMyList;
  }
  setDisplay(value): void {
    this.display = value;
    this.$ChangeDisplay.next(this.display);
  }
  getDispaly() {
    return this.$ChangeDisplay;
  }
  changeLike(id: number): void {
    this.repos.forEach((repos) => {
      if (repos.id === id) {
        repos.like = !repos.like;
        if (repos.like) {
        this.myList.push(repos);
      } else if (!repos.like) {
        this.myList.forEach((item, index) => {
          if (item.id === id) {
            this.myList.splice(index, 1);
          }

        });
      }
    }
    });
    this.myList.forEach( (item, index) => {
      if (item.id === id && !this.repos.includes(item)) {
        this.myList.splice(index, 1);
      }
    });
    this.$ChangeRepos.next(this.repos);
    this.$ChangeMyList.next(this.myList);
  }
  onRoute() {
    this.$ChangeRepos.next(this.repos);
    this.$ChangeMyList.next(this.myList);
    this.$ChangeDisplay.next(this.display);
  }
}
