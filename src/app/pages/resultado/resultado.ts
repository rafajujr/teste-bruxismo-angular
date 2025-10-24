import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  standalone: false,
  templateUrl: './resultado.html',
  styleUrl: './resultado.scss'
})
export class Resultado {

  user: any;
  bruxismo: any;
  ansiedade: any;
  sono: any;

  constructor(private router: Router,) {}

  ngOnInit() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user!);
    this.user = user;
    let bruxismo = localStorage.getItem('bruxismo');
    this.bruxismo = bruxismo;
    let ansiedade = localStorage.getItem('ansiedade');
    this.ansiedade = ansiedade;
    let sono = localStorage.getItem('sono');
    this.sono = sono;
  }

  reset() {
    localStorage.removeItem('bruxismo');
    localStorage.removeItem('ansiedade');
    localStorage.removeItem('sono');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
