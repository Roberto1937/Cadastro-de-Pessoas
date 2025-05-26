import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  imports: [ReactiveFormsModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  Formulario = new FormGroup({
    nome: new FormControl('',   [Validators.required,   Validators.minLength(3)]),
    idade: new FormControl(null,[Validators.required, Validators.min(0),Validators.max(120)]),
    cidade:new FormControl('',  [Validators.required,   Validators.min(0),Validators.max(120)])
  })
}
