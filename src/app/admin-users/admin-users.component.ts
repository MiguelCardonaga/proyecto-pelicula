import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetalleUserComponent } from '../detalle-user/detalle-user.component';
import { DetalleCrearUserComponent } from '../detalle-crear-user/detalle-crear-user.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {


rol: string = '';
usuario: string = '';
nombreUsuario: string = '';
usuarios: any[] = [];

constructor(
  private router: Router,
  private userServices: UsuarioServices,
  public dialog: MatDialog){}

  ngOnInit(): void {

    this.usuario = localStorage['email'];
    this.rol = localStorage['rol'];
    this.nombreUsuario = localStorage['nombre'];

    this.traerUsuarios()

    
  }


  traerUsuarios(){

    this.userServices.traerUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res; 
        
      }
    )
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  redirigirAdminUsuarios(): void {
    this.router.navigate(['/inicio']);
  }

  mostrarDetalle(usuario: any): void {
    const dialogRef = this.dialog.open(DetalleUserComponent, {
      width: '500px',
      data: usuario
    });
  }

  mostrarDetalleCrear(): void {
    const dialogRef = this.dialog.open(DetalleCrearUserComponent, {
      width: '500px'
    });
  }

  eliminarUsuario(email: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: '¿Estás seguro de que deseas eliminar este usuario?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // El usuario confirmó la eliminación, aquí puedes realizar la acción
        this.userServices.eliminarUsuario(email).subscribe(
          res => {
            console.log(res);
            // Vuelve a cargar la lista de usuarios después de eliminar uno
            this.traerUsuarios();
            // Puedes agregar aquí cualquier lógica adicional, como mostrar un mensaje de éxito
          },
          error => {
            console.error(error);
            // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
          }
        );
      }
    });
  }
}
