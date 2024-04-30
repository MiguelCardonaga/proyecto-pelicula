import { Component, Input, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioServices } from '../services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.scss']
})
export class DetalleUserComponent implements OnInit {


  usuario: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userServices:UsuarioServices,
    private alerta: MatSnackBar) {
      this.usuario = data;
    }



  ngOnInit(): void {

  }


  actualizarUsuario(): void {
    this.userServices.actualizarUsuario(this.usuario).subscribe(
      response => {
        console.log(response);
        this.alerta.open('Usuario actualizado exitosamente', 'Cerrar', { duration: 3000 });
      },
      error => {
        
        console.error(error);
        this.alerta.open('Error al actualizar usuario', 'Cerrar', { duration: 3000 });
      }
    );
  }

}
