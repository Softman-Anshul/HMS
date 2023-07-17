import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';
import { Router, Params, ActivatedRoute, RouterPreloader } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { department, group } from '../../students';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-testgroup',
  templateUrl: './Master-Paymode.component.html',
  styleUrls: ['./Master-Paymode.component.css']
})
export class TestgroupComponent implements OnInit {
  declare group: group[];
  declare consulant: department[];
  declare addForm: FormGroup;
  Mobile = false;

  constructor(
    private formBuilder: FormBuilder,
    private _studentservice: StudentsService,
    private router: Router,
  ) { }

  showMeedit: boolean = false
  showMesave: boolean = true
  uname = '';
  ngOnInit(): void {
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.router.navigate(['']);
    }

    this.Mobile = this._studentservice.isMob()

    this._studentservice.gettablegroup()
      .subscribe((data: group[]) => {
        this.group = data;
      });

    this.addForm = this.formBuilder.group({
      payid: ['', Validators.required],
      paymode: ['', Validators.required],
      paymode1: ['', Validators.required],
    });
  }
  onSubmit() {
    this._studentservice.creategroup(this.addForm.value)
      .subscribe(data => {
        alert('Records Saved...Thanks');
        this._studentservice.gettablegroup()
          .subscribe((data: group[]) => {
            this.group = data;
          });
      });
    this.addForm = this.formBuilder.group({
      payid: ['', Validators.required],
      paymode: ['', Validators.required],
      paymode1: ['', Validators.required],
    });

  }
  onSubmitedit() {
    this._studentservice.updategroup(this.addForm.value)
      .subscribe(data => {
        alert('Records Modify...Thanks');
        this.showMeedit = false
        this.showMesave = true
        this._studentservice.gettablegroup()
          .subscribe((data: group[]) => {
            this.group = data;
          });
      });
    this.addForm = this.formBuilder.group({
      payid: ['', Validators.required],
      paymode: ['', Validators.required],
      paymode1: ['', Validators.required],
    });
  }

  cancel(router: Router) {
    router.navigate(['/homepage/ipdlist']);
    window.location.reload();
  }

  @needConfirmation()
  confirm(group: group) {
    this._studentservice.deletegroup(group.payid)
    .subscribe(data => {
      this.group = this.group.filter(u => u !== group);
      window.location.reload()
    })
}

  deleter(group: group): void {
    defaultConfirmData.title = "Delete"
    defaultConfirmData.message = "Are you sure that you want to delete?"
    this.confirm(group)
  }

  editer(group: group): void {
    this._studentservice.getdegroupbyid(group.payid)
      .subscribe((data: any) => {
        data = data[0]
        this.addForm.patchValue(data);
        this.addForm.controls['paymode1'].setValue(data.paymode);
      })
  }
  tooletageedit() {
    this.showMeedit = true
    this.showMesave = false
  }
}
