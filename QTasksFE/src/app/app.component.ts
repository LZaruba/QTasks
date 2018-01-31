import { Component, OnInit } from '@angular/core';
import { Store } from 'redux';
import { qTaskApp } from './reducers/task.reducer';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TaskActions } from './actions/task-actions';
import { TasksAPIService } from './api/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tasks;
  constructor(
    ngRedux: NgRedux<any>,
    private taskSrv: TasksAPIService,
    devTools: DevToolsExtension,
    private actions: TaskActions) {
      ngRedux.configureStore(
        qTaskApp,
        null,
        null,
        devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }

  ngOnInit() {
    this.tasks = this.taskSrv.getAll();
  }
}
