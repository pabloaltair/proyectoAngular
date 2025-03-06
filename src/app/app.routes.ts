import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';

export const routes: Routes = [ 
    { path: 'inicio', component: InicioComponent},
    { path: '', component: InicioComponent},
    { path: 'login', component: InicioSesionComponent },
    { path: 'registro', component: RegistrarUsuarioComponent },
    { path: 'eliminar', component: EliminarUsuarioComponent },
    { path: 'modificar', component: ModificarUsuarioComponent },
    { path: 'menuAdmin', component: MenuAdministradorComponent }
    
];
