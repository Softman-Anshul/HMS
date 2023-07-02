import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './Test_list/Test_list.component';
import { AddStudentComponent } from './add-ConsultantMaster/add-student.component';
import { EdittStudentComponent } from './add-TestMaster/editt-student.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {StudentRoutingModule} from './student-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { NewBookingComponent } from './Test_new-booking/Test_new-booking.component';
import { MatSliderModule } from '@angular/material/slider';
import { RefundComponent } from './Test_refund/Test_refund.component';
import { TestresultComponent } from './testresult/testresult.component';
import { TestdepartmentComponent } from './testdepartment/testdepartment.component';
import { TestgroupComponent } from './testgroup/testgroup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestmasterComponent } from './testmaster/testmaster.component';
import { EditConsultantMasterComponent } from './edit-consultant-master/edit-consultant-master.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { SamplebillComponent } from './samplebill/samplebill.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ResultinterpetComponent } from './resultinterpet/resultinterpet.component';
import { ResultcommentComponent } from './resultcomment/resultcomment.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';
import { ReciptsComponent } from './Test_recipts/Test_recipts.component';
import { NgxEditorModule } from 'ngx-editor';
import { EditorComponent } from './editor/editor.component';
import { MastercityComponent } from './mastercity/mastercity.component';
import { MasteroutsidelabComponent } from './masteroutsidelab/masteroutsidelab.component';
import { ControlComponent } from './control/control.component';
import { ReciptsBillComponent } from './Test_recipts-bill/Test_recipts-bill.component';
import { BalreceivedComponent } from './balreceived/balreceived.component';
import { TestratechangeComponent } from './testratechange/testratechange.component';
import { PrintTestreportComponent } from './print-testreport/print-testreport.component';
import { TestmasterProfileComponent } from './testmaster-profile/testmaster-profile.component';
import { TestmasterWordComponent } from './testmaster-word/testmaster-word.component';
import { TestreportComponent } from './testreport/testreport.component';
import { AddressChangeComponent } from './address-change/address-change.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { MasterReportComponent } from './master-report/master-report.component';
import { MainpageMobileComponent } from './mainpage-mobile/mainpage-mobile.component';
import { MaterialExampleModule } from './material.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AddStudentComponent,
    EdittStudentComponent,
    ListStudentComponent,
    LeftsidebarComponent,
    HomepageComponent,
    NewBookingComponent,
    RefundComponent,
    TestresultComponent,
    TestdepartmentComponent,
    TestgroupComponent,
    MainpageComponent,
    TestmasterComponent,
    EditConsultantMasterComponent,
    NewloginComponent,
    SamplebillComponent,
    ResultinterpetComponent,
    ResultcommentComponent,
    TestdetailsComponent,
    ReciptsComponent,
    EditorComponent,
    MastercityComponent,
    MasteroutsidelabComponent,
    ControlComponent,
    ReciptsBillComponent,
    BalreceivedComponent,
    TestratechangeComponent,
    PrintTestreportComponent,
    TestmasterProfileComponent,
    TestmasterWordComponent,
    TestreportComponent,
    AddressChangeComponent,
    UserPermissionComponent,
    MasterReportComponent,
    MainpageMobileComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    NgxEditorModule,
    MaterialExampleModule,
    AngularEditorModule,
    MatAutocompleteModule
  ],
})
export class StudentModule { }
