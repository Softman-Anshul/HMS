import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Cityname, IPDPAYMENT, Ward} from '../../students';
import {consulant} from '../../students';
import { Students,OPD,department } from '../../students';
import { group,company } from '../../students';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-ipd-reg-edit',
  templateUrl: './ipd-reg-edit.component.html',
  styleUrls: ['./ipd-reg-edit.component.css']
})
export class IpdRegEditComponent implements OnInit {
  declare Cityname :Cityname[];
  declare company :company[];
  declare consulant : consulant[];
  declare rconsulant : consulant[];
  declare department : department[];
  declare group : group[];
  declare OPD : OPD[];
  OPD1 = new OPD();
  dcmntNo = new OPD();
  opdDate = new OPD();
  dcmntType = new OPD();
  declare search:string;
  Students = new Students();
  declare index:number;
  declare Ward : Ward[];
  declare room : Ward[];
  Ward1 = new Ward();
  Deposit = new IPDPAYMENT();
  uname = '';
  day=0;
  ptype = "General"
  type = "OPD";

  constructor(private _studentservice:StudentsService,
    private router: Router,
    public dialogRef: MatDialogRef<IpdRegEditComponent>,
    private routes : ActivatedRoute,
     @Inject(MAT_DIALOG_DATA) public data: {OPD:OPD,OPD2:OPD,OPD3:OPD },
    ) {
     this.dcmntNo = data.OPD
     this.opdDate = data.OPD2
     this.dcmntType = data.OPD3

     }

  ngOnInit(): void {
 //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.router.navigate(['']);
 }
    const routerParams = this.routes.snapshot.params;
    this.OPD1.uname = this.uname;
    this.Deposit.uname = this.uname;
    this.Ward1.uname = this.uname;

    //call company for f.years
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.OPD1.Years = data[0].years;
    this.Deposit.Years = data[0].years;
    this.Ward1.Years = data[0].years;

    });
    this.OPD1.payment = "Y";
    this.OPD1.dctrPrscrptn = "NA";
    this.OPD1.nature = "IPD";
    this.OPD1.dcmntType = "IPD";
    
    //paymentmode
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
    this.group = data;
    this.Deposit.paymode = data[0].paymode;  
    });
     //call Department
     this._studentservice.gettabledepart()
    .subscribe((data:department[]) => {
    this.department = data;
    });

    //call RConsultant
  this._studentservice.getopdrconsultant()
  .subscribe((data:any) => {
  this.rconsulant = data;
});
     //call City
     this._studentservice.gettablecityname()
     .subscribe((data:Cityname[]) => {
     this.Cityname = data;
     });

     this._studentservice.getipdreg(this.dcmntNo,this.opdDate)
     .subscribe((data:any) => {
      this.OPD1 = data[0]
      this.OPD1.dcmntType = "IPD";
      this.OPD1.dctrVisited = data[0].dctrVisited;
      this.OPD1.caseType = data[0].caseType;

     });
     

    }
populate(){
  if(this.OPD1.pntn == "Mr" ){
    this.OPD1.pntSex = "Male"
    this.OPD1.pntg = "S/o"
    this.OPD1.agey = "Years"
  }
  if(this.OPD1.pntn == "Master"){
    this.OPD1.pntSex = "Male"
    this.OPD1.pntg = "C/o"
    this.OPD1.agey = "Years"
  }
  else if(this.OPD1.pntn == "Mrs" || this.OPD1.pntn == "B/o"){
    this.OPD1.pntSex = "Female"
    this.OPD1.pntg = "W/o"
    this.OPD1.agey = "Years"

  }
  else if(this.OPD1.pntn == "Miss" ){
    this.OPD1.pntSex = "Female"
    this.OPD1.pntg = "D/o"
    this.OPD1.agey = "Years"

  }
  else if(this.OPD1.pntn == "Baby"){
    this.OPD1.pntSex = "Female"
    this.OPD1.pntg = "C/o"
    this.OPD1.agey = "Years"
  }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    if(this.validation()){
            const routerParams = this.routes.snapshot.params;
        this._studentservice.ipd_update(this.OPD1)
          .subscribe(data => {
          alert("Thanks....Update Patient")
           });
    }
  }
  validation(): boolean{
    if(this.OPD1.pntn == "" || this.OPD1.pntn == undefined){
      alert("Patient Title is mandatory");
      return false
    }
    if(this.OPD1.pntName == "" || this.OPD1.pntName == undefined){
      alert("Patient Name is mandatory");
      return false
    }
    if(this.OPD1.agey == "" || this.OPD1.agey == undefined){
      alert("Patient Age is mandatory");
      return false
    }
    if(this.OPD1.pntCity == "" || this.OPD1.pntCity == undefined){
      alert("City is mandatory");
      return false
    }
    if(this.OPD1.caseType == "" || this.OPD1.caseType == undefined){
      alert("Department is mandatory");
      return false
    }
    if(this.OPD1.isOldPnt == "" || this.OPD1.isOldPnt == undefined){
      this.OPD1.isOldPnt = "Y";
    }   
    if(this.OPD1.rfrdBy == "" || this.OPD1.rfrdBy == undefined){
      this.OPD1.rfrdBy = "SELF";
    }   
    if(this.OPD1.occupation == "" || this.OPD1.occupation == undefined){
      this.OPD1.occupation = "NA";
    }   
    if(this.OPD1.paymode == "" || this.OPD1.paymode == undefined){
      this.OPD1.paymode = "CASH";
    }
    if(this.OPD1.PntType == "" || this.OPD1.PntType == undefined){
      this.OPD1.PntType = "General";
    }
    if(this.OPD1.BloodGroup == "" || this.OPD1.BloodGroup == undefined){
      this.OPD1.BloodGroup = "NA";
    } 
    if(this.OPD1.dcmntType == "" || this.OPD1.dcmntType == undefined){
      this.OPD1.dcmntType = "OPD";
    }   
    return true
  }
  
}

