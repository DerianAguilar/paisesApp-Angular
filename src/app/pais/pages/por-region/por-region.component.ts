import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  regiones    : string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva: string   = '';
  paises      : Country[]= [];
  estado      : boolean  = false;

  constructor ( private paisService: PaisService ) {};

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) { return; }

    this.paises = [];
    this.regionActiva = region;
    this.estado = true;
    this.paisService.buscarRegion( region )
      .subscribe( (resp) => {
        this.estado = false;
        this.paises = resp;
      });

  }

}
