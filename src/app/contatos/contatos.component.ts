import { Component, OnInit } from '@angular/core';
import { Telefone } from '../contatos';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contatos',
  standalone: false,
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent implements OnInit {

 telefone: Telefone[] = [];
  formTelefone : FormGroup;
  isEditing: boolean = false;

  constructor(private service: ContatosService,
              private formBuilder: FormBuilder
  ){
      this.formTelefone = formBuilder.group({
           name : [''],
           telefone: ['']
      });

  }

  ngOnInit(): void {
    this.loadTelefone()
  }

  loadTelefone(){
    this.service.getAll().subscribe({
      next: json => this.telefone = json
   });
  }

  save() {
      this.service.save(this.formTelefone.value).subscribe(
        {
           next: json => {
             this.telefone.push(json);
             this.formTelefone.reset();
           }
        }
      )
  }

  delete(telefone: Telefone) {
    this.service.delete(telefone).subscribe(
      {
        next: () => this.loadTelefone()
      }
    )
  }

  edite(telefone: Telefone) {
    this.formTelefone.setValue(telefone);
    this.isEditing = true;
  }

  confirmeSalvar() {
    this.service.update(this.formTelefone.value).subscribe({
      next: () => {
        this.loadTelefone();
        this.clear();
      },
    });
  }
  onClickClear() {
    this.clear();
  }

  clear() {
    this.formTelefone.reset();
    this.isEditing = false;
  }
}