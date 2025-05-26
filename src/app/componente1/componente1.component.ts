import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-componente1',
  imports: [ReactiveFormsModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  Formulario = new FormGroup({
    Nome: new FormControl('',   [Validators.required,   Validators.minLength(3)]),
    Idade: new FormControl(null,[Validators.required, Validators.min(0),Validators.max(120)]),
    Cidade:new FormControl('',  [Validators.required,   Validators.min(0),Validators.max(120)])
  })
  //visibilidade dos botoes
  bntCadastrar:boolean=true;

  //Vetor para armazenamento dos dados
  vetor:Pessoa[]=[]

  //função para cadastro
  cadastrar(){

    //cadastrar no vetor
    this.vetor.push(this.Formulario.value as Pessoa);

    //Linpar os dados
    this.Formulario.reset();

    //visualização via console
    console.table(this.vetor)
  }


}
