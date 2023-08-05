import { Injectable } from '@angular/core';
import { OptionList } from '../models/options.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  dateFilter: OptionList[] = [
    { id: 101, name: 'Day' },
    { id: 111, name: 'Month' },
    { id: 121, name: 'Year' }
  ]
}
