import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagona-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargarInfo = false;

  constructor( private http: HttpClient) { 

    //leer archivo json
    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) =>{

          this.cargarInfo = true;
          this.info = resp;

          //console.log(resp.Nombre_corto);
          
      });

  }
}
