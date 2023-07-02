import { Component, OnInit, Inject } from '@angular/core';
import {testmaster, testmasterd} from './../../students';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-testmaster-profile',
  templateUrl: './testmaster-profile.component.html',
  styleUrls: ['./testmaster-profile.component.css']
})
export class TestmasterProfileComponent implements OnInit {
  declare testmasterd:testmaster[];
  declare testmaster:testmaster;
  testreport:testmasterd[] = [];
  testName : any;
  testcode: any;
  testid :any;
  uname = '';
  declare index:number;
  
  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: {students:testmaster},
    ) {
      this.testmaster = data.students
     }

  ngOnInit(): void {
       //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }
    //call Test for Booking
    this._studentservice.gettabletestname()
    .subscribe((data:testmaster[]) => {
    this.testmasterd = data;
    });
    
  }
  onSAVE(){
    this._studentservice.TestMaster(this.testreport)
    .subscribe(data => {
    });
    this._studentservice.TestprofileMaster(this.testreport)
    .subscribe(data => {
    });
    alert('Records Saved...Thanks');
    window.location.reload();
  }
  

  additem():void{
    // for(let i=0;i<this.testmasterd.length;i++){
    //     let element =this.testmasterd[i]
        
    //     if(element.TestName = this.testName){
    //       //call subTestmaster
    //       console.log(element.Testid)
    //       this._studentservice.gettabletestnamed(element.Testid)
    //       .subscribe((data:testmasterd[]) => {

    //         let report = new testmasterd();
    //         report = data[0];
    //         report.TestsubName = element.TestName;
    //         report.testid = element.Testid;
    //         report.Testscode = element.Testcode;
    //         // report.SubUnit = element.unit;
    //         this.testreport.push(report);
    //       });
    //       break;
    //     }
   // };
  }
  selectTest(event:any){
    this.index = event.target.value;
    this.testcode = Number(this.testmasterd[this.index].Testcode)
  }
}
