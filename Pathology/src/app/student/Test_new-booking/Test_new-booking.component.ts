import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { __values } from 'tslib';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Students,Test } from '../../students';
import { Labname } from '../../students';
import {consulant} from '../../students';
import { group } from '../../students';
import {Cityname} from '../../students';
import {testmaster} from '../../students';
import {testname} from '../../students';


@Component({
  selector: 'app-new-booking',
  templateUrl: './Test_new-booking.component.html',
  styleUrls: ['./Test_new-booking.component.css']
})
export class NewBookingComponent implements OnInit {
  test = new Test();
  Students = new Students();
 
  declare consulant : consulant[];
  declare group : group[];
  declare Labname : Labname[]; 
  declare Cityname :Cityname[];
  declare address :Students[];
  declare testmaster:testmaster[];
  declare index:number;
  declare testname :testname[];
  declare id:string;
  declare search:string;


  constructor
  (private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute 
  ) { this.listData = []
  }


  declare addForm: FormGroup;
   declare listData: any[];
  

  resultqtyamt:number=0;
  resultnetamt:number=0;
  totaltable:number=0;
  resultdiscount:number=0;
  resultdiscountper:number=0;
 uname = '';
 
  ngOnInit(): void {
 //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.router.navigate(['']);
 }
    const routerParams = this.routes.snapshot.params;

     //call date 
     this.Students.vchrDate = new Date().toISOString().split('T')[0];
     this.Students.vchrTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});

   //call Group
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
    this.group = data;
    });
    //call Consultant
    this._studentservice.gettableconsultant()
    .subscribe((data:consulant[]) => {
    this.consulant = data;
    });
     
    //call labname
    this._studentservice.gettablelabname()
    .subscribe((data:Labname[]) => {
    this.Labname = data;
    });
     
    //call City
    this._studentservice.gettablecityname()
    .subscribe((data:Cityname[]) => {
    this.Cityname = data;
    });
    //call addres
    this._studentservice.gettableaddress()
    .subscribe((data:Students[]) => {
    this.address = data;
    });
     
     //call Test for Booking
     this._studentservice.gettabletestname()
     .subscribe((data:testmaster[]) => {
     this.testmaster = data;
     });
     if(routerParams["id"] == undefined){
    this.Students.uname = this.uname;
    this.test.uname = this.uname;
     //call maxvchrno
     this._studentservice.getmaxvchrno()
     .subscribe((data:any) => {
      this.Students.vchrNo = data;
      });
      //call uhid
     this._studentservice.getmaxuhid()
     .subscribe((data:any) => {
      this.Students.uhID = data;
      });
  //call todays Sno
  this._studentservice.getmaxtodayssno(this.Students.vchrDate)
  .subscribe((data:any) => {
   this.Students.Sno = data;
   });
    } else {
      this._studentservice.getbookingheading(routerParams["id"],routerParams["dt"])
     .subscribe((data:any) => {
      this.Students = data[0]
     this._studentservice.getbookingdetails(routerParams["id"],routerParams["dt"])
     .subscribe((data:any) => {
      this.Students.tests = data
     })

    })
    }

     
  }
  onSubmit(){
    if(this.validation()){
    const routerParams = this.routes.snapshot.params;
    if(routerParams["id"] == undefined){
      this._studentservice.createbookingh(this.Students)
        .subscribe(data => {
          this._studentservice.createbookingd(this.Students)
            .subscribe(data => {
              var result = confirm("Save Data ....PRINT RECEIPT?");
              if (result==true) {
                this.router.navigate(['receipts/' + this.Students.vchrNo]);
              }
              else{
                this.router.navigate(['/homepage/list']);
              }
          });
      });
    } else {
      this._studentservice.createbookingh(this.Students)
        .subscribe(data => {
          this._studentservice.createbookingd(this.Students)
            .subscribe(data => {
          });
          var result = confirm("Modify Data .....PRINT RECEIPT ?");
          if (result==true) {
            this.router.navigate(['receipts/' + this.Students.vchrNo]);
          }
          else{
            this.router.navigate(['/homepage/list']);
          }
          });
    }
  }
}

  validation(): boolean{
    if(this.Students.pntn == "" || this.Students.pntn == undefined){
      alert("Patient Title is mandatory");
      return false
    }
    if(this.Students.PntName == "" || this.Students.PntName == undefined){
      alert("Patient Name is mandatory");
      return false
    }
    if(this.Students.pntage == "" || this.Students.pntage == undefined){
      alert("Patient Age is mandatory");
      return false
    }
    if(this.Students.labto == "" || this.Students.labto == undefined){
      this.Students.labto = "Self";
    }
    if(this.Students.condoctor == "" || this.Students.condoctor == undefined){
      this.Students.condoctor = "Self";
    }
    if(this.Students.pntcity == "" || this.Students.pntcity == undefined){
      alert("City is mandatory");
      return false
    }
    return true
  }

  public addItem(): void{
  this.Students.tests.push(this.test)
  this.Students.grandTotal = (this.Students.grandTotal + this.test.totalAmt) - this.Students.discountAmt
  this.Students.recamt = this.Students.grandTotal
  this.test.itmName = this.testmaster[this.index].TestName
  this.getNetAmount()
  this.test = new Test()
  document.getElementById("ItemName")?.focus();
}
public getAmount():void{
  this.test.totalAmt = this.test.itmQty * this.test.itmChrgs
}

public getNetAmount():void{
  this.Students.billamt = this.Students.grandTotal - this.Students.discountAmt
  this.Students.recamt = this.Students.grandTotal - this.Students.discountAmt
  this.Students.disper = 0;
}

public getNetAmountByPercent():void{
  this.Students.discountAmt = this.Students.grandTotal * this.Students.disper / 100;
  this.Students.billamt = this.Students.grandTotal * (100 - this.Students.disper) / 100
  this.Students.recamt = this.Students.grandTotal * (100 - this.Students.disper) / 100

}

totaldis(val3:string,val4:string){
//  this.resultnetamt = parseFloat(val3)-parseFloat(val4);
//  this.resultdiscountper = 0;
}
delete(item:any){
 this.Students.tests.forEach((value: any, index: any) => {
 if(value.itmName == item){
   this.Students.tests.splice(index, 1);

   this.Students.grandTotal = (this.Students.grandTotal - value.totalAmt) - this.Students.discountAmt
  this.Students.recamt = this.Students.grandTotal
  this.getNetAmount()
  }
});
}

selectTest(event:any){
  this.index = event.target.value;
  this.test.itmChrgs = Number(this.testmaster[this.index].Price)
  this.Students.sampletype = this.Students.sampletype + "," + this.testmaster[this.index].Testcode  
 // this.test.itmName = this.testmaster[this.index].TestName
  this.getAmount();
}
searchgroup(group:any){
    //call Test
    this._studentservice.gettestnamebygname(group.group_name)
    .subscribe((data:any) => {
     this.testname = data;
    });
}
searchquery(){
  this._studentservice.getuhidsearch(this.search)
  .subscribe((data:any) => {
    this.Students = data[0];
    this.Students.tests = []
    this.Students.grandTotal = 0;
    this.Students.discountAmt = 0;
    this.Students.paymode = "CASH";

    //call date 
  this.Students.vchrDate = new Date().toISOString().split('T')[0];
  this.Students.vchrTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});
  });
 //call Group
 this._studentservice.gettablegroup()
 .subscribe((data:group[]) => {
 this.group = data;
 });
  
 //call labname
 this._studentservice.gettablelabname()
 .subscribe((data:Labname[]) => {
 this.Labname = data;
 });
 
//call maxvchrno
  this._studentservice.getmaxvchrno()
  .subscribe((data:any) => {
   this.Students.vchrNo = data;
   });
   
//call todays Sno
this._studentservice.getmaxtodayssno(this.Students.vchrDate)
.subscribe((data:any) => {
 this.Students.Sno = data;
 });

}
populate(){
if(this.Students.pntn == "Mr" ){
  this.Students.pntsex = "Male"
  this.Students.pntg = "S/o"
}
if(this.Students.pntn == "Master"){
  this.Students.pntsex = "Male"
  this.Students.pntg = "C/o"
}
else if(this.Students.pntn == "Mrs" || this.Students.pntn == "B/o"){
  this.Students.pntsex = "Female"
  this.Students.pntg = "W/o"
}
else if(this.Students.pntn == "Miss" ){
  this.Students.pntsex = "Female"
  this.Students.pntg = "D/o"
}
else if(this.Students.pntn == "Baby"){
  this.Students.pntsex = "Female"
  this.Students.pntg = "C/o"
}
}
agenumber(e: { which: any; keyCode: any; }) {		
  const charCode = e.which ? e.which : e.keyCode;
  
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  alert("OOPs! Only numeric values allowed")	
  }
}
mobilenumber(e: { which: any; keyCode: any; }) {		
  const charCode = e.which ? e.which : e.keyCode;
  
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  alert("OOPs! Only numeric values allowed")	
  }
}
};
