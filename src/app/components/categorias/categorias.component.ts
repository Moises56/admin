import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  Categorias: any = [];

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
    this.categoryService.getCategorias()
    .subscribe(
      res => {
        console.log(res);
        this.Categorias = res;
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
