import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from './../../services/category.service';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  Orden: any = [];

  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getOrdenes().subscribe(
      res => {
        console.log(res);
        this.Orden = res;
      },
      err => console.log(err)
    );
  }

  // tslint:disable-next-line:typedef
  abrirTomarOrdenModalModal(modal: any){
    this.modalService.open(
      modal,
      {
        size: 'xs',
        centered: false
      }
    );
  }

  // tslint:disable-next-line:typedef
  tomarOrden(){
    alert('Orden Tomada tiempo de llegada 15 minutos.');
    this.modalService.dismissAll();
  }

}
