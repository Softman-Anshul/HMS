import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Bill,Test } from './bill';

@Component({
  selector: 'app-samplebill',
  templateUrl: './samplebill.component.html',
  styleUrls: ['./samplebill.component.css']
})
export class SamplebillComponent implements OnInit {

  bill = new Bill();
  test = new Test();

  constructor(
    private router: Router,
    private routes : ActivatedRoute 
  ) {}

  ngOnInit(): void {
  }

  public addItem(): void{
    this.bill.tests.push(this.test)
    this.bill.tests.forEach(element => {
      this.bill.Totalamt = this.bill.Totalamt + element.Amount
    });
    this.bill.Netamt = this.bill.Totalamt - this.bill.Discount
    this.test = new Test()
  }

  public submit(): void{
    console.log(this.bill)
  }

  public getAmount():void{
    this.test.Amount = this.test.Qty * this.test.Rate
  }

  public getNetAmount():void{
    this.bill.Netamt = this.bill.Totalamt - this.bill.Discount
  }
}
