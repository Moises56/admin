import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
   console.log(this.user);
     this.authService.signIn(this.user)
     .subscribe(
       res =>{
         console.log(res)
         localStorage.setItem('token', res.token ); //* Guardando token en localStorage
         this.router.navigate(['/perfil'])
       },
       err => console.log(err)
     )
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
