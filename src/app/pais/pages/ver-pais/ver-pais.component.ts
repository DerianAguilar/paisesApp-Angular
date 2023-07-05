import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
  
  pais!: Country[];

  constructor( private activateRoute: ActivatedRoute, private paisServie: PaisService ) {}
  
  ngOnInit() {

    this.activateRoute.params
      .pipe(
        switchMap(({ id })=> this.paisServie.buscarDetalle( id ) ),
        tap( console.log )
      )
      .subscribe( (resp) => this.pais = resp);

    // this.activateRoute.params
    //   .subscribe( ({ id }) => {
    //     this.paisServie.buscarDetalle( id )
    //       .subscribe( (pais) => {
    //         console.log( pais );
    //       });
    //   });
  }

}
