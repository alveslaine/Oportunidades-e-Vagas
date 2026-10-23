import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vaga } from './vaga/vaga';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Vaga],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');


}
