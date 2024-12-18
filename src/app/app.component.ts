import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {BuildingComponent} from "./building/building.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BuildingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITInventoryManager';
}
