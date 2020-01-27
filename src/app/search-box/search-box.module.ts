import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DisplayBarComponent } from '../display-bar/display-bar.component';
import {LineReposComponent} from '../line-repos/line-repos.component';
import {BlockReposComponent}from '../block-repos/block-repos.component';
import {SearchBarComponent} from '../search-bar/search-bar.component'

@NgModule({
  declarations: [
    DisplayBarComponent,
    LineReposComponent,
    BlockReposComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }
