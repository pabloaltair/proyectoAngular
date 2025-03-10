import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarUsuarioComponent } from "../modificar-usuario/modificar-usuario.component";
import { EliminarUsuarioComponent } from "../eliminar-usuario/eliminar-usuario.component"; // Importa CommonModule aquí
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';
@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css'],
  standalone: true,  // Asegúrate de que sea un standalone component
  imports: [CommonModule, ModificarUsuarioComponent, EliminarUsuarioComponent,ListaUsuariosComponent] // Asegúrate de importar CommonModule aquí
})
export class MenuAdministradorComponent {
  
  // Variables que controlan la visibilidad de los formularios
  isModificarVisible = false;
  isEliminarVisible = false;

  // Método para alternar la visibilidad del formulario de modificar usuario
  toggleModificar() {
    this.isModificarVisible = !this.isModificarVisible;
    this.isEliminarVisible = false; // Cerrar el otro componente si está abierto
  }

  // Método para alternar la visibilidad del formulario de eliminar usuario
  toggleEliminar() {
    this.isEliminarVisible = !this.isEliminarVisible;
    this.isModificarVisible = false; // Cerrar el otro componente si está abierto
  }
}
