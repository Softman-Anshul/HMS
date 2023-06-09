import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Students } from './../../students';
import {consulant} from './../../students';
import {department} from './../../students';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  declare Students : Students[];
  declare consulant : consulant[];
  id: any;
  DefaultValue = "Male";
  DefaultCity = "Bareilly";
  uname = ''
  declare permission : JSON
  declare insert : boolean
  declare edit : boolean
  declare delete : boolean
  Mobile = false;
  declare department :department[];

  showMeedit:boolean=false
  showMesave:boolean=true
  
  declare addForm: FormGroup;
  
  constructor(private formBuilder :FormBuilder,
    private _studentservice:StudentsService,
    private router: Router,
    private routes : ActivatedRoute    ) {

   }
   ngOnInit() {
    this._studentservice.gettableconsultant()
    .subscribe((data:consulant[]) => {
      this.consulant = data;
    });
    //call Department
    this._studentservice.gettabledepart()
    .subscribe((data:department[]) => {
      this.department = data;
    });      
     //call username 
     this.uname = this._studentservice.getUsername();
     if(this.uname == '')
     {
       this.router.navigate(['']);
     }
     else
     {
     //call permission
     this._studentservice.getuserpermission(this.uname)
     .subscribe(data => {
      this.permission = data
      this.insert = JSON.parse(JSON.stringify(this.permission))["Consultant"]["Consultant-Master"]["inst"] == "Y";
      this.edit = JSON.parse(JSON.stringify(this.permission))["Consultant"]["Consultant-Master"]["edt"] == "Y";
      this.delete = JSON.parse(JSON.stringify(this.permission))["Consultant"]["Consultant-Master"]["del"] == "Y";
    });
    this.Mobile = this._studentservice.isMob()
    this.addForm = this.formBuilder.group({
      dctID:['', Validators.required],
      dctName:['', Validators.required],
      dctDOB:['', Validators.required],
      dctMobile:['', Validators.required],
      dctEmail:['', Validators.required],
      dctCity:['', Validators.required],
      dctSplzn:['', Validators.required],
      dctAdrs1:['', Validators.required],
      dctAdrs2:['', Validators.required],
      dctSex:['', Validators.required],
      dctType:['', Validators.required],
      digree:['', Validators.required],
      roomno:['', Validators.required],
      morning:['', Validators.required],
      evening:['', Validators.required],
      Night:['', Validators.required],
      oncall:['', Validators.required],
      digree1:['', Validators.required],
      department:['', Validators.required],
      presmessage:['', Validators.required],
      epres:['', Validators.required],
      digree2:['', Validators.required],
      digree3:['', Validators.required],
      mobileprint:['', Validators.required],
      opdcharges:['', Validators.required],
      Emergency:['', Validators.required],
      validday:['', Validators.required],

    });

  }
  }
  onSubmit(){
    if(this.validation()){
    this._studentservice.createstudent(this.addForm.value)
    .subscribe(data => {
      console.log(data)
      alert('Records Saved...Thanks');
      this._studentservice.gettableconsultant()
      .subscribe((data:consulant[]) => {
        this.consulant = data;
        this.addForm = this.formBuilder.group({
          dctID:['', Validators.required],
        dctName:['', Validators.required],
        dctDOB:['', Validators.required],
        dctMobile:['', Validators.required],
        dctEmail:['', Validators.required],
        dctCity:['', Validators.required],
        dctSplzn:['', Validators.required],
        dctAdrs1:['', Validators.required],
        dctAdrs2:['', Validators.required],
        dctSex:['', Validators.required],
        dctType:['', Validators.required],
        digree:['', Validators.required],
        roomno:['', Validators.required],
        morning:['', Validators.required],
        evening:['', Validators.required],
        Night:['', Validators.required],
        oncall:['', Validators.required],
        digree1:['', Validators.required],
        department:['', Validators.required],
        presmessage:['', Validators.required],
        epres:['', Validators.required],
        digree2:['', Validators.required],
        digree3:['', Validators.required],
        mobileprint:['', Validators.required],
        opdcharges:['', Validators.required],
        Emergency:['', Validators.required],
        validday:['', Validators.required],

        });
      });
    });
  }
  }
  deleter(consulant:consulant):void{
    var result = confirm("Want to delete?");
    if (result==true) {
      this._studentservice.deleteconsultant(consulant.dctID)
      .subscribe(data => {
        window.location.reload();
      }) 
    } 
    else 
    {
      () => {} 
    }
  }
  editer(doctorid:any):void{
    this.id = doctorid;
    //  this.router.navigate(['homepage/consultantedit/' + this.id]);
    this._studentservice.getconsultantbyid(this.id)
    .subscribe((data:any) => {
      data = data[0]
      // this.addForm.patchValue({data});
      this.addForm.controls['dctID'].setValue(data.dctID);
      this.addForm.controls['dctSex'].setValue(data.dctSex);
      this.addForm.controls['dctName'].setValue(data.dctName);

      this.addForm.controls['digree'].setValue(data.digree);
      this.addForm.controls['dctAdrs1'].setValue(data.dctAdrs1);

      this.addForm.controls['dctMobile'].setValue(data.dctMobile);
      this.addForm.controls['dctEmail'].setValue(data.dctEmail);

    });
  } 
  
  onSubmitedit(){
    if(this.validation()){
    this._studentservice.updateconsultant(this.addForm.value)
    .subscribe(data => {
      console.log(data)
      alert('Modify Records Saved...Thanks');
      window.location.reload();
        });
  }
 }
  tooletageedit(){
    this.showMeedit = true
    this.showMesave = false
  }

  mobilenumber(e: { which: any; keyCode: any; }) {		
		const charCode = e.which ? e.which : e.keyCode;
		
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	  alert("OOPs! Only numeric values allowed")	
		}
  }
  validation(): boolean{
    if(this.addForm.value.dctName == "" || this.addForm.value.dctName == undefined){
      alert("Consultant Name is mandatory");
      return false
    }
    if(this.addForm.value.dctSex == "" || this.addForm.value.dctSex == undefined){
      alert("Consultant Gender is mandatory");
      return false
    }
    return true
  }
}