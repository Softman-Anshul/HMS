import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import { Dialog } from '@angular/cdk/dialog';;

@Component({
  selector: 'app-ipd-payment-status-slip',
  templateUrl: './ipd-payment-status-slip.component.html',
  styleUrls: ['./ipd-payment-status-slip.component.css']
})
export class IpdPaymentStatusSlipComponent implements OnInit {
  declare OPD : OPD[];
  OPD1 = new OPD();
  uname = '';

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router,
    ) {
    }
  ngOnInit(): void {
    this._studentservice.printipdpaymentstatus()
    .subscribe((data:any) => {
      this.OPD1= data[0];
      this.OPD = data;
  });
  }
  printComponent() {
    const element = document.getElementById("print")
    if (element != null) {
      let body = document.createElement("body")
      body.appendChild(element)
      document.body = body;
      window.print();
      window.location.reload()
    }
  }
}
