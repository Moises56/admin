import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {faSignOutAlt, faUsersCog,faDolly, faUsers, faSitemap, faBriefcase,faMotorcycle} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faSitemap =faSitemap;
  faBriefcase=faBriefcase;
  faMotorcycle=faMotorcycle;
  faUsers=faUsers;
  faDolly=faDolly;
  faUsersCog=faUsersCog;
  faSignOutAlt=faSignOutAlt;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
