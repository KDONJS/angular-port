import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoI } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any[] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos();

  }

  private cargarProductos(){

    this.http.get('https://angular--1-default-rtdb.firebaseio.com/productos-idx.json').subscribe((resp: any) => {

        //console.log(resp);
        this.productos = resp;

          this.cargando = false;

    });

  }
}
