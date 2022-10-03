import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class UserService
{

  constructor (
    //injeção de dependência do módulo HttpClient
    private httpClient: HttpClient
  ) { }


  urlLogin = "http://localhost:4200/users";//rota

  // post de login - Insomnia
  logarUsuario ( usuario: User ): Observable<any>
  {

    return this.httpClient.post( this.urlLogin, JSON.stringify( usuario ), {
      headers: new HttpHeaders( { "Content-Type": "application/json" } ),
      observe: 'response'
    } )
  }
}
