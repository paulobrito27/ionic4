import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  autenticaForm: FormGroup; // Utilizado para criar um formulario

  // Dentro do construtor criado o FormBuilder que facilita o pocesso de criar instancias de FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  // Validators.required(serve para informar que o item e' obrigatorio )
  // Validators.email(serve para validar que o campo contenha um email valido)
  // Validators.minLength( serve para aceitar apenas palavras com um minimo de caracteres)

  private createForm(): void {
    this.autenticaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    console.log(' autenticaForm: ', this.autenticaForm.value);
  }
}
