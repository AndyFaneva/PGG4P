import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  // Utilisateurs simulés (vous pouvez les remplacer par un appel à une API)
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Vérifiez les informations d'identification de l'utilisateur
      const user = this.users.find(u => u.username === username && u.password === password);

      if (user) {
        // Redirection en fonction du rôle de l'utilisateur
        if (user.role === 'admin') {
          this.router.navigate(['../admin/adminhome']);
        } else {
          this.router.navigate(['/userhome']);
        }
      } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    } else {
      console.log('Formulaire invalide');
    }
  }
}
