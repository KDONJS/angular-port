import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  anio: number = new Date().getFullYear();
  nombre: string = 'Kdon theme';
  email: string = 'qyyorlinP@gmail.com';
  brand: string = 'Kdon';

  constructor() { }

  ngOnInit(): void {
  }

}
