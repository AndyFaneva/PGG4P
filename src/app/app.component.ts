import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThematiqueComponent } from './thematique/thematique.component';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeComponent,
    RouterLink,
    ThematiqueComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GreenGuard4Peace';
}
