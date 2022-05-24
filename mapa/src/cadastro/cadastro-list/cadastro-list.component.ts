import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.scss']
})
export class CadastroListComponent implements OnInit {


  itens: any[] = [];


  constructor(
    private appService : AppService,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    console.log('Load');
    this.appService.listar().subscribe((res)=>{
      this.itens=res;
    })
  }

  delete(id: number) {
    if(confirm('Você deseja excluir o resgitro?')){
      this.appService.delete(id).subscribe(res =>{
      this.load();
      });
    }
  }

}
