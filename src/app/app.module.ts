import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DisplayBarComponent } from './display-bar/display-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LineReposComponent } from './line-repos/line-repos.component';
import { BlockReposComponent } from './block-repos/block-repos.component';
import { MyListComponent } from './my-list/my-list.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {
    path: 'search',
    component: SearchBoxComponent
  },
  {
    path: 'my-list',
    component: MyListComponent
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    DisplayBarComponent,
    SearchBoxComponent,
    LineReposComponent,
    BlockReposComponent,
    MyListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
