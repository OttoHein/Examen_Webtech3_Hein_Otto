import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { QuestionService } from './question.service';

const appRoutes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent ],
  providers:    [ QuestionService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
