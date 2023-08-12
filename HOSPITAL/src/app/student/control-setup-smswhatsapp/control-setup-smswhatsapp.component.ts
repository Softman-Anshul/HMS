import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SMS } from '../../students';
import { company } from '../../students';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-setup-smswhatsapp',
  templateUrl: './control-setup-smswhatsapp.component.html',
  styleUrls: ['./control-setup-smswhatsapp.component.css']
})
export class ControlSetupSmswhatsappComponent {
  declare sms: SMS[];
  SMS1 = new SMS();
  declare search: string;
  company = new company();
  uname = '';
  loginForm = new FormGroup({
    password: new FormControl()
  });

  showMesave: boolean = false;

  constructor(private _studentservice: StudentsService,
    private router: Router,) { }

  ngOnInit(): void {
    //call City
    this._studentservice.sms_list()
      .subscribe((data: any) => {
        this.SMS1 = data[0];
      });


  }
  submit() {
    this._studentservice.sms_save(this.SMS1)
      .subscribe(data => {
        alert('Thanks');
        window.location.reload();
      });

  }

  tooletageedit(password: any) {
    if (password == "india") {
      this.showMesave = true;
    }
    else {
      alert("Wrong Password")
      this.showMesave = false;
    }
  }
}

