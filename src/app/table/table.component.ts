
import { Component } from '@angular/core';
import { Compromisso } from '../compromisso';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  compromissos: Compromisso [] = [];

  constructor(private service: AgendaService, private router: Router){}

  ngOnInit(){
    this.loadCompromisso();
  }

  loadCompromisso(){
    this.service.getCompromisso().subscribe({
      next: data => this.compromissos = data
    })
  };

  delete(compromisso: Compromisso){
    this.service.delete(compromisso).subscribe({
      next: () => this.loadCompromisso()
    })
  };

create(){
  this.router.navigate(['compromissos'])
};
}
