import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/productosCompletos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {};
  id: string = '';

  constructor( private route: ActivatedRoute,
    public productoService: ProductosService  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(paramtros => {
        //console.log(paramtros['id']);
        this.productoService.getProducto(paramtros['id'])
              .subscribe( (producto: ProductoDescripcion) =>{
                console.log(producto);
                this.id = paramtros['id'];
                this.producto = producto;

              });
    });

  }

}
