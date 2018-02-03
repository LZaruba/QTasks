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

  public isMyTasks(task: any): boolean {
    let result = false;
    if (this.contains(task.types, 'my_tasks')) {
      result = true;
    }
    return result;
  }

  public isOverDueTasks(task: any): boolean {
    let result = false;
    if (this.contains(task.types, 'overdue')) {
      result = true;
    }
    return result;
  }

  public isAllTasks(task: any): boolean {
    let result = false;
    if (this.contains(task.types, 'alltasks')) {
      result = true;
    }
    return result;
  }

  public contains(types: string[], type: string): boolean {
    let result = false;
    const index = types.findIndex(elem => elem.toLowerCase() === type.toLowerCase());
    if (index !== -1) {
      result = true;
    }
    return result;
  }
}
