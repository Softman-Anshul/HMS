import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { IPDPAYMENT, OPD} from '../../students';
import {testmaster,Test} from '../../students';
import { billheading,billdetails} from '../../students';

@Component({
  selector: 'app-ipd-billdischarge',
  templateUrl: './ipd-billdischarge.component.html',
  styleUrls: ['./ipd-billdischarge.component.css']
})
export class IPDBilldischargeComponent implements OnInit {
  test = new Test();
  OPD = new OPD();
  uname = '';
  declare selected:billheading;
  declare testmaster:testmaster[];
  declare index:number;
  // Students = new Students();
  heads = new billheading();
  details = new billdetails();
  declare Details : IPDPAYMENT[];
  totalrecamt=0;
  totalrefund=0;
  totalnetamt=0;


  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
    public dialogRef: MatDialogRef<IPDBilldischargeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD},
   ) {
    this.OPD = data.OPD
    this.heads.dcmntNo = this.OPD.dcmntNo;
    this.heads.uhID = this.OPD.uhID;
    this.heads.roomno = String(this.OPD.roomNo)
    this.heads.bedno = String(this.OPD.Bedno)
    // this.heads.roomno = this.OPD.roomNo;
    }


  ngOnInit(): void {
    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.Router.navigate(['']);
 }

    const routerParams = this.routes.snapshot.params;
    this.heads.uname = this.uname;
    this.heads.Status = "Normal"
    this.heads.vchrNo = 0;
 

  //call bill
  this._studentservice.getipdpaymentdetails(this.OPD.dcmntNo,this.OPD.uhID)
       .subscribe((data:IPDPAYMENT[]) => {
       this.Details= data;

       for(let i=0;i<this.Details.length;i++){
        this.totalrecamt +=  parseInt(this.Details[i].advanceReceived.toString());
        this.totalrefund +=  parseInt(this.Details[i].Refundpayment.toString());
       }
      this.heads.adv = this.totalrecamt - this.totalrefund;
    });

  
  this.heads.vchrDate = new Date().toISOString().split('T')[0];
  this.heads.distime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});
   //call company for f.years
   this._studentservice.getCompany()
   .subscribe((data:any) => {
   this.OPD.Years = data[0].years;
   this.heads.Years = this.OPD.Years;
  });
  
//call maxvchrno
this._studentservice.ipdgetmaxbillno()
.subscribe((data:any) => {
 this.heads.vchrNo = data;
 });
  //call Test for Booking
  this._studentservice.gettabletestname()
  .subscribe((data:testmaster[]) => {
  this.testmaster = data;
  });

  //call save entry
  this._studentservice.getipdbilldetails(this.OPD.dcmntNo,this.OPD.uhID)
  .subscribe((data:any) => {

    if(data == undefined){

    }
    else{
  this.heads.tests = data;

  for(let i=0;i<this.heads.tests.length;i++){
    this.heads.grandTotal +=  parseInt(this.heads.tests[i].totalAmt.toString());
   }

   this.heads.paydue = this.heads.grandTotal - this.heads.adv - this.heads.discountAmt - this.heads.foc;
  }
});
  

  }

  delete(item:any){
    this.heads.tests.forEach((value: any, index: any) => {
    if(value.itmName == item){
      this.heads.tests.splice(index, 1);
   
      this.heads.grandTotal = (this.heads.grandTotal - value.totalAmt)
     }
   });
   }
 
  public getNetAmount():void{
    this.heads.paydue = this.heads.grandTotal - this.heads.adv - this.heads.discountAmt - this.heads.foc;
  }

  public getfoc():void{
    if(this.heads.adv == 0)
    {
      this.heads.paydue = this.heads.grandTotal - this.heads.adv - this.heads.discountAmt - this.heads.foc;
    }
    else{
      this.heads.foc = 0;
      alert("This Patient have some payment ...You can not make foc Patient.. Sorry !!")
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  moveUp(num:any){
        var temp = this.heads.tests[num-1];
        this.heads.tests[num-1]= this.heads.tests[num];
        this.heads.tests[num] = temp;

  }
  moveDown(num:any){

    if (num < this.heads.tests.length - 1) {
      var tmp = this.heads.tests[num + 1];
      this.heads.tests[num + 1] = this.heads.tests[num];
      this.heads.tests[num] = tmp;
    }
  }
  onsave(){
      const routerParams = this.routes.snapshot.params; 
      if(this.heads.Status == "")
      {
      alert("Result Must be Entered....Sorry !! ")
      }
      else{
        this._studentservice.dischargebilling(this.heads)
          .subscribe(data => {
            this._studentservice.dischargebillingdetails(this.heads)
          .subscribe(data => {
                var result = confirm("Bill Print ?");
                if (result==true) {
              this.Router.navigate(['ipdbill2/' + this.heads.dcmntNo,this.heads.uhID]);
              }
              else
              {
                this.Router.navigate(['/homepage/ipdlist']);
                window.location.reload();

              }
            });
           });
      }
  }
}
