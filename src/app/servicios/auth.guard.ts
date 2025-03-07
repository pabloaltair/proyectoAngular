import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');  // Asegúrate de guardar el rol en el localStorage

    // Verificar si el usuario está autenticado y tiene el rol de admin
    if (token && role === 'admin') {
      return true;  // Permitir el acceso
    }

    // Si no es admin, redirigir a la página de inicio
    this.router.navigate(['/inicio']);  // Puedes cambiar esta ruta si deseas redirigir a otro lugar
    return false;
  }
}
