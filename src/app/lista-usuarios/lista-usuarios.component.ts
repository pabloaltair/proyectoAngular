import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // 👈 Agregar HttpClientModule
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [UsuarioService] // 👈 Proveer el servicio aquí también
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.obtenerTodosLosUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
        console.log('Usuarios cargados:', data);
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
