import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Agrega la clase que define el fondo deseado al body
    this.renderer.addClass(document.body, 'login-background');
  }

  ngOnDestroy(): void {
    // Remueve la clase cuando el componente se destruye
    this.renderer.removeClass(document.body, 'login-background');
  }
}
