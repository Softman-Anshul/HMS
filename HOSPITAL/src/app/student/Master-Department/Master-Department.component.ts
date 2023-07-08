import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { consulant, department, Students } from '../../students';

@Component({
  selector: 'app-testdepartment',
  templateUrl: './Master-Department.component.html',
  styleUrls: ['./Master-Department.component.css']
})
export class TestdepartmentComponent implements OnInit {
  declare Students : Students[];
  declare consulant : department[];
  Mobile = false;

  constructor(
    private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
  ) { }

  declare addForm: FormGroup;
  depid = null;
  deprt = "";
  departmentidtoupdate=null;
  showMeedit:boolean=false
  showMesave:boolean=true
  uname = '';

  ngOnInit(): void {
       //call username 
   this.uname = this._studentservice.getUsername();
   if(this.uname == '')
   {
     this.router.navigate(['']);
   }
   this.Mobile = this._studentservice.isMob()
   
    this._studentservice.getdepart()
    .subscribe((data:department[]) => {
    this.consulant = data;
    });
     this.addForm = this.formBuilder.group({
      caseID:['', Validators.required],
      caseType:['', Validators.required],
      dprtmnt:['', Validators.required],
      deprt:['', Validators.required],
    });
  }
  onSubmit(){
  this._studentservice.createdepart(this.addForm.value)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this._studentservice.gettabledepart()
    .subscribe((data:department[]) => {
    this.consulant = data;
    this.addForm = this.formBuilder.group({
      caseID:['', Validators.required],
      caseType:['', Validators.required],
      dprtmnt:['', Validators.required],
      deprt:['', Validators.required],

    });
    });
   });
}
onSubmitedit(){
  this._studentservice.updatedepartment(this.addForm.value)
   .subscribe(data => {
    alert('Records Modify...Thanks');
    this.showMeedit = false
    this.showMesave = true
    window.location.reload();
   });
}

  deleter(consulant:department):void{
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.deletedepart(consulant.caseID)
      .subscribe(data => {
          this.consulant = this.consulant.filter(u => u !== consulant); 
      }) 
   } 
   else 
   {
     () => {} 
   }
  }
    editer(students:any):void{
      this._studentservice.getdepartbyid(students.caseID)
      .subscribe((data:any) => {
        data = data[0]
        //this.addForm.patchValue(data);
    this.addForm.controls['deprt'].setValue(data.caseType);
    this.addForm.controls['caseID'].setValue(data.caseID);
    this.addForm.controls['caseType'].setValue(data.caseType);
      }) 
}
tooletageedit(){
  this.showMeedit = true
  this.showMesave = false
}
}
