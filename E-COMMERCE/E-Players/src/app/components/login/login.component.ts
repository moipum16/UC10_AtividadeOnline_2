import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )

export class LoginComponent implements OnInit
{

  constructor ( private userService: UserService ) { }

  ngOnInit (): void
  {
  }

  //  nossas variáveis e métodos
  userModel = new User()
  mensagem = ""

  receberDados ()
  {
    // console.log(this.userModel);

    //disparando/send
    this.userService.logarUsuario( this.userModel ).subscribe( {
      next: ( response ) =>
      {//sucesso

        console.log( "OK" );
        console.log( response );
        this.mensagem = "Logado com Sucesso";
        window.alert(`Registrado com sucesso! ${this.userModel.email}. Retorne para o login.`)

      },
      error: ( err ) =>
      {//erro

        console.log( "ERRO" );
        console.log( err );
        this.mensagem = err.error;
        window.alert( `Erro! ${ this.userModel.email }.` )
      },
    } )

  }

  teste ()
  {
    this.userModel.email = "Coca Cola"
  }

}
