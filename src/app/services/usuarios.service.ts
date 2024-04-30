import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';


@Injectable({
    providedIn: 'root'
  })

  
  export class UsuarioServices {

    constructor(private http: HttpClient){

    }

    traerUsuarios(): Observable<any>{
        return this.http.get(`${baseURL}/Usuarios/ListarUsuarios`);
    }

    obtenerUsuario(email: string, contrasena: string): Observable<any> {
      return this.http.get(`${baseURL}/Usuarios/GetUsuario?email=${email}&contrasena=${contrasena}`);
    }
 

    registrarUsuario(nuevoUsuario: any): Observable<any> {
      return this.http.post(`${baseURL}/Usuarios/RegistrarUsuario`, nuevoUsuario);
    }

    agregarPeliculaFavorita(PeliculaFavorita: any): Observable<any> {
      return this.http.post(`${baseURL}/Usuarios/PeliculaFavorita`, PeliculaFavorita);
    }

    obtenerPeliculasFavoritas(usuario: string): Observable<any> {
      return this.http.get(`${baseURL}/Usuarios/PeliculasFavoritas/${usuario}`);
    }

    actualizarUsuario(usuarioActualizar: any): Observable<any> {
      return this.http.put(`${baseURL}/Usuarios/ActualizarUsuario`, usuarioActualizar);
    }

    eliminarUsuario(email: string): Observable<any> {
      return this.http.delete(`${baseURL}/Usuarios/EliminarUsuario?email=${email}`);
    }

  }