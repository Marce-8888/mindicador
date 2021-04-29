import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {

  constructor( private http: HttpClient ) {
    console.log('2 servicio funcionando')
  }
  getDetails():Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/Json')
    return this.http.get<any>('/api', {
      headers: header
    });
    }
}