import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { AuthGuard } from './servicios/auth.guard';

export const routes: Routes = [ 
    { path: 'inicio', component: InicioComponent },
    { path: '', component: InicioComponent }, // Ruta inicial
    { path: 'login', component: InicioSesionComponent },
    { path: 'registro', component: RegistrarUsuarioComponent },
    { path: 'eliminar', component: EliminarUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'modificar', component: ModificarUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'menuAdmin', component: MenuAdministradorComponent, canActivate: [AuthGuard] }, // Ruta protegida
    { path: '**', redirectTo: '/inicio' }  // Ruta wildcard
  ];
  
