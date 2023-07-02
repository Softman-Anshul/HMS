import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './Test-List/Test-List.component';
import { AddStudentComponent } from './Master-Consultant/Master-Consultant.component';
import { EdittStudentComponent } from './Menu-Master/Menu-Master.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {StudentRoutingModule} from './student-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { NewBookingComponent } from './Test-Booking/Test-Booking.component';
import { MatSliderModule } from '@angular/material/slider';
import { RefundComponent } from './TEST-Refund/TEST-Refund.component';
import { TestdepartmentComponent } from './Master-Department/Master-Department.component';
import { TestgroupComponent } from './Master-Paymode/Master-Paymode.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EditConsultantMasterComponent } from './edit-consultant-master/edit-consultant-master.component';
import { NewloginComponent } from './Control-Adduser/Control-Adduser.component';
import { SamplebillComponent } from './samplebill/samplebill.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { TestdetailsComponent } from './TEST-Testdetails/TEST-Testdetails.component';
import { ReciptsComponent } from './PRINT-TEST-recipts/PRINT-TEST-recipts.component';
import { NgxEditorModule } from 'ngx-editor';
import { EditorComponent } from './editor/editor.component';
import { MastercityComponent } from './Master-City/Master-City.component';
import { MasteroutsidelabComponent } from './Master-outsidelab/Master-outsidelab.component';
import { ControlComponent } from './Menu-Control/Menu-Control.component';
import { ReciptsBillComponent } from './PRINT-TEST-reciptsbill/PRINT-TEST-reciptsbill.component';
import { TestratechangeComponent } from './Master-Testratechange/Master-Testratechange.component';
import { AddressChangeComponent } from './Control-profilechange/Control-profilechange.component';
import { UserPermissionComponent } from './Control-Userpermission/Control-Userpermission.component';
import { MasterReportComponent } from './Test-master-report/Test-master-report.component';
import { MainpageMobileComponent } from './mainpage-mobile/mainpage-mobile.component';
import { MaterialExampleModule } from './material.module';
import { TestPmodechangeComponent } from './test-pmodechange/test-pmodechange.component';
import { ReportDaycollectionComponent } from './report-daycollection/report-daycollection.component'
import { ReportPpageheadingComponent } from './report-PageHeading/report-PageHeading.component';
import { ReportDaysummaryComponent } from './report-daysummary/report-daysummary.component';
import { ReportMonthlysummaryComponent } from './report-monthlysummary/report-monthlysummary.component';
import { ReportDoctorcollectionComponent } from './report-doctorcollection/report-doctorcollection.component';
import { ReportDoctorysummaryComponent } from './report-doctorysummary/report-doctorysummary.component';
import { MisDailyAcitiyDetailsComponent } from './mis-daily-acitiy-details/mis-daily-acitiy-details.component';
import { MisMasterComponent } from './mis-master/mis-master.component';
import { MisDailyAcitiyPaymodeComponent } from './mis-daily-acitiy-paymode/mis-daily-acitiy-paymode.component';
import { MisDailyAcitiyHeadsComponent } from './mis-daily-acitiy-heads/mis-daily-acitiy-heads.component';
import { MisDailyAcitiySummaryComponent } from './mis-daily-acitiy-summary/mis-daily-acitiy-summary.component';
import { MisDailyAcitiyHeadsumdayComponent } from './mis-daily-acitiy-headsumday/mis-daily-acitiy-headsumday.component';
import { MisDailyAcitiyHeadmonthComponent } from './mis-daily-acitiy-headmonth/mis-daily-acitiy-headmonth.component';
import { ReportCitycollectionComponent } from './report-citycollection/report-citycollection.component';
import { ReportCitysummaryComponent } from './report-citysummary/report-citysummary.component';
import { ReportPatientwiseComponent } from './report-patientwise/report-patientwise.component';
import { ReportUsercollectionyComponent } from './report-usercollectiony/report-usercollectiony.component';
import { ReportPaymodeycollectionComponent } from './report-paymodeycollection/report-paymodeycollection.component';
import { ReportDSRComponent } from './report-dsr/report-dsr.component';
import { ReportOutsourcesummaryComponent } from './report-outsourcesummary/report-outsourcesummary.component';
import { ReportOutsourcereportComponent } from './report-outsourcereport/report-outsourcereport.component';
import { OPDDaycollectionComponent } from './opd-daycollection/opd-daycollection.component';
import { OPDReportDaysummaryComponent } from './opd-report-daysummary/opd-report-daysummary.component';
import { OPDReportDoctorsummaryComponent } from './opd-report-doctorsummary/opd-report-doctorsummary.component';
import { OPDReportCitysummarynComponent } from './opd-report-citysummary/opd-report-citysummary.component';
import { OPDReportCityycollectionComponent } from './opd-report-citycollection/opd-report-cityycollection.component';
import { OPDReportDoctorcollectionComponent } from './opd-report-doctorcollection/opd-report-doctorcollection.component';
import { OPDReportMonthlysummaryComponent } from './opd-report-monthlysummary/opd-report-monthlysummary.component';
import { OPDReportPatientregisterComponent } from './opd-report-patientregister/opd-report-patientregister.component';
import { OPDReportPaymodecollectionComponent } from './opd-report-paymodecollection/opd-report-paymodecollection.component';
import { OPDReportUsercollectionComponent } from './opd-report-usercollection/opd-report-usercollection.component';
import { OPDReportRdoctorcollectionComponent } from './opd-report-rdoctorcollection/opd-report-rdoctorcollection.component';
import { OPDReportRdoctonsummaryComponent } from './opd-report-rdoctonsummary/opd-report-rdoctonsummary.component';
import { MlcInjuryreportComponent } from './ipd-mlc-injuryreport/ipd-mlc-injuryreport.component';
import { MlcPoliceformComponent } from './ipd-mlc-policeform/ipd-mlc-policeform.component';
import { PatientFullpaymentComponent } from './patient-fullpayment/patient-fullpayment.component';
import { IpdDischargecardReportComponent } from './ipd-dischargecard-report/ipd-dischargecard-report.component';
import { OpdMedicalcertificatePrintComponent } from './opd-medicalcertificate-print/opd-medicalcertificate-print.component';
import { DisccertificateDEATHComponent } from './disccertificate-death/disccertificate-death.component';
import { DisccertificateLAMAComponent } from './disccertificate-lama/disccertificate-lama.component';
import { DisccertificateREFFERComponent } from './disccertificate-reffer/disccertificate-reffer.component';
import { FILEAdmittricketComponent } from './file-admittricket/file-admittricket.component';
import { FILEGenConsentFormComponent } from './file-gen-consent-form/file-gen-consent-form.component';
import { MasterTestGroupComponent } from './master-test-group/master-test-group.component';
import { MasterTestComponent } from './master-test/master-test.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';


@NgModule({
  declarations: [
    AddStudentComponent,
    EdittStudentComponent,
    ListStudentComponent,
    LeftsidebarComponent,
    HomepageComponent,
    NewBookingComponent,
    RefundComponent,
    TestdepartmentComponent,
    TestgroupComponent,
    MainpageComponent,
    EditConsultantMasterComponent,
    NewloginComponent,
    SamplebillComponent,
    TestdetailsComponent,
    ReciptsComponent,
    EditorComponent,
    MastercityComponent,
    MasteroutsidelabComponent,
    ControlComponent,
    ReciptsBillComponent,
    TestratechangeComponent,
    AddressChangeComponent,
    UserPermissionComponent,
    MasterReportComponent,
    MainpageMobileComponent,
    TestPmodechangeComponent,
    ReportPpageheadingComponent,
    ReportDaycollectionComponent,
    ReportDaysummaryComponent,
    ReportMonthlysummaryComponent,
    ReportDoctorcollectionComponent,
    ReportDoctorysummaryComponent,
    MisDailyAcitiyDetailsComponent,
    MisMasterComponent,
    MisDailyAcitiyPaymodeComponent,
    MisDailyAcitiyHeadsComponent,
    MisDailyAcitiySummaryComponent,
    MisDailyAcitiyHeadsumdayComponent,
    MisDailyAcitiyHeadmonthComponent,
    ReportCitycollectionComponent,
    ReportCitysummaryComponent,
    ReportPatientwiseComponent,
    ReportUsercollectionyComponent,
    ReportPaymodeycollectionComponent,
    ReportDSRComponent,
    ReportOutsourcesummaryComponent,
    ReportOutsourcereportComponent,
    OPDDaycollectionComponent,
    OPDReportDaysummaryComponent,
    OPDReportCitysummarynComponent,
    OPDReportCityycollectionComponent,
    OPDReportDoctorsummaryComponent,
    OPDReportDoctorcollectionComponent, 
    OPDReportRdoctorcollectionComponent,
    OPDReportRdoctonsummaryComponent,
    OPDReportMonthlysummaryComponent,
    OPDReportPatientregisterComponent,
    OPDReportPaymodecollectionComponent,
    OPDReportUsercollectionComponent,    
    MlcInjuryreportComponent,
    MlcPoliceformComponent,
    PatientFullpaymentComponent,
    IpdDischargecardReportComponent,
    OpdMedicalcertificatePrintComponent,
    DisccertificateDEATHComponent,
    DisccertificateLAMAComponent,
    DisccertificateREFFERComponent,
    FILEAdmittricketComponent,
    FILEGenConsentFormComponent,
    MasterTestGroupComponent,
    MasterTestComponent,

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
    NgChartsModule,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class StudentModule { }
