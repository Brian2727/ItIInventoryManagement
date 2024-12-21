import {Component, Input, output} from '@angular/core';
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
  @Input({required: true}) building!: {
    id: string,
    name: string,
    address: string,
  };
  @Input({required:true}) selected!: boolean;
  select = output<string>()

  onSelectBuilding(){
    this.select.emit(this.building.id)
  }
}
