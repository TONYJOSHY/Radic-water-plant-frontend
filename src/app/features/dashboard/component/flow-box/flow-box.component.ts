import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { catchError, Observable, of, shareReplay, Subject, takeUntil } from 'rxjs';
import { FlowInfo } from '../../models/flowInfo.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-flow-box',
  templateUrl: './flow-box.component.html',
  styleUrls: ['./flow-box.component.scss']
})
export class FlowBoxComponent implements OnInit, OnDestroy {

  flowInfo$!: Observable<FlowInfo[]>;
  subscribe = new Subject<void>();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.flowInfo$ = this.dashboardService.getInfo()
      .pipe(
        shareReplay(),
        takeUntil(this.subscribe),
        catchError(() => of([]))
      )
  }

  ngOnDestroy() {
    this.subscribe.next();
    this.subscribe.complete();
  }

}


