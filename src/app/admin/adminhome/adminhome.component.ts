import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Header1Component } from '../../header1/header1.component';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [
    Header1Component
  ],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
