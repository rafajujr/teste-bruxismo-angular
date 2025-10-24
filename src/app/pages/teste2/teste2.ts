import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste2',
  standalone: false,
  templateUrl: './teste2.html',
  styleUrl: './teste2.scss'
})
export class Teste2 {

  user: any;
  opcoes = ['Sim', 'Não'];
  dados: FormGroup;
  res: any[] = [];

  constructor (private router: Router) {
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
      valor11: new FormControl('', Validators.required),
      valor12: new FormControl('', Validators.required),
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

    let totalSim = this.res.filter(res => res === 'Sim').length;

    //console.log(totalSim);

    // 0 seu corpo etá em perfeito funcionamento
    if(totalSim < 1) {
      localStorage.setItem('ansiedade', '0 seu corpo etá em perfeito funcionamento');
    }
    // 1-3 A vida está um pouco estressante para você...
    if(totalSim > 0 && totalSim < 4) {
      localStorage.setItem('ansiedade', 'A vida pode está um pouco etressante para você. Avalie o que está' +
        'ocorrendo, o que está exigindo demai de sua resitência. Pode ser o mundo lá fora ou você mesmo.' +
        'Considere fortalecer os seus macanismos defensivos imunológicos.');
    }
    // 4-8 Seu nível de estresse está alto, algo...
    if(totalSim > 3 && totalSim < 9) {
      localStorage.setItem('ansiedade', 'Seu nível de estresse está alto, algo está exigindo demais do seu organismo' +
        ' chegando ao seu limite. Considere uma mudança de estilo de vida, de hábitos. Analise em que ' +
        'seu próprio modo de ser pode estar contribuindo para a tensão que está sentindo.');
    }
    // 9-12 Seu nível de estresse é grave procure...
    if(totalSim > 8 && totalSim < 13) {
      localStorage.setItem('ansiedade', 'Seu nível de estresse é grave. Procure atenção profissional.' +
        ' Sem dúvida você tem fontes de estresse representadas pelo mundo ao seu redor (família, ocupação, sociedade, ' +
        'etc) e fontes internas (seu modo de pensar, sentir, ser) com as quais precisa aprender a lidar.');
    }

    //console.log(localStorage.getItem('ansiedade'));
    this.router.navigate(['/teste3']);
  }

}
