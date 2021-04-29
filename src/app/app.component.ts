import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Status, Task } from './custom-types';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myHeader = 'header val';
  acceptLabel = 'accept label';
  noText = 'reject label'
  title = 'my-auth-app';

  @ViewChild('modalDialogContent') modalDialogContent!: ElementRef;
  taskList: Task[] = [ { id: 0, description: 'my task 1', status: Status.NEW, comment: '' } ];

  statuses: Status[] = [ Status.NEW, Status.STARTED, Status.IN_PROGRESS, Status.HOLD, Status.COMPLETED ];

  constructor(private translate: TranslateService,
    private employeeService: EmployeeService) {
    translate.addLangs(['en'])
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  addRow (index: number) {
    this.taskList.push({ id: this.taskList.length, description: 'New task', status: Status.NEW, comment: '' });
  }

  abc() {
    // alert('My button clicked!!!');
    // const el = document.createElement('div');
    // el.className = 'myWeiredClaadsdfrtgfh';
    // const dialog = document.createElement('sympl-modal');
    // dialog.setAttribute('header', 'myHeader');
    // dialog.setAttribute('header-icon', 'si-shield');
    // dialog.innerHTML = '<div slot="content">' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '</div>';
    // dialog.innerHTML += '<div slot="footer">' +'Footer' + '</div>';
    // el.appendChild(dialog);
    // const btn = document.createElement('sympl-primary-button');
    // btn.type = 'button';
    // btn.setAttribute('text', 'Open Modal');
    // /* btn.onclick = () => {
    //   dialog.open();
    // }; */
    // dialog.open();
    // el.appendChild(btn);

    // return el;

    this.modalDialogContent.nativeElement.open();
  }

}
