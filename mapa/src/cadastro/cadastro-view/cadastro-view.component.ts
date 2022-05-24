import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cadastro-view',
  templateUrl: './cadastro-view.component.html',
  styleUrls: ['./cadastro-view.component.scss']
})
export class CadastroViewComponent implements OnInit {

  id: number;
  frmForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.frmForm = this.createForm();
    if (this.id != 0){
      this.load();
    }
  }


  createForm(): FormGroup {
    return this.fb.group({
     id : [this.id],
     nome : [''],
     cpf : [''],
     dataNascimento : [''],
     email: [''],
     telefone : [''],
     endereco : [''],
     corHexa: ['#FF0000'],
     lat : [0],
     lng : [0],
    });
  }


  load(){
    this.appService.buscar(this.id).subscribe(res =>{
      this.frmForm.patchValue(res);
    });
   }

  save($event: any){
    console.log('Formulario', this.frmForm.value)
    this.appService.adicionar(this.frmForm.value).subscribe(res =>{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['view']))
    })
  }

}
