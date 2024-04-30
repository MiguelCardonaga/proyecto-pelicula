import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';


@Injectable({
    providedIn: 'root'
  })

  export class Peliculaservices {

    constructor(private http: HttpClient){

    }

    traerPeliculas(): Observable<any>{
        return this.http.get(`${baseURL}/ApiPeliculas/ListarPeliculas`);
    }

    buscarPeliculaPorNombre(nombre: string): Observable<any[]> {
      return this.http.get<any[]>(`${baseURL}/ApiPeliculas/BuscarPelicula?nombre=${nombre}&limit=3`);
    }

    eliminarPeliculaFavorita(usuario: string, pelicula: string): Observable<any> {
      return this.http.delete<any>(`${baseURL}/ApiPeliculas/EliminarPeliculaFavorita?usuario=${usuario}&fav_pelicula=${pelicula}`);
    }

  }