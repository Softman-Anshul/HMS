import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { group, testreport } from './../../students';
import { __values } from 'tslib';
import { testmaster,testmasterd } from './../../students';
import { TestmasterProfileComponent } from '../testmaster-profile/testmaster-profile.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Wordname } from 'src/app/students';
import { ResultinterpetComponent } from '../resultinterpet/resultinterpet.component';
import { ResultcommentComponent } from '../resultcomment/resultcomment.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-testmaster',
  templateUrl: './testmaster.component.html',
  styleUrls: ['./testmaster.component.css']
})
export class TestmasterComponent implements OnInit {
  declare group : string[];
  preventSingleClick = false;
  timer: any;
  delay!: Number;
  declare testname:testmaster[];
  declare testcode:testmaster[];
  testmaster = new testmaster();
  testmasterd = new testmasterd();
  declare Wordname:Wordname[];
  uname = '';
  groupname ='';
  Mobile = false;
  myControl = new FormControl('');
  filteredOptions: Observable<string[]> | undefined;

    
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
   //    call Test
   this._studentservice.gettestname()
   .subscribe((data:any) => {
    this.testcode = data;
   });
    //call maxtestid
     this._studentservice.getmaxtestid()
     .subscribe((data:any) => {
      this.testmaster.Testid = data;
     });
     //call group
    this._studentservice.gettablegroup()
    .subscribe((data:group[]) => {
      this.group = [];
      data.forEach(element => {
        this.group.push(element.group_name);
      });
      this.groupname = this.group[0];
      this.populate();
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );  
    });
     //call Wordcode
     this._studentservice.gettableWord()
     .subscribe((data:Wordname[]) => {
     this.Wordname = data;
     });
  }    
  onSubmit(){
    this._studentservice.createtestmasterh(this.testmaster)
   .subscribe(data => {
   this._studentservice.createtestmasterd(this.testmaster)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    window.location.reload();
    });
  });
 
  }
delete(item:any){
    this.testmaster.tests.forEach((value: any, index: any) => {
      if(value.testorder == item)
        this.testmaster.tests.splice(index, 1);  
      });  
 
}
addItem(){
  this.testmaster.tests.push(this.testmasterd)
  this.testmasterd = new testmasterd()
}
onchange() {
  if(this.testmasterd.Remark == 'P')
  {
     const dialogRef = this.dialog.open(TestmasterProfileComponent, {
      height:'600px', width: '550px',
      data: {students:this.testmaster},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
 }
  populate():void{
//    call Test
    this._studentservice.gettestnamebygname(this.groupname)
    .subscribe((data:any) => {
     this.testname = data;
  });
  
 }
 openDialogI(): void {
  if(this.testmasterd.Ipet == "Y")
  {
  const dialogRef = this.dialog.open(ResultinterpetComponent, {
    height:'450px', width: '550px',
    data: {testreport:this.testmasterd,i:0},
  
  }
   );

  dialogRef.afterClosed().subscribe(result => {
    this.testmasterd = result.report
  });
 }
 }

 openDialogC(): void {
  if(this.testmasterd.comt == "Y")
  {
  const dialogRef = this.dialog.open(ResultcommentComponent, {
    height:'450px', width: '550px',
    data: {testreport:this.testmasterd,i:0},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.testmasterd = result.report
  });
}
 }
 private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.group.filter(group => group.toLowerCase().includes(filterValue));
}

populateTest(){
  this.testcode.forEach(element => {
    if (this.testmaster.Testcode == element.Testcode){
        this.testname = [element]
    }
  });
}

edit(test:any){
  console.log(test);
}

}
