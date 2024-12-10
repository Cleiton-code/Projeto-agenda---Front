import { Component } from '@angular/core';
import { Compromisso } from '../compromisso';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
compromissos: Compromisso [] = [];

  constructor(private service: AgendaService,
              private router: Router
  ){}

  ngOnInit(){
    this.loadCompromisso();
  }

  loadCompromisso(){
    this.service.getCompromisso().subscribe({
      next: data => this.compromissos = data
    })
  };

}
