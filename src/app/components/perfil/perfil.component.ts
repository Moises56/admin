import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CategoryService } from '../../services/category.service';
=======
import { AuthService } from "../../services/auth.service";
import {faSignOutAlt, faUsersCog,faDolly, faUsers, faSitemap, faBriefcase,faMotorcycle} from '@fortawesome/free-solid-svg-icons';
>>>>>>> 4ce1ac628aa1648cd4b45850a560f70b9304a83e
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
<<<<<<< HEAD
    public isCollapsed = false;

  Categorias: any = [];
  Empresas: any = [];
  User: any = [];

    // tslint:disable-next-line:ban-types
    regionVisible: String = '';

    nombreUser: any;
    apellidoUser: any;

=======
  faSitemap =faSitemap;
  faBriefcase=faBriefcase;
  faMotorcycle=faMotorcycle;
  faUsers=faUsers;
  faDolly=faDolly;
  faUsersCog=faUsersCog;
  faSignOutAlt=faSignOutAlt;
>>>>>>> 4ce1ac628aa1648cd4b45850a560f70b9304a83e
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
