import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() public title;
  @Input() public project;
  @Input() public due;
  @Input() public type;

  constructor() { }

  ngOnInit() {
  }

  getArrow() {
    let result = 'arrow_downward';
    if (this.type === 'critical') {
      result = 'arrow_upward';
    } else if (this.type === 'other') {
      result = '';
    }
    return result;
  }

  getColor() {
    let result = 'accent';
    if (this.type === 'critical') {
      result = 'warn';
    } else if (this.type === 'other') {
      result = '';
    }
    return result;
  }

}
