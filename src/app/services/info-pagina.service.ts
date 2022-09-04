import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagona-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargarInfo = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) { 

    this.cargarInfor();

    this.cargarEquipo();
  }


  private cargarInfor(){

    //leer archivo json
    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) =>{

      this.cargarInfo = true;
      this.info = resp;

      //console.log(resp.Nombre_corto);
      
  });

  }

  private cargarEquipo(){


      this.http.get('https://angular--1-default-rtdb.firebaseio.com/equipo.json').subscribe( (resp: any) =>{

        this.equipo = resp;
  
        //console.log(resp);
        
    });
  }
}
