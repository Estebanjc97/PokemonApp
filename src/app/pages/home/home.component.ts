import { Router } from '@angular/router';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentPagination:number = 0;
  maxItemsPerPage:number = 20;

  pokemons: { name: string, url: string }[] = [];

  constructor(private pokeService: PokemonService, private router:Router) { }

  ngOnInit(): void {
    this.loadPokemons(false);
  }

  loadPokemons(addPage:boolean){
    this.currentPagination = addPage ? this.currentPagination + 1 : this.currentPagination
    console.log(this.currentPagination)

    this.getPokemons(this.currentPagination);
  }

  getPokemons(indexPagination){
    this.pokeService.getPokemons(this.maxItemsPerPage, this.maxItemsPerPage * indexPagination).subscribe(resp => {
      console.log(resp);
      resp['results'].forEach(pokemon => {
        this.pokemons.push(pokemon);
      });
    }, error => {
      console.log(error);
    })
  }

  goDetails(index){
    this.router.navigate(['/pokemon', index])
  }

}
