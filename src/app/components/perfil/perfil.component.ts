import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
    public isCollapsed = false;

  Categorias: any = [];
  Empresas: any = [];
  User: any = [];

    // tslint:disable-next-line:ban-types
    regionVisible: String = '';

    nombreUser: any;
    apellidoUser: any;

  constructor(
    public authService: AuthService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nombreUser = localStorage.getItem('nombreUser');
    this.apellidoUser = localStorage.getItem('apellidoUser');
    console.log(this.nombreUser,
    this.apellidoUser);
  }

  // tslint:disable-next-line:typedef
  getOrdenes(){
    console.log('ordenes');
    this.regionVisible = 'orden';
  }

  // tslint:disable-next-line:typedef
  getCategoria(){
    this.router.navigate( ['/categoria'] );
    this.regionVisible = 'categoria';
  }

  // tslint:disable-next-line:typedef
  getEmpresas(){
    this.router.navigate( ['/empresa'] );
    this.regionVisible = 'empresa';
  }

  // tslint:disable-next-line:typedef
  showMotorista(){
    this.router.navigate( ['/motorista'] );
    this.regionVisible = 'motorista';
  }

  // tslint:disable-next-line:typedef
  showClientes(){
    this.router.navigate( ['/cliente'] );
    this.regionVisible = 'cliente';
  }

}
