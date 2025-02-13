import { authState } from '@angular/fire/auth';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { authStateService } from './share/data-access/auth-state.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
