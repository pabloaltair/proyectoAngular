import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';

export const routes: Routes = [ 
    { path: '', component: InicioComponent},
    { path: 'login', component: InicioSesionComponent },
    { path: 'registro', component: RegistrarUsuarioComponent },
    { path: 'menuAdmin', component: MenuAdministradorComponent },
    { path: "**", redirectTo: "home" }
    
];
