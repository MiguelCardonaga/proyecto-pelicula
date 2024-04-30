import { Component, OnInit } from '@angular/core';
import { Peliculaservices } from '../services/peliculas.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {


  rol: string = '';
  peliculas: any[] = [];
  nombreUsuario: string | null = null;
  terminoBusqueda: string = '';

  constructor(
    private peliculaServices: Peliculaservices,
    private router: Router,
    public dialog: MatDialog


  ){
  }
  
  ngOnInit(): void {

    
    this.rol = localStorage['rol'].toString();
    this.nombreUsuario = localStorage['nombre'];
    
    this.cargarPeliculas()
   
  }

 

  buscarPelicula(): void {
    // Verificar si el término de búsqueda está vacío
    if (this.terminoBusqueda.trim() === '') {
      // Si está vacío, cargar todas las películas nuevamente
      this.cargarPeliculas();
    } else {
      // Si no está vacío, buscar la película por nombre
      this.peliculaServices.buscarPeliculaPorNombre(this.terminoBusqueda).subscribe(
        res => {
          this.peliculas = res;
        },
        err => {
          console.error(err);
        }
      );
    }
  }


  cargarPeliculas(): void {
    // Cargar todas las películas
    this.peliculaServices.traerPeliculas().subscribe(
      res => {
        console.log(res);
        this.peliculas = res.results;
      },
      err => {
        console.error(err);
      }
    );
  }


  onEnter(): void {
    this.buscarPelicula();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }


  mostrarDetalle(pelicula: any): void {
    const dialogRef = this.dialog.open(DetallePeliculaComponent, {
      width: '500px',
      data: pelicula
    });
  }

  redirigirAdminUsuarios(): void {
    this.router.navigate(['/admin-users']);
  }

  redirigirFavoritos(): void {
    this.router.navigate(['/favoritos']);
  }

}
