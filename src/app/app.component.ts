import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import { InicioComponent } from "./inicio/inicio.component";

@Component({
  selector: 'app-root',
  imports: [InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoAngular';
}
