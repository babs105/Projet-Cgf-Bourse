import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  userRegister;
  form: {
    prenom: String,
    nom: String,
    login: String,
    password: String
    password2: String
  }
  constructor(private inscriptionService: InscriptionService) {
    this.form = {
      prenom: '',
      nom: '',
      login: '',
      password: '',
      password2: ''
    }
  }

  ngOnInit() {
  }
  resetForm() {
    this.form = {
      prenom: '',
      nom: '',
      login: '',
      password: '',
      password2: ''
    }
  }
  confirmPassword() {
    if (this.form.password !== this.form.password2) {
      return false
    } else
      return true
  }
  register() {
    console.log("data", this.form)
    this.inscriptionService.registerUser(this.form)
      .subscribe((data: { status: string, response: {} }) => {
        this.userRegister = data.response;
        this.resetForm();
        console.log("user inscrit", this.userRegister);
      });

  }

}
