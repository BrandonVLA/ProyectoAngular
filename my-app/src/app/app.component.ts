import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoFormularioComponent } from './producto-formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [ProductoFormularioComponent]
})
export class AppComponent {
  title = 'my-app';
}
