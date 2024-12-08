import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello2Component } from './hello-2/hello-2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_project';
}
