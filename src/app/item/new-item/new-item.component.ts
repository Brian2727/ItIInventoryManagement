import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css'
})
export class NewItemComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() formSubmitted = new EventEmitter<object>();
  enteredName = ''
  enteredDescription = ''
  enteredDate = ''
  enteredModel = ''
  enteredSerial: any;
  enteredBrand: any;
  enteredType: any;
  onCancelAddItem() {
    this.cancel.emit()
  }

  onSubmit(){
    this.formSubmitted.emit({
      name: this.enteredName,
      description: this.enteredDescription,
      warrantyExpDate: this.enteredDate,
      brand: this.enteredBrand,
      type: this.enteredType,
      model: this.enteredModel,
      serialNumber: this.enteredSerial,
    })
  }
}

