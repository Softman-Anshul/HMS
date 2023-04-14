import { Component, OnInit } from '@angular/core';
import { group } from '../../students';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import {testname} from '../../students';

@Component({
  selector: 'app-testratechange',
  templateUrl: './Master-Testratechange.component.html',
  styleUrls: ['./Master-Testratechange.component.css']
})
export class TestratechangeComponent implements OnInit {
  declare group : group[];
  declare testname :testname[];
  declare search:string;
  declare Code:string;
  uname = '';
  constructor(private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute ) { }

  ngOnInit(): void {
    this._studentservice.gettestname()
    .subscribe((data:any) => {
     this.testname = data;
    });
  }
  searchquery(){
  this._studentservice.gettestbyname(this.search)
    .subscribe((data:any) => {
     this.testname = data;
    });
 }
 onSubmit(){
     //call username 
     this.uname = this._studentservice.getUsername();
     if(this.uname == '')
     {
       this.router.navigate(['']);
     }

  this._studentservice.testratechange(this.testname)
    .subscribe((data:any) => {
      alert("Thanks");
    });
 }
}
