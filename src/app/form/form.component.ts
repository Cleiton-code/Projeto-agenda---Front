import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

formGroupCompromissos : FormGroup;
isEditing: boolean = false;

constructor(private router: Router,
            private activatedRouter: ActivatedRoute,
            private service: AgendaService,
            private formbuilder: FormBuilder
){
   this.formGroupCompromissos = formbuilder.group({
    id:               [''],
    title:            [''],
    descricao:         [''],
    datacompromisso:   [''],
    inicio:            [''],
    fim:               [''],
    local:             [''],
    situacao:          ['']
   })
};
  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get("id"))
    if(id != 0){
      this.loadCompromisso(id);
      this.isEditing = true;
    }
  }

  loadCompromisso(id: number){
    this.service.getCompromissosById(id).subscribe({
      next: data => this.formGroupCompromissos.setValue(data)

    })
  };

  update(){
    const titulo = this.formGroupCompromissos.get('title')?.value;
    if ( !titulo || titulo.trim() === ""){
      alert("Títilo não pode ser vazio!!! verifique o campo")
    }
    else{

    this.service.update(this.formGroupCompromissos.value).subscribe({
      next: () => this.router.navigate(['compromisso'])
    })
  }}

  save(){
    const titulo = this.formGroupCompromissos.get('title')?.value;
    if ( !titulo || titulo.trim() === ""){
      alert("Títilo não pode ser vazio!!! verifique o campo")
    }
    else{
      this.service.save(this.formGroupCompromissos.value).subscribe({
        next: () => this.router.navigate([`/compromisso`])
      })
    }
  }

}
