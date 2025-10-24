import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste1',
  standalone: false,
  templateUrl: './teste1.html',
  styleUrl: './teste1.scss'
})
export class Teste1 {

  user: any;
  opcoes = [0, 1, 2, 3];
  dados: FormGroup;
  res: any[] = [];


  constructor(
    private router: Router,
  ) {
    this.dados = new FormGroup({
      valor1: new FormControl('', Validators.required),
      valor2: new FormControl('', Validators.required),
      valor3: new FormControl('', Validators.required),
      valor4: new FormControl('', Validators.required),
      valor5: new FormControl('', Validators.required),
      valor6: new FormControl('', Validators.required),
      valor7: new FormControl('', Validators.required),
      valor8: new FormControl('', Validators.required),
    });
  }



  ngOnInit() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user!);
    this.user = user;
  }

  proximo() {
    if(this.dados.invalid) {
      window.alert('Preencha todos os campos');
      return;
    }
    const valores = this.dados.value;
    this.res = Object.values(valores);
    const soma = valores.valor1 + valores.valor2 + valores.valor3 + valores.valor4 + valores.valor5 + valores.valor6 + valores.valor7 + valores.valor8;
    //console.log(soma);

    // 1-6 - Sono normal
    if(soma < 7) {
      localStorage.setItem('sono', 'Sono normal');
    }
    // 7-8 - media sonolencia
    if(soma > 6 && soma < 9) {
      localStorage.setItem('sono', 'media sonolência');
    }
    // 9-24 - sonolencia anormal (possivelmente patológica)
    if(soma > 8) {
      localStorage.setItem('sono', 'sonolência anormal');
    }
    //console.log(localStorage.getItem('sono'));
    this.router.navigate(['/teste2']);
  }

}
