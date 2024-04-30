import { Component, OnInit } from '@angular/core';
import { Peliculaservices } from '../services/peliculas.service';
import { UsuarioServices } from '../services/usuarios.service';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.scss']
})
export class FavoritasComponent implements OnInit {



  email: string  = "";
  nombreUsuario: string  = "";
  peliculasFavoritas: any[] = [];

  constructor(private PeliculaServices: Peliculaservices,
    private UserServices:UsuarioServices,
    private router: Router,
    public dialog: MatDialog
  ){}





  ngOnInit(): void {

    this.email = localStorage['email'];
    this.nombreUsuario = localStorage['nombre'];


    console.log(this.email);


    this.traerFavoritas();
    

    
  }


  traerFavoritas() {
    this.UserServices.obtenerPeliculasFavoritas(this.email).subscribe(
      res => {
        // Iterar sobre las películas favoritas y buscar detalles por nombre
        for (const pelicula of res) {
          this.PeliculaServices.buscarPeliculaPorNombre(pelicula).subscribe(
            detalle => {
              // Agregar detalles de la primera película a la lista
              if (detalle.length > 0) {
                this.peliculasFavoritas.push(detalle[0]); // Agregar solo el primer resultado encontrado
                
                
              }
            },
            err => {
              console.error(err);
            }
          );
        }
      },
      err => {
        console.error(err);
      }
    );
  }


  mostrarDetalle(pelicula: any): void {
    const dialogRef = this.dialog.open(DetallePeliculaComponent, {
      width: '500px',
      data: {
        ...pelicula,
        origen: 'favoritas' // Agrega un campo "origen" con el valor "favoritas"
      }
    });
  }

  

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  redirigirAdminUsuarios(): void {
    this.router.navigate(['/inicio']);
  }



}
