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
  selector: 'app-opd-emr',
  templateUrl: './opd-emr.component.html',
  styleUrls: ['./opd-emr.component.css']
})
export class OPDEMRComponent implements OnInit {
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
  }

}
