import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
  comment: string;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  list: Task[] = [];
  text = '';

  constructor() { }

  ngOnInit(): void {
    const str = window.localStorage.getItem('list');
    if (str !== null) {
      this.list = JSON.parse(str) as Task[];
    }
  }

  public onAddItem() {
    this.list.push({ name: this.text, completed: false, comment: '' });
    this.text = '';
    window.localStorage.setItem('list', JSON.stringify(this.list));
  }

  public onCancelTask(task: Task) {
    const index = this.list.indexOf(task);
    if (index >= 0) {
      this.list.splice(index, 1);
      window.localStorage.setItem('list', JSON.stringify(this.list));
    }
  }
}
