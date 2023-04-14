import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { __values } from 'tslib';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import { department, Students,Test } from '../../students';
import { Labname } from '../../students';
import {consulant} from '../../students';
import { group } from '../../students';
import {Cityname} from '../../students';
import {testmaster} from '../../students';
import {testname} from '../../students';
import { readOnlyMode } from '@syncfusion/ej2-angular-richtexteditor';


@Component({
  selector: 'app-new-booking',
  templateUrl: './Test-Booking.component.html',
  styleUrls: ['./Test-Booking.component.css']
})
export class NewBookingComponent implements OnInit {
  test = new Test();
  Students = new Students();
 
  declare consulant : consulant[];
  declare group : group[];
  declare Labname : Labname[]; 
  declare Cityname :Cityname[];
  declare testmaster:testmaster[];
  declare department : department[];
  declare index:number;
  declare testname :testname[];
  declare id:string;
  declare search:string;


  constructor
  ( private _studentservice:StudentsService,
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

    //call company for f.years
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.Students.Years = data[0].years;
    });
    this.Students.uname = this.uname;
    //call Consultant
    this._studentservice.gettableconsultant()
    .subscribe((data:consulant[]) => {
    this.consulant = data;
    });
    
   //paymentmode
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
    this.group = data;
    });
    
   //call Department
   this._studentservice.gettabledepart()
   .subscribe((data:department[]) => {
   this.department = data;
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
     
     //call Test for Booking
     this._studentservice.gettabletestname()
     .subscribe((data:testmaster[]) => {
     this.testmaster = data;
     });

     if(routerParams["id"] == undefined){
      this.Students.uname = this.uname;
      this.test.uname = this.uname;
      //direct patient 
      this.Students.dcmntType = "Direct"
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


     //call date 
     this.Students.vchrDate = new Date().toISOString().split('T')[0];
     this.Students.vchrTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});

    } 
    else if(routerParams["ty"] == "OPD")
      {
        this.Students.dcmntType = "OPD"
        this.Students.uname = this.uname;
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

     //call date 
     this.Students.vchrDate = new Date().toISOString().split('T')[0];
     this.Students.vchrTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});
 
     this._studentservice.Testgetopdreg(routerParams["id"],routerParams["dt"])
     .subscribe((data:any) => {

      this.Students.uhID = data[0].uhID;
      this.Students.dcmntNo = routerParams["id"];
      this.Students.pntn = data[0].pntn;
      this.Students.PntName= data[0].pntName;
      this.Students.pntage = data[0].pntAgeYrs;
      this.Students.pntyears = data[0].agey;
      this.Students.pntsex = data[0].pntSex;
      this.Students.pntg = data[0].pntg;
      this.Students.Pntgname = data[0].pntGrdn;
      this.Students.pntadd = data[0].pntAdrs1
      this.Students.pntmobile = data[0].pntMobile;
      this.Students.email = data[0].email;
      this.Students.pntcity = data[0].pntCity;
      this.Students.department = data[0].caseType;
      this.Students.condoctor = data[0].dctrVisited;

     })
      }
      else if(routerParams["ty"] == "IPD")
        {
          this.Students.dcmntType = "IPD"
          this.Students.uname = this.uname;
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
  
       //call date 
       this.Students.vchrDate = new Date().toISOString().split('T')[0];
       this.Students.vchrTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});
   
       this._studentservice.Testgetopdreg(routerParams["id"],routerParams["dt"])
       .subscribe((data:any) => {
  
        this.Students.uhID = data[0].uhID;
        this.Students.dcmntNo = routerParams["id"];
        this.Students.pntn = data[0].pntn;
        this.Students.PntName= data[0].pntName;
        this.Students.pntage = data[0].pntAgeYrs;
        this.Students.pntyears = data[0].agey;
        this.Students.pntsex = data[0].pntSex;
        this.Students.pntg = data[0].pntg;
        this.Students.Pntgname = data[0].pntGrdn;
        this.Students.pntadd = data[0].pntAdrs1
        this.Students.pntmobile = data[0].pntMobile;
        this.Students.email = data[0].email;
        this.Students.pntcity = data[0].pntCity;
        this.Students.department = data[0].caseType;
        this.Students.condoctor = data[0].dctrVisited;
  
       })
        }
      else
      {
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
              var result = confirm("Print Receipt ?");
              if (result==true) {
                this.router.navigate(['receipts/' + this.Students.vchrNo]);
            }
            else
            {
              this.router.navigate(['/homepage/list']);
            }
          });
      });
    }
    else if(routerParams["ty"] == "OPD")
      {
        this._studentservice.createbookingh(this.Students)
        .subscribe(data => {
          this._studentservice.createbookingd(this.Students)
            .subscribe(data => {
              var result = confirm("Print Receipt ?");
              if (result==true) {
                this.router.navigate(['receiptsb/' + this.Students.vchrNo]);
            }
            else
            {
              this.router.navigate(['/homepage/list']);
            }
          });
      });
      }
    else {
      this._studentservice.createbookingh(this.Students)
        .subscribe(data => {
          this._studentservice.createbookingd(this.Students)
            .subscribe(data => {
          });
              alert('Records Modify...Thanks');
              this.router.navigate(['/homepage/list']);
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
  selectTest(event:any){
    this.index = event.target.value;
    for(let i = 0; i < this.testmaster.length;i++){
      if(this.testmaster[i].chrgsName == event.target.value){
          this.index = i;
      }
    
    this.test.itmChrgs = this.testmaster[this.index].chrgAmt
    this.Students.sampletype = this.Students.sampletype + "," + this.testmaster[this.index].testcode;
    this.test.chtype = this.testmaster[this.index].type; 
    this.Students.Reporttype = this.testmaster[this.index].type;
    }
    this.getAmount();
  }
  public addItem(): void{
  this.Students.tests.push(this.test)
  this.Students.grandTotal = (this.Students.grandTotal + this.test.totalAmt) - this.Students.discountAmt
  this.Students.balamt = 0;
  this.test.itmName = this.testmaster[this.index].chrgsName
  this.getNetAmount()
  this.test = new Test()
  document.getElementById("ItemName")?.focus();
  this.Students.del = "Run"
  this.Students.duerec = "N";
}
public getAmount():void{
  this.test.totalAmt = this.test.itmQty * this.test.itmChrgs
}
public getPaidAmount():void{
  this.Students.balamt = this.Students.billamt - this.Students.recamt;
}
public getdisper():void{
  this.Students.discountAmt = this.Students.grandTotal * this.Students.disper/100;
  this.getNetAmount()
}
public getNetAmount():void{
  this.Students.billamt = this.Students.grandTotal - this.Students.discountAmt
  this.Students.recamt = this.Students.grandTotal - this.Students.discountAmt
 
}
public getdiscAmount():void{
  this.Students.disper = 0;
  this.Students.billamt = this.Students.grandTotal - this.Students.discountAmt
  this.Students.recamt = this.Students.grandTotal - this.Students.discountAmt
 
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


searchquery(){
  this._studentservice.getuhidsearch(this.search)
  .subscribe((data:any) => {
  this.Students= data[0];
  this.Students.tests = []
  this.Students.PntName = data[0].pntName;
  this.Students.Pntgname = data[0].pntGrdn;
  this.Students.pntmobile = data[0].pntMobile;
  this.Students.pntadd = data[0].pntAdrs1;
  this.Students.pntcity = data[0].pntCity;
  this.Students.pntsex = data[0].pntSex;
  this.Students.pntage = data[0].pntAgeYrs;
  this.Students.pntyears = data[0].agey;
  this.Students.dcmntType = data[0].dcmntType;
  this.Students.condoctor = data[0].dctrVisited;

    //call todays Sno
    this._studentservice.getmaxtodayssno(this.Students.vchrDate)
    .subscribe((data:any) => {
    this.Students.Sno = data;
    });
    //call maxvchrno
     this._studentservice.getmaxvchrno()
     .subscribe((data:any) => {
      this.Students.vchrNo = data;
      });
      this.Students.paymode = "CASH";
      this.Students.grandTotal = 0;
      this.Students.disper = 0;
      this.Students.discountAmt = 0;
      this.Students.billamt = 0;

     //call date 
     this.Students.vchrDate = new Date().toISOString().split('T')[0];
     this.Students.vchrTime = new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric",  minute: "numeric"});

});

}
selectdepartment(){
  //call Consultant
  this._studentservice.getopdconsultant(this.Students.department)
  .subscribe((data:any) => {
  this.consulant = data;
});
}   
patienttypevalidation(){
  if(this.Students.dcmntType == "Direct"){
  //call uhid
  this._studentservice.getmaxuhid()
  .subscribe((data:any) => {
   this.Students.uhID = data;
   });

  this.Students.PntName = "";
  this.Students.Pntgname = "";
  this.Students.pntmobile = "";
  this.Students.pntadd = "";
  this.Students.pntcity = "";
  this.Students.pntsex = "";
  this.Students.pntage = "";
  this.Students.pntyears = "";
  this.Students.dcmntType = "";
  this.Students.condoctor = "--Select--";
  this.Students.pntn = "";
  }
  else if(this.Students.dcmntType == "OPD"){
// this.Students.PntName
  }
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
};
