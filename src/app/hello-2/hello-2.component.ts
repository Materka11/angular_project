import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-hello-2',
  imports: [UserComponent],
  templateUrl: './hello-2.component.html',
  styleUrl: './hello-2.component.scss',
})
export class Hello2Component {
  name = 'Arek';
  isShow = false;
  users: User[] = [
    {
      name: 'Jan',
      age: 13,
      src: 'https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jan',
      age: 13,
      src: 'https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jan',
      age: 13,
      src: 'https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jan',
      age: 13,
      src: 'https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jan',
      age: 13,
      src: 'https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  isEditable = true;
  toggle() {
    this.isShow = !this.isShow;
  }
}
