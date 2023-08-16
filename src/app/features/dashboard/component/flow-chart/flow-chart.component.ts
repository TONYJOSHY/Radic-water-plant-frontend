import { ChangeDetectorRef, Component, ElementRef, inject, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { jsPDF } from "jspdf";
import { Subject } from 'rxjs';
import { OptionList } from 'src/app/shared/models/options.model';
import { UtilityService } from 'src/app/shared/service/utility.service';
import { DashboardService } from '../../service/dashboard.service';


@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.scss']
})
export class FlowChartComponent implements OnInit, OnDestroy {

  @ViewChild('pdfTable') pdfTable!: any;

  optionList: OptionList[] = inject(UtilityService).dateFilter;
  selectedFilter: OptionList = this.optionList[0]

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Pipeline 1',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: false,
      },
      // {
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   label: 'Pipeline 2',
      //   backgroundColor: 'rgba(77,83,96,0.2)',
      //   borderColor: 'rgba(77,83,96,1)',
      //   pointBackgroundColor: 'rgba(77,83,96,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(77,83,96,1)',
      //   fill: false,
      // },
      // {
      //   data: [18, 48, 77, 90, 95, 27, 40],
      //   label: 'Pipeline 3',
      //   // yAxisID: 'y1',
      //   backgroundColor: 'rgba(255,0,0,0.3)',
      //   borderColor: 'red',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: false,
      // },
    ],
    labels: [],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    elements: {
      line: {
        tension: 0,
      },
    },
    aspectRatio: 1.5
  };

  public lineChartLegend = true;
  // chartData: any;
  subscribe = new Subject<void>();

  constructor(private dashboardService: DashboardService,
    private utilityService: UtilityService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this.dashboardService.getChart({ timeframe: this.selectedFilter.id })
      .subscribe((res) => {
        console.log(res)
        // this.chartData = res;
        this.setLabel();
        this.lineChartData.datasets[0].data = res.map((val) => val.temp);
      })
  }

  ngOnDestroy() {
    this.subscribe.next();
    this.subscribe.complete();
  }

  downloadAsPDF() {
    let canvas = document.getElementById('pdfChart') as HTMLElement;
    const doc = new jsPDF({
      unit: 'cm',
      format: [ 1500, 1700 ]
    });
    doc.html(canvas,  {
      callback: function (doc) {
        doc.deletePage(doc.getNumberOfPages());
        let name = `Dashboard - ${ new Date().getTime() }`
        doc.save(name);
      },
      x: 10,
      y: 20,
      // width: 900
    })
  }

  filterSource(event: OptionList) {
    this.selectedFilter = event;
    this.getChartData()
  }

  setLabel() {
    console.log(this.selectedFilter)
    if (this.selectedFilter.id == 101) this.lineChartData.labels = this.utilityService.hourArray;
    else if (this.selectedFilter.id == 111) this.lineChartData.labels = this.utilityService.monthArray;
    this.cdr.detectChanges();
  }

}
