import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Button } from './components/button/button';
import { Dadosuser } from './pages/dadosuser/dadosuser';
import { Home } from './pages/home/home';
import { Navbar } from './components/navbar/navbar';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Teste1 } from './pages/teste1/teste1';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Teste2 } from './pages/teste2/teste2';
import { Teste3 } from './pages/teste3/teste3';
import { Resultado } from './pages/resultado/resultado';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatCardModule } from '@angular/material/card';
import { Footer } from './components/footer/footer';



@NgModule({
  declarations: [
    App,
    Button,
    Dadosuser,
    Home,
    Navbar,
    Teste1,
    Teste2,
    Teste3,
    Resultado,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    NgxMaskDirective,
    MatCardModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    provideBrowserGlobalErrorListeners(),
    provideNativeDateAdapter(),
    provideNgxMask({ })
  ],
  bootstrap: [App]
})
export class AppModule { }
