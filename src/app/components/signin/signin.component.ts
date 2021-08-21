import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  token = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  signIn(){
   console.log(this.user);
   this.authService.signIn(this.user)
     .subscribe(
       res => {
         // tslint:disable-next-line:semicolon
         console.log(res);
         localStorage.setItem('iduser', res.idUser ); // * Guardando token en localStorage
         localStorage.setItem('nombreUser', res.nombre ); // * Guardando token en localStorage
         localStorage.setItem('apellidoUser', res.apellido ); // * Guardando token en localStorage
         this.token = res.token;
         localStorage.setItem('token', res.token ); // * Guardando token en localStorage
         alert('***Estas registrado Vienenido')
         this.router.navigate( ['/perfil'] );
       },
       err => console.log(err)
     );

   this.authService.getPerfil(this.token)
    .subscribe(
      res => {
        console.log(res);
        // this.User = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // signUp(){
  //   // console.log(this.user);
  //   this.authService.signup(this.user)
  //   .subscribe(
  //     res =>{
  //       console.log(res)
  //       localStorage.setItem('token', res.token ); //* Guardando token en localStorage
  //       this.router.navigate(['/perfil'])
  //     },
  //     err => console.log(err)
  //   )
  // }

}
