import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InicioComponent } from './inicio/inicio.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { MatMenuModule } from '@angular/material/menu';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalleUserComponent } from './detalle-user/detalle-user.component';
import { DetalleCrearUserComponent } from './detalle-crear-user/detalle-crear-user.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    InicioComponent,
    FavoritasComponent,
    AdminUsersComponent,
    DetallePeliculaComponent,
    DetalleUserComponent,
    DetalleCrearUserComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    RouterLink,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
