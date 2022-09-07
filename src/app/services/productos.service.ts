import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoI } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any[] = [];
  filtro: productoI[] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos();

  }

  private cargarProductos(){

    this.http.get('https://angular--1-default-rtdb.firebaseio.com/productos-idx.json').subscribe((resp: any) => {

        this.productos = resp;

          this.cargando = false;

    });

  }

  getProducto(id: String){
    return this.http.get(`https://angular--1-default-rtdb.firebaseio.com/productos/${id}.json`)
  }
  
}
