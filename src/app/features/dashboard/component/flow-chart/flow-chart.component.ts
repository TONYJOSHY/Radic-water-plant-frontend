import { Component, ElementRef, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { jsPDF } from "jspdf";
import { OptionList } from 'src/app/shared/models/options.model';
import { UtilityService } from 'src/app/shared/service/utility.service';


@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.scss']
})
export class FlowChartComponent {

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
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Pipeline 2',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: false,
      },
      {
        data: [18, 48, 77, 90, 95, 27, 40],
        label: 'Pipeline 3',
        // yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: false,
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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

  downloadAsPDF() {
    let canvas: any = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let imgData = context.toDataURL("image/jpeg", 1.0);
    const doc = new jsPDF();
    doc.addImage(imgData);
    doc.save("download.pdf");
  }

  filterSource(event: OptionList) {
    this.selectedFilter = event
  }

}
