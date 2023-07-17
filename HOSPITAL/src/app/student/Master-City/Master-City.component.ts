import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { City, Cityname } from '../../students';
import { defaultConfirmData, needConfirmation } from 'src/app/confirm-dialog/confirm-dialog.decorator';

@Component({
  selector: 'app-mastercity',
  templateUrl: './Master-City.component.html',
  styleUrls: ['./Master-City.component.css']
})
export class MastercityComponent implements OnInit {
  uname = '';
  constructor(private _studentservice: StudentsService,
    private Router: Router,) { }

  declare cityname: Cityname[];
  editCity = new City();

  showMeedit: boolean = false
  showMesave: boolean = true
  Mobile = false;

  ngOnInit(): void {
    //call username 
    this.uname = this._studentservice.getUsername();
    if (this.uname == '') {
      this.Router.navigate(['']);
    }

    this.Mobile = this._studentservice.isMob()
    this._studentservice.gettablecityname()
      .subscribe((data: Cityname[]) => {
        this.cityname = data;
      });
  }
  onSubmit() {
    this._studentservice.createCity(this.editCity)
      .subscribe(data => {
        alert('Records Saved...Thanks');
        window.location.reload();
      });
  }
  onSubmitedit() {
    this._studentservice.updateCity(this.editCity)
      .subscribe(data => {
        alert('Records Modify...Thanks');
        window.location.reload();

      });
  }

  cancel(router: Router) {
    router.navigate(['/homepage/ipdlist']);
    window.location.reload();
  }

  @needConfirmation()
  confirm(city: any) {
    this._studentservice.deleteCity(city)
      .subscribe(data => {
        window.location.reload();
      })
  }


  deleter(city: any): void {
    defaultConfirmData.title = "Delete"
    defaultConfirmData.message = "Do you want to delete?"
    this.confirm(city)
  }

  editer(item: any): void {
    this._studentservice.getcitybyid(item.cityid)
      .subscribe((data: any) => {
        this.editCity = data[0]
        //      this.addForm.patchValue(data);
      })
  }
  tooletageedit() {
    this.showMeedit = true
    this.showMesave = false
  }
}
