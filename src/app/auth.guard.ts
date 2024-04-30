import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('email')) {
      // Si hay datos necesarios en el localStorage, permitir la navegación
      return true;
    } else {
      // Si no hay datos, redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/home']);
      return false;
    }
  }
}