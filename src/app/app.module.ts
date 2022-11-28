import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemDetails2Component } from './item-details2/item-details2.component';

const routes:Routes=[
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path:'todo',
    component: TodoComponent
  },
  {
    path: 'tasks',
    component: TodoComponent
  },
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path:'item-details/:itemid',
    component: ItemDetailsComponent

  },
  {
    path:'item-details2/:itemid',
    component: ItemDetails2Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    ItemListComponent,
    ItemDetailsComponent,
    ItemDetails2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
