import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from '../services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-detalle-crear-user',
  templateUrl: './detalle-crear-user.component.html',
  styleUrls: ['./detalle-crear-user.component.scss']
})
export class DetalleCrearUserComponent implements OnInit {

  formRegister: FormGroup;
  registrando: boolean = false;


  constructor(private userServices: UsuarioServices,
    private fb: FormBuilder,
    private alerta: MatSnackBar
  ){
     this.formRegister = this.fb.group({
    NOMBRE: [null, Validators.required],
    APELLIDO: [null, Validators.required],
    CORREO: [null, Validators.required],
    CONTRASENA: [null, Validators.required],
    ROL: [null, Validators.required],
    
  })
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.formRegister.invalid) {
      this.alerta.open("Faltan campos en el formulario", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
      return;
    }
  
    this.registrando = true;
    this.enviarForm();
  }


  enviarForm() {
    let nuevoUsuario = {
      Nombre: this.formRegister.get('NOMBRE')?.value,
      Apellido: this.formRegister.get('APELLIDO')?.value,
      Email: this.formRegister.get('CORREO')?.value,
      Password: this.formRegister.get('CONTRASENA')?.value,
      rol: this.formRegister.get('ROL')?.value
    };
  
    this.userServices.registrarUsuario(nuevoUsuario).subscribe(
      res => {
        this.registrando = false;
        this.formRegister.reset();
        this.alerta.open("Usuario registrado correctamente", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
      },
      error => {
        console.log(error); 
        this.registrando = false;
        this.formRegister.reset();
        this.alerta.open("Usuario ya existente", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
      }
    );
  }


}
