import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
import { QTasksMaterialModule } from './QTasksMaterial/QTasksMaterial.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TasksAPIService } from './api/service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TaskActions } from './actions/task-actions';

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    QTasksMaterialModule,
    NgReduxModule,
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [TasksAPIService, HttpClientModule, TaskActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
