import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends BaseService {

  constructor(private _http: HttpClient) {
    super(_http);
  }

  public getPokemons(limit: number, offset: number){
    return this.get(`/pokemon?limit=${limit.toString()}&offset=${offset.toString()}`)
  }

}
