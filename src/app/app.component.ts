import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {BuildingComponent} from "./building/building.component";
import {DUMMY_BUILDINGS} from "./building/dummy_data";
import {InventoryComponent} from "./inventory/inventory/inventory.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BuildingComponent, InventoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITInventoryManager';
  buildings = DUMMY_BUILDINGS
  selectedBuildingID!: string

  get selectedBuilding() {
    return this.buildings.find((b) => b.id === this.selectedBuildingID)!;
  }

  onSelectedBuilding(selectedBuildingID:string) {

    this.selectedBuildingID = selectedBuildingID
        console.log("Building ", this.selectedBuildingID);

  }
}
