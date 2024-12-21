import {Component, Input} from '@angular/core';
import {ItemComponent} from "../../item/item.component";
import {Items} from "./Dummy_Items"
import {NewItemComponent} from "../../item/new-item/new-item.component";
@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    ItemComponent,
    NewItemComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})

export class InventoryComponent {
  @Input({required: true}) buildingID!: string;
  @Input({required: true}) buildingName!: string;
  items = Items
  isAddingItem = false


  get buildingInventory(){
    return this.items.filter((item) => item.buildingID === this.buildingID)
  }

  onCancelNewItem(){
    this.isAddingItem = false
  }

  onClickAddItem(){
    this.isAddingItem = true
  }

  onNewItemToAdd(item:any){
    this.isAddingItem = false
    let newitem = {
      buildingID: this.buildingID,
      id: Date.now().toString(),
      name: item.name,
      description: item.description,
      type: item.type,
      brand: item.brand,
      serialNumber: item.serialNumber,
      warrantyExpDate: item.warrantyExpDate,
      model: item.model,
    }
    this.items.push(newitem)
  }

}
