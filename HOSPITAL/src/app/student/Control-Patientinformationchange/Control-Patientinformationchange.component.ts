import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Students,OPD,department } from '../../students';
import { group,company } from '../../students';
import {Cityname} from '../../students';
import {consulant} from '../../students';

@Component({
  selector: 'app-patientinformationchange',
  templateUrl: './Control-Patientinformationchange.component.html',
  styleUrls: ['./Control-Patientinformationchange.component.css']
})
export class PatientinformationchangeComponent implements OnInit {
  declare Cityname :Cityname[];
  declare company :company[];
  declare consulant : consulant[];
  declare department : department[];
  declare group : group[];
  declare OPD : OPD[];
  OPD1 = new OPD();
  declare search:string;
  uname = '';
  
  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute) { }

  ngOnInit(): void {
    //call username 
 this.uname = this._studentservice.getUsername();
 if(this.uname == '')
 {
   this.router.navigate(['']);
 }
    const routerParams = this.routes.snapshot.params;
    this.OPD1.uname = this.uname;
    //call company for f.years
    this._studentservice.getCompany()
    .subscribe((data:any) => {
    this.OPD1.Years = data[0].years;
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
     //call City
     this._studentservice.gettablecityname()
     .subscribe((data:Cityname[]) => {
     this.Cityname = data;
     });
  }
  onSubmit(){
    if(this.validation()){
      const routerParams = this.routes.snapshot.params;
        this._studentservice.opd_update(this.OPD1)
          .subscribe(data => {
                alert('Records Saved...Thanks');
                window.location.reload();
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
    if(this.OPD1.occupation == "" || this.OPD1.occupation == undefined){
      this.OPD1.occupation = "NA";
    }   
    if(this.OPD1.BloodGroup == "" || this.OPD1.BloodGroup == undefined){
      this.OPD1.BloodGroup = "NA";
    } 
    return true
  }

  searchquery(){
    this._studentservice.getuhidsearch(this.search)
  .subscribe((data:any) => {
    this.OPD1.uname = this.uname;
    this.OPD1 = data[0];
    
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
}
