import {Component, Input} from '@angular/core';
import { DUMMY_BUILDINGS } from "./dummy_data";

@Component({
  selector: 'app-building',
  standalone: true,
  imports: [],
  templateUrl: './building.component.html',
  styleUrl: './building.component.css'
})
export class BuildingComponent {

  selectedBuilding = DUMMY_BUILDINGS[1]
  @Input({required: true}) buildingName!: string
  @Input() buildingLocation!: string

  onSelectBuilding(){

  }
}
