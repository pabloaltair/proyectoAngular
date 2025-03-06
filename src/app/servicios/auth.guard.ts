import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    // Verificamos si el token es 'admin' o 'usuario' (puedes expandir esto a algo más seguro)
    if (token === 'admin' || token === 'usuario') {
      return true; // El usuario está autenticado y tiene el rol adecuado
    }

    // Redirigimos al login si no está autenticado
    this.router.navigate(['/inicio-sesion']);
    return false;
  }
}
