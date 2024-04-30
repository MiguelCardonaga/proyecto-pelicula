import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { DetalleUserComponent } from './detalle-user/detalle-user.component';
import { DetalleCrearUserComponent } from './detalle-crear-user/detalle-crear-user.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir la ruta vacía a "inicio"
  { path: 'home', component: HomeComponent }, // Aplicar el guardia a todas las rutas
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'detalle', component: DetallePeliculaComponent, canActivate: [AuthGuard] },
  { path: 'admin-users', component: AdminUsersComponent, canActivate: [AuthGuard] },
  { path: 'detalle-front', component: DetalleUserComponent, canActivate: [AuthGuard] },
  { path: 'detalle-crear', component: DetalleCrearUserComponent, canActivate: [AuthGuard] },
  { path: 'favoritos', component: FavoritasComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
