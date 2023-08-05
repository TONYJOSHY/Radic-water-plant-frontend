import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { OptionList } from '../../models/options.model';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit, OnChanges {

  @Input() optionsList: OptionList[] = [];
  @Input() defaultOption!: string | number;

  @Output() valueSelected = new EventEmitter<OptionList>()

  selectedValue: OptionList | null = null;

  ngOnInit() {
    if (this.optionsList.length && this.defaultOption) {
      this.optionsList.forEach((val: OptionList) => {
        if (val.id == this.defaultOption) this.selectedValue = val;
      })
    }
  }

  ngOnChanges() {
    // this.ngOnInit();
  }

  emitValue() {
    this.valueSelected.emit(this.selectedValue as OptionList)
  }

  selectBoxToggle() {

  }

}
