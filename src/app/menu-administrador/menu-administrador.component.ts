import { Component } from '@angular/core';
import { ModificarUsuarioComponent } from "../modificar-usuario/modificar-usuario.component";
import { EliminarUsuarioComponent } from "../eliminar-usuario/eliminar-usuario.component";

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css'],
  imports: [ModificarUsuarioComponent, EliminarUsuarioComponent]
})
export class MenuAdministradorComponent {
  activeSection: string = 'modificar'; // Sección activa por defecto

  constructor() {}

  // Método para actualizar la sección activa
  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
