import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  name : string = null;

  pokemon;

  abilities = [];

  constructor( private activedRoute: ActivatedRoute, private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.activedRoute.snapshot.params.name;
    this.getPokemon(this.name);
  }

  getPokemon(name){
    this.pokeService.getPokemon(name).subscribe(resp => {
      console.log(resp);
      this.pokemon = resp;
      this.getAbilities();
    }, err => {
      console.log(err);
    })
  }

  getAbilities(){
    this.pokemon.abilities.forEach(ability => {
      this.pokeService.getPokemonAbilities(this.getAbilityId(ability.ability.url))
      .subscribe(resp => {
        console.log(resp)
        this.abilities.push(resp);
      }, err => {
        console.log(err);
      })
    });
  }

  returnToList(){
    this.router.navigateByUrl('/home/pokelist');
  }

  getAbilityId(urlString){
    urlString = urlString.slice(0, urlString.length - 1);
    let i = urlString.lastIndexOf("/");
    return urlString.slice(i + 1, urlString.length)
  }

}
