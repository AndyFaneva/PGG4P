import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { ThematiqueComponent } from './auth/thematique/thematique.component';
import { RouterLinkActive} from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  // Ajoutez vos routes ici
];

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeComponent,
    RouterLink,
    ThematiqueComponent,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
