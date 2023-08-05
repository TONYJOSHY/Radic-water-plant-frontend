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

  monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  hourArray = ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12', '12-13',
    '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24'];

}
