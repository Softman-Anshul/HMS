// student-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './Test_list/Test_list.component';
import { AddStudentComponent } from './add-ConsultantMaster/add-student.component';
import { EdittStudentComponent } from './add-TestMaster/editt-student.component';
import { NewBookingComponent } from './Test_new-booking/Test_new-booking.component';
import { RefundComponent } from './Test_refund/Test_refund.component';
import { TestgroupComponent } from './testgroup/testgroup.component';
import { TestdepartmentComponent } from './testdepartment/testdepartment.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestmasterComponent } from './testmaster/testmaster.component';
import { EditConsultantMasterComponent } from './edit-consultant-master/edit-consultant-master.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { SamplebillComponent } from './samplebill/samplebill.component';
import { TestresultComponent } from './testresult/testresult.component';
import { ResultinterpetComponent } from './resultinterpet/resultinterpet.component';
import { ResultcommentComponent } from './resultcomment/resultcomment.component';
import { ReciptsComponent } from './Test_recipts/Test_recipts.component';
import { MastercityComponent } from './mastercity/mastercity.component';
import { MasteroutsidelabComponent } from './masteroutsidelab/masteroutsidelab.component';
import { ControlComponent } from './control/control.component';
import { ReciptsBillComponent } from './Test_recipts-bill/Test_recipts-bill.component';
import { TestratechangeComponent } from './testratechange/testratechange.component';
import { PrintTestreportComponent } from './print-testreport/print-testreport.component';
import { TestreportComponent } from './testreport/testreport.component';
import { AddressChangeComponent } from './address-change/address-change.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { MasterReportComponent } from './master-report/master-report.component';
import { StudentsService } from '../students.service';
import { MainpageMobileComponent } from './mainpage-mobile/mainpage-mobile.component';
import { LoginComponent } from '../login/login.component';
import { TestPaymodeComponent } from './test-paymode/test-paymode.component';
import { ReportDaycollectionComponent } from './report-daycollection/report-daycollection.component';
import { ReportDaysummaryComponent } from './report-daysummary/report-daysummary.component';
import { ReportMonthlysummaryComponent } from './report-monthlysummary/report-monthlysummary.component';
import { ReportDoctorcollectionComponent } from './report-doctorcollection/report-doctorcollection.component';
import { ReportDoctorysummaryComponent } from './report-doctorysummary/report-doctorysummary.component';
import { ReportCitysummaryComponent } from './report-citysummary/report-citysummary.component';
import { ReportPatientwiseComponent } from './report-patientwise/report-patientwise.component';
import { ReportCitycollectionComponent } from './report-citycollection/report-citycollection.component';
import { ReportUsercollectionyComponent } from './report-usercollectiony/report-usercollectiony.component';
import { ReportPaymodeycollectionComponent } from './report-paymodeycollection/report-paymodeycollection.component';
import { ReportDSRComponent } from './report-dsr/report-dsr.component';
import { ReportOutsourcereportComponent } from './report-outsourcereport/report-outsourcereport.component';
import { ReportOutsourcesummaryComponent } from './report-outsourcesummary/report-outsourcesummary.component';
import { KeyupdateComponent } from './keyupdate/keyupdate.component';

const routes: Routes = [
    {path: 'receipts/:id',component:ReciptsComponent},
    {path: 'login',component:LoginComponent},
    {path: 'receiptsb/:id',component:ReciptsBillComponent},
    {path: 'TestReportPrint',component:PrintTestreportComponent}, 
    {path:'listreport/:id',component: TestreportComponent},

            {path: 'daycollection/:vrdt1/:vrdt2',component:ReportDaycollectionComponent},  
            {path: 'daysummary/:vrdt1/:vrdt2',component:ReportDaysummaryComponent},  
            {path: 'monthsummary/:vrdt1/:vrdt2',component:ReportMonthlysummaryComponent},   
            {path: 'doctor/:vrdt1/:vrdt2/:doctor',component:ReportDoctorcollectionComponent},  
            {path: 'doctorsummary/:vrdt1/:vrdt2',component:ReportDoctorysummaryComponent},
            {path: 'citysummary/:vrdt1/:vrdt2',component:ReportCitysummaryComponent},
            {path: 'city/:vrdt1/:vrdt2/:city',component:ReportCitycollectionComponent},
            {path: 'patientregister/:vrdt1/:vrdt2',component:ReportPatientwiseComponent},
            {path: 'user/:vrdt1/:vrdt2/:nuname',component:ReportUsercollectionyComponent},
            {path: 'paymode/:vrdt1/:vrdt2/:paymode',component:ReportPaymodeycollectionComponent},
            {path: 'dsr/:vrdt1/:vrdt2',component:ReportDSRComponent},  
            {path: 'Outsourcesummary/:vrdt1/:vrdt2',component:ReportOutsourcesummaryComponent},
            {path: 'Outsource/:vrdt1/:vrdt2/:Outsource',component:ReportOutsourcereportComponent},
            {path: 'keyupdatestart',component:KeyupdateComponent},

    { path: 'homepage', component: HomepageComponent,

        children: [
            {path: 'main', component: (()=>{ 
                let check = false;
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
                if(check){
                    return MainpageMobileComponent
                }
                return MainpageComponent
            })()},
            {path: 'add',component: AddStudentComponent},
            {path: 'consultantedit/:id',component: EditConsultantMasterComponent},
            {path: 'edit',component: EdittStudentComponent},
            {path: 'testgroup',component: TestgroupComponent},
            {path: 'testdepartment',component: TestdepartmentComponent},
            {path: 'Otherlab',component: MasteroutsidelabComponent},
            {path: 'testcity',component: MastercityComponent},
            {path: 'testmaster',component: TestmasterComponent},

            {path: 'list',component: ListStudentComponent},
            {path: 'newbooking',component: NewBookingComponent},
            {path: 'newbooking/:id/:dt',component: NewBookingComponent},
            {path: 'refund',component: RefundComponent},
            {path: 'paymode',component:TestPaymodeComponent},   
            {path: 'result/:id',component:TestresultComponent},
            {path: 'resultinterpet',component:ResultinterpetComponent},
            {path: 'resultcomment',component:ResultcommentComponent} ,
            {path: 'samplebill',component: SamplebillComponent},

            {path: 'newlogin',component: NewloginComponent},

            {path: 'control',component:ControlComponent},  
            {path: 'testratechange',component:TestratechangeComponent},  
            {path: 'profilechange',component:AddressChangeComponent},  
            {path: 'userpermission',component: UserPermissionComponent},           
            {path: 'reportmaster',component: MasterReportComponent},   
            {path: 'keyupdate',component:KeyupdateComponent},
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }