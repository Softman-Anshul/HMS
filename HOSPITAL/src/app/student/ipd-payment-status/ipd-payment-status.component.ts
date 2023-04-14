import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-ipd-payment-status',
  templateUrl: './ipd-payment-status.component.html',
  styleUrls: ['./ipd-payment-status.component.css']
})
export class IpdPaymentStatusComponent implements OnInit {
  declare OPD : OPD[];
  uname = '';

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router,
    ) {
    }

  ngOnInit(): void {
         this._studentservice.getipdpaymentstatus()
        .subscribe((data:OPD[]) => {
          this.OPD= data;
      });
  }
  onBtnPrintClick(){
  // let printData = document.getElementById("printSection");
  // document.body.appendChild(printData);
  window.print();
}
onSubmit(){
  this._studentservice.ipdpaymentstatus(this.OPD)
  .subscribe((data:any) => {
    this.Router.navigate(['paymentstatus_slip/']);
  });
}

}
