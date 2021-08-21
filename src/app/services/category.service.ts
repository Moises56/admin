import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   // ?Para Produccion
   private URLPRO = 'https://somopa.herokuapp.com/admin';
   private URLPRORD = 'https://somopa.herokuapp.com/usermotorista/user';

   // ?Para Desarrollo
  //  private URLPRO =  'http://localhost:3000/admin'; // ?Categorias
  //  private URLPRORD =  'http://localhost:3000/usermotorista/user'; // ? Ordenes


  constructor(private httpClient: HttpClient) { }

    // *1 Obener todas las Categorias
    getCategorias(): Observable<any>{
      return this.httpClient.get(this.URLPRO + '/categorias', {});
    }

    // *2 Obener todas las Empresas
    getEmpresas(): Observable<any>{
      return this.httpClient.get(this.URLPRO + `/empresas`, {});
    }

       // *Obtener todas las ordenes
    getOrdenes(): Observable<any>{
      return this.httpClient.get(this.URLPRORD + `/ordenes`, {});
    }


    // *Obtener un cliente y  Sus ordenes
    getOrdenCliente(idCliente: any): Observable<any>{
      return this.httpClient.get(this.URLPRORD + `/${idCliente}/ordenes`, {});
    }

}
