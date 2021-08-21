import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  Empresas: any = [];


  constructor(
    private categoryService: CategoryService

  ) { }

  ngOnInit(): void {
    this.categoryService.getEmpresas()
    .subscribe(
      res => {
        console.log(res);
        this.Empresas = res;
      },
      err => console.log(err)
    );
  }

}

