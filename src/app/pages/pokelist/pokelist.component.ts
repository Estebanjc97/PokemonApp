import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  currentPagination:number = 0;
  maxItemsPerPage:number = 20;

  pokemons: { name: string, url: string }[] = [];

  direction:string = '';

  scrollDistance = 1;
  scrollThrottle = 10;

  lastResponse;

  query:string = '';
  queryResult;

  loading;

  constructor(private pokeService: PokemonService, private router:Router) { }

  ngOnInit(): void {
    this.loadPokemons(false);
  }

  loadPokemons(addPage:boolean){
    this.currentPagination = addPage ? this.currentPagination + 1 : this.currentPagination
    console.log(this.currentPagination)

    if(this.currentPagination != 0)
      if(!this.lastResponse['next'])
        return;

    this.getPokemons(this.currentPagination);
  }

  getIndex(urlString:string){
    urlString = urlString.slice(0, urlString.length - 1);
    let i = urlString.lastIndexOf("/");
    return urlString.slice(i + 1, urlString.length)
  }

  getPokemons(indexPagination){

    this.loading = true;

    this.pokeService.getPokemons(this.maxItemsPerPage, this.maxItemsPerPage * indexPagination).subscribe(resp => {
      console.log(resp);
      this.lastResponse = resp;
      this.filterByQuery(resp['results']);

      for (let index = 0; index < resp['results'].length; index++) {
        resp['results'][index]['index'] = this.getIndex(resp['results'][index]['url']);
        this.pokemons.push(resp['results'][index]);
      }

      this.queryChange();
      this.loading = false;

    }, error => {
      console.log(error);
      this.loading = false;
    })
  }

  queryChange(){
    console.log(this.query)
    if(this.query === '')
      return;
    this.filterByQuery(this.query.toLocaleLowerCase());
  }

  filterByQuery(searchedText){

    this.queryResult = []

    this.queryResult = this.pokemons.reduce((acc, current) => {
      if(current.name.includes(searchedText))
        acc.push(current);
      return acc;
    }, [])

    if(this.queryResult.length < 20 && this.query !== ''){
      this.loadPokemons(true)
    }
  }

  goDetails(name){
    this.router.navigate(['/home/pokemon', name])
  }

  onModalScrollDown (ev) {
    console.log('scrolled down!!', ev.currentScrollPosition, " Total scroll ", document.documentElement.scrollHeight);

    // add another 20 items
    if((document.documentElement.scrollHeight - ev.currentScrollPosition) < 80)
      this.loadPokemons(true)

    this.direction = 'down'
  }

}
