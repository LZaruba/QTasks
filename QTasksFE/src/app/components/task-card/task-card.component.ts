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
  public arrow: string;
  public color: string;

  constructor() { }

  ngOnInit() {
  }

  getArrow() {
    let result = 'arrow_downward';
    if (this.type === 'critical') {
      result = 'arrow_upward';
    } else if (this.type === 'low') {
      result = 'arrow_downward';
    } else if (this.type === 'normal') {
      result = 'arrow_drop_down';
    }
    return result;
  }

  getColor() {
    let result = 'accent';
    if (this.type === 'critical') {
      result = 'warn';
    } else if (this.type === 'other') {
      result = 'accent';
    } else if (this.type === 'normal') {
      result = 'primary';
    }
    return result;
  }

}
