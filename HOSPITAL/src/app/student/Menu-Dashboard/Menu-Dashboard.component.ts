import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { OPD, Students } from '../../students';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './Menu-Dashboard.component.html',
  styleUrls: ['./Menu-Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  declare OPD: OPD[];
  declare Students: Students[];
  opdcount = 0;
  opdtotal = 0;
  testcount = 0;
  testtotal = 0;
  ipdcounta = 0;
  ipdcountd = 0;
  declare vrdt1: string;
  declare from: string;
  declare to: string;


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  public barChartType: ChartType = 'bar';
  declare countBarChartData: ChartData<'bar'>;
  declare incomeBarChartData: ChartData<'bar'>;

  label: string[] = [];
  opdCount: number[] = [];
  opdIncome: number[] = [];
  emrCount: number[] = [];
  emrIncome: number[] = [];
  ipdCount: number[] = [];
  ipdIncome: number[] = [];
  testCount: number[] = [];
  testIncome: number[] = [];

  constructor(private _studentservice: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.vrdt1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]

    //count OPD 
    this._studentservice.getopd(this.vrdt1)
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        for (let i = 0; i < this.OPD.length; i++) {
          this.opdcount = this.opdcount + 1;
          this.opdtotal += Number(this.OPD[i].srvcTax);
        }
      });
    //count ipd admit
    this._studentservice.getipdadmit()
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        for (let i = 0; i < this.OPD.length; i++) {
          this.ipdcounta = this.ipdcounta + 1;

        }
      });
    //count ipd Discharge
    this._studentservice.getipddischarge(this.vrdt1)
      .subscribe((data: OPD[]) => {
        this.OPD = data;
        for (let i = 0; i < this.OPD.length; i++) {
          this.ipdcountd = this.ipdcounta + 1;
        }
      });
    //count Test 
    this._studentservice.gettable(this.vrdt1)
      .subscribe((data: Students[]) => {
        this.Students = data;
        for (let ii = 0; ii < this.Students.length; ii++) {
          this.testcount = this.testcount + 1;
          this.testtotal += Number(this.Students[ii].recamt);
        }
      });

    this.from = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0];
    this.to = formatDate(new Date(), 'yyyy-MM-dd', 'en_US').split('T')[0]

    this.getOpdDetails()
  }


  updateCharts() {
    this.countBarChartData = {
      labels: this.label,
      datasets: [
        { data: this.opdCount, label: 'Opd Count' },
        { data: this.emrCount, label: 'Emergency Count' },
        { data: this.ipdCount, label: 'Ipd Count' },
        { data: this.testCount, label: 'Test Count' },
      ]
    };
    this.incomeBarChartData = {
      labels: this.label,
      datasets: [
        { data: this.opdIncome, label: 'Opd Income' },
        { data: this.emrIncome, label: 'Emergency Income' },
        { data: this.ipdIncome, label: 'Ipd Income' },
        { data: this.testIncome, label: 'Test Income' },
      ]
    };
  }

  addDays = (date: Date, days: number): Date => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  getOpdDetails() {
    this.label = [];
    this.opdCount = [];
    this.opdIncome = [];
    this.emrCount = [];
    this.emrIncome = [];
    this.ipdCount = [];
    this.ipdIncome = [];
    this.testCount = [];
    this.testIncome = [];

    let from = new Date(this.from)
    let to = new Date(this.to)
    const diffTime = to.getTime() - from.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.log(diffDays);
    for (let index = 0; index <= diffDays; index++) {
      let dt = this.addDays(from,index).toISOString().split('T')[0]
      this.label.push(dt);
    }

    this._studentservice.getOpdDetails(this.from, this.to)
      .subscribe((data: any[]) => {
        for (let index = 0; index <= diffDays+1; index++) {
          let j = 0;
          for (j = 0; j < data.length; j++) {
            let dt = this.addDays(from,index).toISOString().split('T')[0]
            if (data[j]['opdDate'] == dt) {
              this.opdCount.push(data[j]['counts']);
              this.opdIncome.push(data[j]['income']);
              break;
            }
          }

          if (j == data.length) {
            this.opdCount.push(0);
            this.opdIncome.push(0);
          }

        }
        this.updateCharts()
      })
    this._studentservice.getIpdDetails(this.from, this.to)
      .subscribe((data: any[]) => {
        for (let index = 0; index < diffDays; index++) {
          let j = 0;
          for (j = 0; j < data.length; j++) {
            let dt = this.addDays(from,index).toISOString().split('T')[0]
            if (data[j]['opdDate'] == dt) {
              this.ipdCount.push(data[j]['counts']);
              this.ipdIncome.push(data[j]['income']);
              break;
            }
          }

          if (j == data.length) {
            this.ipdCount.push(0);
            this.ipdIncome.push(0);
          }

        }
        this.updateCharts()

      })

      this._studentservice.getEmrDetails(this.from, this.to)
      .subscribe((data: any[]) => {
        for (let index = 0; index < diffDays; index++) {
          let j = 0;
          for (j = 0; j < data.length; j++) {
            let dt = this.addDays(from,index).toISOString().split('T')[0]
            if (data[j]['opdDate'] == dt) {
              this.emrCount.push(data[j]['counts']);
              this.emrIncome.push(data[j]['income']);
              break;
            }
          }

          if (j == data.length) {
            this.emrCount.push(0);
            this.emrIncome.push(0);
          }

        }
        this.updateCharts()

      })

      this._studentservice.getTestsDetails(this.from, this.to)
      .subscribe((data: any[]) => {
        for (let index = 0; index < diffDays; index++) {
          let j = 0;
          for (j = 0; j < data.length; j++) {
            let dt = this.addDays(from,index).toISOString().split('T')[0]
            if (data[j]['opdDate'] == dt) {
              this.testCount.push(data[j]['counts']);
              this.testIncome.push(data[j]['income']);
              break;
            }
          }

          if (j == data.length) {
            this.testCount.push(0);
            this.testIncome.push(0);
          }

        }
        this.updateCharts()

      })
  }

}
