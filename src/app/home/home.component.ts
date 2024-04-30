import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router
  ) {}
  ngOnInit(): void {


  }

  mostrarLogin = false;
  mostrarRegister = false;
  
  mostrarComponenteRegistro(): void {
    this.mostrarLogin = false;
    this.mostrarRegister = true;
  }

  mostrarComponenteLogin(): void {
    this.mostrarRegister = false;
    this.mostrarLogin = true;
  }


 

}
