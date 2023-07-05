import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  title: string = 'Pais';
  termino : string ='';
  hayError: boolean = false;
  paises  : Country[] = [];


  constructor ( private paisService: PaisService ) {}

  buscar( termino: string ) {

    if( termino.trim().length == 0){
      return;
    }

    this.hayError = false;
    this.termino  = termino;
    this.paisService.buscarPais( this.termino )
      .subscribe( (resp) => {
        console.log( resp );

        this.paises = resp;

        this.termino = '';
      }, (err) => {

        this.paises = [];

        this.hayError = true;
      });
  }

  sugerencias ( termino: string ) {
    this.hayError = false;
    // TODO: agg sugerencias
  }

}
