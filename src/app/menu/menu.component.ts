import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../servicios/usuario.service';
import {  RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule,RouterLink]
})
export class MenuComponent {

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');  // Eliminar el token de localStorage
    this.router.navigate(['login']);  // Redirigir al login
  }

  constructor(private router: Router) {}
}
