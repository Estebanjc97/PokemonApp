import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  HttpUrl:{ apiCode: string, url: string }[] = environment.HttpUrls;

  constructor(private http: HttpClient) { }

  private getHeaders(useToken?:boolean){
    let httpOptions;
    return httpOptions = {
      headers: new HttpHeaders({
        idToken: useToken ? '' : ''
      })
    };
  }

  protected get(route: string, data?: JSON, useToken?: boolean, endpointIndex:number = 0) {
    return this.http.get(this.HttpUrl[endpointIndex].url + route, this.getHeaders(useToken)).pipe(map(answer => {
      return answer;
    }));
  }

  protected post(route: string, data: JSON, useToken?: boolean, endpointIndex:number = 0) {
    return this.http.post(this.HttpUrl[endpointIndex].url + route, data, this.getHeaders(useToken)).pipe(map(answer => {
      return answer;
    }));
  }

  protected put(route: string, data: JSON, useToken?: boolean, endpointIndex:number = 0) {
    return this.http.put(this.HttpUrl[endpointIndex].url + route, data, this.getHeaders(useToken)).pipe(map(answer => {
      return answer;
    }));;
  }

  protected delete(route:string, useToken?: boolean, endpointIndex:number = 0){
    return this.http.delete(this.HttpUrl[endpointIndex].url + route, this.getHeaders(useToken)).pipe(map(answer => {
      return answer;
    }));
  }
}
