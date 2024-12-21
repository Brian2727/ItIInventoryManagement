import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  isAddingItem = false
  @Input({required:true}) item!:
    {
    id: string,
    buildingID: string,
    type: string,
    description: string,
    model: string,
    serialNumber: string,
    brand: string,
    name: string,
    warrantyExpDate: string
}



}
