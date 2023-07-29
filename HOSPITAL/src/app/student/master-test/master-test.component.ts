import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { testmasterm,testmasterd } from './../../students';
import {MatDialog} from '@angular/material/dialog';
import { testgroup } from './../../students';


@Component({
  selector: 'app-master-test',
  templateUrl: './master-test.component.html',
  styleUrls: ['./master-test.component.css']
})
export class MasterTestComponent implements OnInit {
  uname = '';
  Mobile = false;
  declare testcode:testmasterm[];
  testmasterm = new testmasterm();
  testmasterd = new testmasterd();

  groupname ='';
  declare group:testgroup[];
  declare testname:testmasterm[];


  constructor(
      private _studentservice:StudentsService,
      private router: Router,
      private routes : ActivatedRoute,
      public dialog: MatDialog
  ) {  }

  ngOnInit(): void {
         //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }

   this.Mobile = this._studentservice.isMob()
    //call maxtestid
     this._studentservice.getmaxtestid()
     .subscribe((data:any) => {
      this.testmasterm.Testid = data;
     });

  //call group
  this._studentservice.getAllTestGroups()
  .subscribe((data:any) => {
    this.group = data;
    console.log(data)
  //   data.forEach(element => {
  //     this.group.push(element.group_name);
  //   });
  //   this.groupname = this.group[0];
  //   this.populate();
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //  );  
  });
  }
reload(){
  window.location.reload();
}
}
