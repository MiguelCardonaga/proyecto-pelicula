import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  // email: string = 'adrenalina@gmail.com';
  // contrasena: string = '1234';

  logueando: boolean = false;

  constructor(
    private userServices: UsuarioServices,
    private fb: FormBuilder,
    private alerta: MatSnackBar,
    private router: Router
  ){
    this.formLogin = this.fb.group({
      CORREO: [null, Validators.required],
      CONTRASENA: [null, Validators.required],
      
    })
  }
  ngOnInit(): void {
   

  }

  submitForm(): void {
    if (this.formLogin.invalid) {
      this.alerta.open("Faltan campos en el formulario", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
      return;
    }
  
   this,this.logueando = true
    this.login();
  }

  
  login(){

    let email = this.formLogin.get('CORREO')?.value
    let contrasena = this.formLogin.get('CONTRASENA')?.value


    this.userServices.obtenerUsuario(email, contrasena).subscribe(
      res =>{
        console.log(res[0]);
        this.logueando = false;
        this.formLogin.reset();
        
        localStorage.setItem('email', res[0].Email);
        localStorage.setItem('rol', res[0].rol);
        localStorage.setItem('nombre', res[0].Nombre);

        this.router.navigate(['inicio']);
        
        
        
      },
      error => {
        console.log(error); 
        this.logueando = false
        this.formLogin.reset();
        this.alerta.open("Usuario o contraseña incorrecta", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
      }
    )
  }

}
