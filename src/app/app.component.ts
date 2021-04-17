import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Status, Task } from './custom-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-auth-app';
  taskList: Task[] = [ { id: 0, description: 'my task 1', status: Status.NEW, comment: '' } ];

  statuses: Status[] = [ Status.NEW, Status.STARTED, Status.IN_PROGRESS, Status.HOLD, Status.COMPLETED ]

  constructor(private translate: TranslateService) {
    translate.addLangs(['en'])
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() { }

  addRow (index: number) {
    this.taskList.push({ id: this.taskList.length, description: 'New task', status: Status.NEW, comment: '' });
  }
}
