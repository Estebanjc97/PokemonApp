import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input()
  pokemon: { name: string, url: string };

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
