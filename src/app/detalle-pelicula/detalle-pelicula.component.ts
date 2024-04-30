import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioServices } from '../services/usuarios.service';
import { Peliculaservices } from '../services/peliculas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  pelicula: any;
  detalle: any;
  


  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private userServices:UsuarioServices,
  private alerta: MatSnackBar,
  private peliculaServices:Peliculaservices) {
    this.pelicula = data;
  }


  ngOnInit(): void {

    this.detalle = this.pelicula.origen
    
    console.log(this.pelicula);
    console.log(localStorage);
    
   
  }


  agregarPeliculaFavorita(pelicula: any): void {

    let PeliculaFavorita = {
      usuario: localStorage['email'],
      fav_pelicula: this.pelicula.title,
  
    };


    
    this.userServices.agregarPeliculaFavorita(PeliculaFavorita).subscribe(
      response => {
        console.log('Película agregada a favoritas:', response);
        this.alerta.open("Pelicula agregada a Favoritas", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
        

      },
      error => {
        console.error('Error al agregar la película a favoritas:', error);
        this.alerta.open("Ya has agregado esta pelicula a Favoritas", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });

      }
    );
  }

  eliminarPeliculaFavorita(pelicula: any): void {
    let PeliculaFavorita = {
      usuario: localStorage['email'],
      fav_pelicula: this.pelicula.title,
    };

    this.peliculaServices.eliminarPeliculaFavorita(PeliculaFavorita.usuario, PeliculaFavorita.fav_pelicula).subscribe(
      response => {
        console.log('Película eliminada de favoritas:', response);
        this.alerta.open("Pelicula eliminada de Favoritas", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
        
      },
      error => {
        console.error('Error al eliminar la película de favoritas:', error);
        this.alerta.open("Error al eliminar la película de Favoritas", '', { verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['snackbar'], duration: 5000 });
      }
    );
  }

}
