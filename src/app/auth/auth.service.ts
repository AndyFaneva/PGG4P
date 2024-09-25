import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private hardcodedUser = {
    username: 'admin',
    password: 'admin',
    role: 'admin' // Vous pouvez ajouter d'autres rôles si nécessaire
  };

  constructor(private router: Router) {}

  // Simuler la connexion en vérifiant avec un utilisateur codé en dur
  login(username: string, password: string): Observable<boolean> {
    if (username === this.hardcodedUser.username && password === this.hardcodedUser.password) {
      // Stocker un jeton fictif (ou juste une clé de session)
      localStorage.setItem('authToken', 'fake-jwt-token');
      // Rediriger vers la page d'accueil de l'admin
      this.router.navigate(['/admin/adminhome']);
      return of(true);
    } else {
      return of(false);
    }
  }

  // Vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Déconnexion de l'utilisateur
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
