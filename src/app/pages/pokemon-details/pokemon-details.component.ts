import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  uId : string = null;

  constructor( private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.uId = this.activedRoute.snapshot.params.id;
  }

}
