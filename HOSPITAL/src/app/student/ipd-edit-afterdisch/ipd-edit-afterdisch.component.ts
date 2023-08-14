import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City, IPDPAYMENT, OPD, Test, Ward, billdetails, billheading, consulant, department, group, roomshift, testmaster } from 'src/app/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-ipd-edit-afterdisch',
  templateUrl: './ipd-edit-afterdisch.component.html',
  styleUrls: ['./ipd-edit-afterdisch.component.css']
})
export class IpdEditAfterdischComponent implements OnInit {

  OPD1 = new OPD();
  uname = '';
  declare group: group[];
  declare consulant: consulant[];
  declare rconsulant: consulant[];
  declare department: department[];
  declare Ward: Ward[];
  declare room: Ward[];
  Ward1 = new Ward();
  declare Cityname: City[];
  heads = new billheading();
  allowedSave = false;
  details = new billdetails();
  declare testmaster: testmaster[];
  declare index: number;
  test = new Test();
  dueAmount = 0;
  heads1 = new billheading();
  billamt = 0;
  vchrNo = "";
  declare Details: IPDPAYMENT[];
  totalrecamt = 0;
  totalrefund = 0;
  totalnetamt = 0;


  constructor(private _studentservice: StudentsService,
    private router: Router,
    private routes: ActivatedRoute) { }

  ngOnInit(): void {

    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }

    const routerParams = this.routes.snapshot.params;
    this.OPD1.dcmntNo = routerParams['d'];
    this.vchrNo = routerParams['v'];
    this.OPD1.uhID = routerParams['u'];
    this.OPD1.opdDate = routerParams["opdDate"]

    //call company for f.years
    this._studentservice.getCompany()
      .subscribe((data: any) => {
        this.OPD1.Years = data[0].years;
        this.heads.Years = this.OPD1.Years;
      });

    this.OPD1.payment = "Y";
    this.OPD1.dctrPrscrptn = "NA";
    this.OPD1.nature = "IPD";
    this.OPD1.dcmntType = "IPD";



    //paymentmode
    this._studentservice.gettablegroup()
      .subscribe((data: group[]) => {
        this.group = data;
        this.OPD1.paymode = "CASH";
      });

    //call Department
    this._studentservice.gettabledepart()
      .subscribe((data: department[]) => {
        this.department = data;
      });

    //call Ward
    this._studentservice.gettableward()
      .subscribe((data: any) => {
        this.Ward = data;
      });

    //call RConsultant
    this._studentservice.getopdrconsultant()
      .subscribe((data: any) => {
        this.rconsulant = data;
      });

    //call City
    this._studentservice.gettableCity()
      .subscribe((data: City[]) => {
        this.Cityname = data;
        this.OPD1.pntCity = this.Cityname[0].citynam
      });

    //call Test for Booking
    this._studentservice.gettabletestname()
      .subscribe((data: testmaster[]) => {
        this.testmaster = data;
      });


    this._studentservice.getipdreg1(this.OPD1.dcmntNo, this.OPD1.opdDate)
      .subscribe((data: any) => {
        this.OPD1 = data[0]
        this.OPD1.dcmntType = "IPD";
        //call Consultant
        this._studentservice.getopdconsultant(this.OPD1.caseType)
          .subscribe((data: any) => {
            this.consulant = data;
          });

        this._studentservice.getipdbilldetailsdischarge(this.vchrNo, this.OPD1.Years)
          .subscribe((data: any) => {
            this.heads.tests = data;
            this.heads.tests = data;
            this.heads.vchrNo = data[0].vchrNo;

            for (let i = 0; i < this.heads.tests.length; i++) {
              this.heads.grandTotal += parseInt(this.heads.tests[i].totalAmt.toString());
            }

            if (this.heads.tests.length > 0) {
              this.allowedSave = true;
            }

            //call roomhistory
            this._studentservice.getshifttable(this.OPD1.dcmntNo, this.OPD1.uhID)
              .subscribe((data: any) => {
                this.Ward1.category = data[0].rCat;
                this.selectWard();
                this.Ward1.Bedno = data[0].bedno;
                this.Ward1.roomNo = data[0].roomNo;
              });


            this._studentservice.getipdbillheadingdischarge(this.vchrNo, this.OPD1.Years)
              .subscribe((data: any) => {

                this.heads1 = data[0];
                this.billamt = this.heads1.grandTotal - this.heads1.discountAmt;
              });

            //for paymentdetails load
            this._studentservice.getipdpaymentdetails(this.OPD1.dcmntNo, this.OPD1.uhID)
              .subscribe((data: IPDPAYMENT[]) => {
                this.Details = data;

                for (let i = 0; i < this.Details.length; i++) {
                  this.totalrecamt += parseInt(this.Details[i].advanceReceived.toString());
                  this.totalrefund += parseInt(this.Details[i].Refundpayment.toString());
                }
                this.totalnetamt = this.totalrecamt - this.totalrefund;
              });



          });


      });



    this.OPD1.opdTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });

  }

  populate() {
    if (this.OPD1.pntn == "Mr") {
      this.OPD1.pntSex = "Male"
      this.OPD1.pntg = "S/o"
      this.OPD1.agey = "Years"
    }
    if (this.OPD1.pntn == "Master") {
      this.OPD1.pntSex = "Male"
      this.OPD1.pntg = "C/o"
      this.OPD1.agey = "Years"
    }
    else if (this.OPD1.pntn == "Mrs" || this.OPD1.pntn == "B/o") {
      this.OPD1.pntSex = "Female"
      this.OPD1.pntg = "W/o"
      this.OPD1.agey = "Years"

    }
    else if (this.OPD1.pntn == "Miss") {
      this.OPD1.pntSex = "Female"
      this.OPD1.pntg = "D/o"
      this.OPD1.agey = "Years"

    }
    else if (this.OPD1.pntn == "Baby") {
      this.OPD1.pntSex = "Female"
      this.OPD1.pntg = "C/o"
      this.OPD1.agey = "Years"
    }
  }

  selectdepartment() {
    //call Consultant
    this._studentservice.getopdconsultant(this.OPD1.caseType)
      .subscribe((data: any) => {
        this.consulant = data;

      });
  }

  delete(item: any) {
    this.heads.tests.forEach((value: any, index: any) => {
      if (value.itmName == item) {
        this.heads.tests.splice(index, 1);

        this.heads.grandTotal = (this.heads.grandTotal - value.totalAmt)

        if (this.heads.tests.length < 1) {
          this.allowedSave = false;
        }
      }
    });
  }

  moveUp(num: any) {
    if (num == 0) {
      return
    }
    var temp = this.heads.tests[num - 1];
    this.heads.tests[num - 1] = this.heads.tests[num];
    this.heads.tests[num] = temp;

  }
  moveDown(num: any) {
    if (num < this.heads.tests.length - 1) {
      var tmp = this.heads.tests[num + 1];
      this.heads.tests[num + 1] = this.heads.tests[num];
      this.heads.tests[num] = tmp;
    }
  }

  public addItem(): void {

    this.heads.tests.push(this.details)
    if (this.heads.tests.length > 0) {
      this.allowedSave = true;
    }
    this.heads.grandTotal = (this.heads.grandTotal + this.details.totalAmt)
    this.details.itmName = this.testmaster[this.index].chrgsName
    this.details = new billdetails()
    document.getElementById("ItemName")?.focus();
  }

  public getAmount(): void {
    this.details.totalAmt = this.details.itmQty * this.details.itmChrgs - this.details.itmDiscntPrsnt
  }
  public getAmountdp(): void {
    this.details.itmDiscntPrsnt = this.details.itmQty * this.details.itmChrgs * this.details.disp / 100;
    this.getAmount();
  }
  public getAmountdamt(): void {
    this.details.disp = 0;
    this.getAmount();
  }

  selectTest() {

    this.index = 0;
    for (let i = 0; i < this.testmaster.length; i++) {
      if (this.testmaster[i].chrgsName.includes(this.details.itmName)) {
        this.index = i;
        break;
      }
    }
    this.details.itmChrgs = Number(this.testmaster[this.index].chrgAmt)
    this.details.totalAmt = Number(this.testmaster[this.index].chrgAmt)
    this.details.itmQty = 1;
    this.details.Remark = 'Day';

  }

  selectWard() {
    //call Consultant
    this._studentservice.getwardroom(this.Ward1.category)
      .subscribe((data: any) => {
        this.room = data;
        this.Ward1.roomNo = this.room[0].roomNo;
        this.Ward1.Bedno = this.room[0].Bedno;

      });
  }

  updatePayment() {

    this.billamt = this.heads.grandTotal - this.heads1.discountAmt;
    this.heads1.paydue = this.billamt - this.totalnetamt;
  }

  updateBill() {
    this.totalrecamt = 0;
    this.totalrefund = 0;
    for (let i = 0; i < this.Details.length; i++) {
      this.totalrecamt += parseInt(this.Details[i].advanceReceived.toString());
      this.totalrefund += parseInt(this.Details[i].Refundpayment.toString());
    }
    this.totalnetamt = this.totalrecamt - this.totalrefund;
    this.updatePayment();
  }

  addFoc() {
    if (this.totalrecamt <= 0) {
      alert("FOC not allowed")
    }
    this.heads1.foc = this.heads1.paydue
    this.heads1.paydue = 0
  }

  addSet() {
    this.heads1.set = this.heads1.paydue
    this.heads1.paydue = 0
  }

  updateAll() {
    this.OPD1.corrtime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" });
    const routerParams = this.routes.snapshot.params;
    //Patient Information
    this._studentservice.ipd_update(this.OPD1)
      .subscribe(data => {
        //Payment 
        this._studentservice.ipd_payment_afterdischarge(this.Details, this.OPD1)
          .subscribe(data => {
            //Bill heading and Room History
            this._studentservice.ipd_bill_afterdischarge(this.heads1,this.Ward1)
              .subscribe(data => {
                //bill Details
                this._studentservice.ipd_billdetails_afterdischarge(this.heads, this.OPD1)
                  .subscribe(data => {
                   
                  });
              });
          });
      });
    alert("Thanks")
    // });

    // console.log(this.OPD1)
    console.log(this.Ward1)
    // console.log(this.heads)
    // console.log(this.heads1.tests)
    // console.log(this.billamt)
    //   console.log(this.Details)

  }
}
