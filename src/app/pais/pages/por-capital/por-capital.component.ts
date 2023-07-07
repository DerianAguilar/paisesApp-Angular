import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino  : string    = '';
  title    : string    = 'Capital';
  hayError : boolean   = false;
  paises   : Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor ( private paisService: PaisService ) {}

  buscar( termino: string ) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    if( termino.trim().length == 0 ){
      return;
    }

    this.paisService.buscarCapital( this.termino )
      .subscribe( (resp) => {
        this.paises = resp;

        this.termino = '';
      }, (err) => {

        this.paises = [];

        this.hayError = true;
      });

  }

  sugerencias( termino: string ) {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisesSugeridos = [];

    if (termino.trim().length == 0){ return }

    this.paisService.buscarCapital( termino )
      .subscribe((resp) => 
      this.paisesSugeridos = resp.splice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }
  

}
