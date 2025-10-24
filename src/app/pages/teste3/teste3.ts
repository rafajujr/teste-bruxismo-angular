import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste3',
  standalone: false,
  templateUrl: './teste3.html',
  styleUrl: './teste3.scss'
})
export class Teste3 {

  user: any;
  opcoes = ['Sim', 'Não', 'Às vezes'];
  dados: FormGroup;
  res: any[] = [];

  constructor(private router: Router) {
    this.dados = new FormGroup({
      valor1: new FormControl('', Validators.required),
      valor2: new FormControl('', Validators.required),
      valor3: new FormControl('', Validators.required),
      valor4: new FormControl('', Validators.required),
      valor5: new FormControl('', Validators.required),
      valor6: new FormControl('', Validators.required),
      valor7: new FormControl('', Validators.required),
      valor8: new FormControl('', Validators.required),
      valor9: new FormControl('', Validators.required),
      valor10: new FormControl('', Validators.required),
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

    let totalSim = this.res.filter(res => res === 'Sim').length * 10
    let totalNao = this.res.filter(res => res === 'Não').length;
    let totalAsVezes = this.res.filter(res => res === 'Às vezes').length * 5;

    let total = totalSim + totalNao + totalAsVezes;

    //console.log(total)

    // 0-15 - ausência de bruxismo
    if(total < 16) {
      localStorage.setItem('bruxismo', 'Ausência de bruxismo');
    }
    // 20-44 - leve bruxismo
    if(total > 15 && total < 45) {
      localStorage.setItem('bruxismo', 'Leve bruxismo');
    }
    // 45-69 - moderado bruxismo
    if(total > 44 && total < 70) {
      localStorage.setItem('bruxismo', 'Moderado bruxismo');
    }
    // 70-100 - grave bruxismo
    if(total > 69 && total < 101) {
      localStorage.setItem('bruxismo', 'Grave bruxismo');
    }

    //console.log(localStorage.getItem('bruxismo'));
    this.router.navigate(['/resultado']);
  }

}
