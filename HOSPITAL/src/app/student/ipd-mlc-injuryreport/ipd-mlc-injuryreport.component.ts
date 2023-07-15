import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import { MLC} from '../../students';

@Component({
  selector: 'app-mlc-injuryreport',
  templateUrl: './ipd-mlc-injuryreport.component.html',
  styleUrls: ['./ipd-mlc-injuryreport.component.css']
})
export class MlcInjuryreportComponent implements OnInit {
  OPD = new OPD();
  uname = '';
  MLC = new MLC();

  imageSrc: string | undefined;
  imageSrc1: string | undefined;
  imageSrc2: string | undefined;
  img1 : any = '';
  img2 : any = '';
  img3 : any = '';

  constructor(private _studentservice:StudentsService,
    private routes : ActivatedRoute,
    private Router :Router, 
   ) {
    }


  ngOnInit(): void {
     //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.Router.navigate(['']);
   }
  
      const routerParams = this.routes.snapshot.params;
      let ipdNo = routerParams["ipdNo"];
  let uhID = routerParams["uhID"];

  //patient information
  this._studentservice.getuhidsearch(uhID)
  .subscribe((data:any) => {
   this.OPD = data[0];
   this.OPD.dcmntNo = ipdNo;
  });
      this.MLC.uname = this.uname;
     //call company for f.years
     this._studentservice.getCompany()
     .subscribe((data:any) => {
     this.OPD.Years = data[0].years;
     this.MLC.Years = this.OPD.Years;
    });
    
     //Load Data
   this._studentservice.mlcload(ipdNo,uhID)
   .subscribe((data:any) => {
    this.MLC = data[0];
    this.MLC.ipdNo = this.OPD.dcmntNo;
    this.MLC.uhID = this.OPD.uhID;
    this.showImage()
    });


    }
    showImage(){
      this.imageSrc = "http://silversoft.softmansystem.com/Hospital/upload/photo-" + this.OPD.uhID + ".jpg"
      this.imageSrc1 = "http://silversoft.softmansystem.com/Hospital/upload/mlc-" + this.OPD.uhID + this.OPD.dcmntNo + "@1" + ".jpg"
      this.imageSrc2 = "http://silversoft.softmansystem.com/Hospital/upload/mlc-" + this.OPD.uhID + this.OPD.dcmntNo + "@2" + ".jpg"
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
  