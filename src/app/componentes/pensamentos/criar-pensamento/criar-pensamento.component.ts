import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', [Validators.compose([
      Validators.required,
      Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])]],
      autoria: ['', [Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])]],
      modelo: ['modelo2']
    })
  }

  criarPensamento() {
    if(this.formulario){
      console.log(this.formulario)
        this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
    }

  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }


  habilitarBotao(): string{
    console.log(this.formulario)
    console.log(this.formulario.valid)
    if(this.formulario.valid){
      return 'botao'
  }

  return 'botao__desabilitado';

}






}
