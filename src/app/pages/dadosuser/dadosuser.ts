import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario {
  nome: string;
  dataDeNascimento: string;
  estado: string;
  cidade: string;
  contato: string;
}

@Component({
  selector: 'app-dadosuser',
  standalone: false,
  templateUrl: './dadosuser.html',
  styleUrl: './dadosuser.scss',
})
export class Dadosuser {

  camposForm: FormGroup;
  listaEstados = [{id: '1', sigla: 'AC', nome: 'Acre'}, {id: '2', sigla: 'AL', nome: 'Alagoas'}];
  listaCidades = [{id: '1', sigla: 'AC', nome: 'Acre'}, {id: '2', sigla: 'AL', nome: 'Alagoas'}];

  constructor (private router: Router) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      dataDeNascimento: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      contato: new FormControl('', Validators.required),
    });
  }

  iniciarTeste() {
    //console.log(this.camposForm.value);
    //salvar dados do usuario
    if(this.camposForm.invalid) {
      window.alert('Preencha todos os campos');
      return;
    } else {
      let user = this.camposForm.value as Usuario;
      localStorage.setItem('user', JSON.stringify(user));
    }

    this.router.navigate(['/teste1']);
  }

}
