import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router, Params, ActivatedRoute, RouterPreloader} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { consulant, department, Students } from './../../students';

@Component({
  selector: 'app-testdepartment',
  templateUrl: './testdepartment.component.html',
  styleUrls: ['./testdepartment.component.css']
})
export class TestdepartmentComponent implements OnInit {
  declare Students : Students[];
  declare department : department[];
  Mobile = false;

  constructor(
    private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
  ) { }

  declare addForm: FormGroup;
  depid = null;
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
   
    this._studentservice.gettabledepart()
    .subscribe((data:department[]) => {
    this.department = data;
    });
     this.addForm = this.formBuilder.group({
      depid:['', Validators.required],
      labtype:['', Validators.required],
      depnam:['', Validators.required],
    });
  }
  onSubmit(){
  this._studentservice.createdepart(this.addForm.value)
   .subscribe(data => {
    alert('Records Saved...Thanks');
    this._studentservice.gettabledepart()
    .subscribe((data:department[]) => {
    this.department = data;
    this.addForm = this.formBuilder.group({
      depid:['', Validators.required],
      labtype:['', Validators.required],
      depnam:['', Validators.required],

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

  deleter(department:department):void{
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.deletedepart(department.depid)
      .subscribe(data => {
          this.department = this.department.filter(u => u !== department); 
      }) 
   } 
   else 
   {
     () => {} 
   }
  }
    editer(students:any):void{
      this._studentservice.getdepartbyid(students.dep_id)
      .subscribe((data:any) => {
        data = data[0]
        //this.addForm.patchValue(data);

    this.addForm.controls['depid'].setValue(data.depid);
    this.addForm.controls['labtype'].setValue(data.labtype);
    this.addForm.controls['depnam'].setValue(data.depnam);

      }) 
}

tooletageedit(){
  this.showMeedit = true
  this.showMesave = false
}
}
