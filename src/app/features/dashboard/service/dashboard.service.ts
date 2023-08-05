import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/service/data.service';
import { FlowChart } from '../models/flowChart.model';
import { FlowInfo } from '../models/flowInfo.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private dataService: DataService) { }

  getInfo(): Observable<FlowInfo[]> {
    let url = '/data/info/'
    return this.dataService.getData(url) as Observable<FlowInfo[]>
  }

  getChart(params: any): Observable<FlowChart[]> {
    let url = '/data/'
    return this.dataService.getDataWithParams(url, params) as Observable<FlowChart[]>
  }

}
