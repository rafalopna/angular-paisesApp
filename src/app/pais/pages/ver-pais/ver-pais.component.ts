import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService ){}


  ngOnInit(): void {

    this.activatedRoute.params
      .pipe( 
        switchMap( ({id}) => this.paisService.getPaisPorCodigo(id) ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais[0]);

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     this.paisService.getPaisPorCodigo(id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       })
    //   })
  }
  

}
