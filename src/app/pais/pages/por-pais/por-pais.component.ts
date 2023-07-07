import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    ` li {
      cursor: pointer;
    } `
  ]
})
export class PorPaisComponent {

  title: string = 'Pais';
  termino : string ='';
  hayError: boolean = false;
  paises  : Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;


  constructor ( private paisService: PaisService ) {}

  buscar( termino: string ) {

    this.mostrarSugerencias = false;
    if( termino.trim().length == 0){
      return;
    }

    this.hayError = false;
    this.termino  = termino;
    this.paisService.buscarPais( this.termino )
      .subscribe( (resp) => {

        this.paises = resp;

        this.termino = '';
      }, (err) => {

        this.paises = [];

        this.hayError = true;
      });
  }

  sugerencias ( termino: string ) {

    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisesSugeridos = [];

    if (termino.trim().length == 0){ return }

    this.paisService.buscarPais( termino )
      .subscribe((resp) => 
      this.paisesSugeridos = resp.splice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }

}
