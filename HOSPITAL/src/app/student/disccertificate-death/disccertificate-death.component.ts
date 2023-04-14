import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {OPD} from '../../students';
import {Test} from '../../students';

@Component({
  selector: 'app-disccertificate-death',
  templateUrl: './disccertificate-death.component.html',
  styleUrls: ['./disccertificate-death.component.css']
})
export class DisccertificateDEATHComponent implements OnInit {
  test = new Test();
  OPD = new OPD();
  uname = '';
  dcmntNo=0;
  dt="";

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
     let dcmntNo = routerParams["dcmntNo"];
     let uhID = routerParams["uhID"];
    
     this.dcmntNo = dcmntNo;
     //patient information
     this._studentservice.getipdregRecp(dcmntNo,uhID)
     .subscribe((data:any) => {
      this.OPD = data[0];
      
      });
        
       //call company for f.years
       this._studentservice.getCompany()
       .subscribe((data:any) => {
       this.OPD.Years = data[0].years;
      });
      
    
    }
    
    }
    
