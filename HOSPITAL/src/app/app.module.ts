import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StudentModule } from './student/student.module';
import { FormsModule }        from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpdregComponent } from './student/OPD-Reg/OPD-Reg.component';
import { OpdlistComponent } from './student/OPD-List/OPD-List.component';
import { MasterChargesComponent } from './student/Master-Charges/Master-Charges.component';
import { OpdrefundComponent } from './student/OPD-refund/OPD-refund.component';
import { OpdpmodechangeComponent } from './student/OPD-Pmodechange/OPD-Pmodechange.component';
import { DashboardComponent } from './student/Menu-Dashboard/Menu-Dashboard.component';
import { OpddoctorchangeComponent } from './student/OPD-Doctorchange/OPD-Doctorchange.component';
import { KeyupdateComponent } from './student/Control-Keyupdate/Control-Keyupdate.component';
import { PatientinformationchangeComponent } from './student/Control-Patientinformationchange/Control-Patientinformationchange.component';
import { OpdreciptsComponent } from './student/PRINT-OPD-recipts/PRINT-OPD-recipts.component';
import { OpdparchaComponent } from './student/PRINT-OPD-parcha/PRINT-OPD-parcha.component';
import { OpdslipaComponent } from './student/PRINT-OPD-SLIP/PRINT-OPD-SLIP.component';
import { BackupdatabaseComponent } from './student/Control-Backupdatabase/Control-Backupdatabase.component';
import { ControlSetupComponent } from './student/control-setup/control-setup.component';
import { OpdMasterReportComponent } from './student/opd-master-report/opd-master-report.component';
import { OPDEMRComponent } from './student/opd-emr/opd-emr.component';
import { IPDADMITLISTComponent } from './student/ipd-admitlist/ipd-admitlist.component';
import { IPDDISCHARGEComponent } from './student/ipd-dischargelist/ipd-dischargelist.component';
import { IPDRegComponent } from './student/ipd-reg/ipd-reg.component';
import { IPDPaymentComponent } from './student/ipd-payment/ipd-payment.component';
import { IPDPaymentdetailsComponent } from './student/ipd-paymentdetails/ipd-paymentdetails.component';
import { IPDRoomshiftingComponent } from './student/ipd-roomshifting/ipd-roomshifting.component';
import { IPDBillingComponent } from './student/ipd-billing/ipd-billing.component';
import { IPDPaymentreceiptComponent } from './student/ipd-paymentreceipt/ipd-paymentreceipt.component';
import { IPDPaymentmodechangeComponent } from './student/ipd-paymentmodechange/ipd-paymentmodechange.component';
import { IPDBillprint1Component } from './student/ipd-billprint1/ipd-billprint1.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IPDBilldischargeComponent } from './student/ipd-billdischarge/ipd-billdischarge.component';
import { IPDBillprint2Component } from './student/ipd-billprint2/ipd-billprint2.component';
import { IPDBillprint3Component } from './student/ipd-billprint3/ipd-billprint3.component';
import { IPDBillprint4Component } from './student/ipd-billprint4/ipd-billprint4.component';
import { DueamountListComponent } from './student/Test_due_list/Test_due_list.component';
import { IpdDueListComponent } from './student/ipd-due-list/ipd-due-list.component';
import { TestDueRecivedComponent } from './student/test-due-recived/test-due-recived.component';
import { PatientDetailsComponent } from './student/patient-details/patient-details.component';
import { IpdBillCorrectionComponent } from './student/ipd-bill-correction/ipd-bill-correction.component';
import { IpdFileDocumentComponent } from './student/ipd-file-document/ipd-file-document.component';
import { IpdRegEditComponent } from './student/ipd-reg-edit/ipd-reg-edit.component';
import { IpdMlcComponent } from './student/ipd-mlc/ipd-mlc.component';
import { IpdEmergencyCertificateComponent } from './student/ipd-emergency-certificate/ipd-emergency-certificate.component';
import { IpdDoctorchangeComponent } from './student/ipd-doctorchange/ipd-doctorchange.component';
import { IpdDischargecardComponent } from './student/ipd-dischargecard/ipd-dischargecard.component';
import { IpdGatepassComponent } from './student/ipd-gatepass/ipd-gatepass.component';
import { IpdReportreceivedComponent } from './student/ipd-reportreceived/ipd-reportreceived.component';
import { IpdToolTipComponent } from './student/ipd-tool-tip/ipd-tool-tip.component';
import { IpdDischargeControlComponent } from './student/ipd-discharge-control/ipd-discharge-control.component';
import { LoginExpiredComponent } from './login-expired/login-expired.component';
import { MasterWardComponent } from './student/master-ward/master-ward.component';
import { MasterWardInsertComponent } from './student/master-ward-insert/master-ward-insert.component';
import { MasterWardEditComponent } from './student/master-ward-edit/master-ward-edit.component';
import { MasterShiftTimingComponent } from './student/master-shift-timing/master-shift-timing.component';
import { IpdPaymentStatusComponent } from './student/ipd-payment-status/ipd-payment-status.component';
import { IpdPaymentStatusSlipComponent } from './student/ipd-payment-status-slip/ipd-payment-status-slip.component';
import { OpdMedicalcertificateComponent } from './student/opd-medicalcertificate/opd-medicalcertificate.component';
import { IPDDischargeCardTemplateComponent } from './student/ipd-discharge-card-template/ipd-discharge-card-template.component';
import { MenuAccountComponent } from './student/menu-account/menu-account.component';
import { IPDDisccertificateComponent } from './student/ipd-disccertificate/ipd-disccertificate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OpdregComponent,
    OpdlistComponent,
    MasterChargesComponent,
    OpdrefundComponent,
    OpdpmodechangeComponent,
    DashboardComponent,
    OpddoctorchangeComponent,
    KeyupdateComponent,
    PatientinformationchangeComponent,
    OpdreciptsComponent,
    OpdparchaComponent,
    OpdslipaComponent,
    BackupdatabaseComponent,
    ControlSetupComponent,
    OpdMasterReportComponent,
    OPDEMRComponent,
    IPDADMITLISTComponent,
    IPDDISCHARGEComponent,
    IPDRegComponent,
    IPDPaymentComponent,
    IPDPaymentdetailsComponent,
    IPDRoomshiftingComponent,
    IPDBillingComponent,
    IPDPaymentreceiptComponent,
    IPDPaymentmodechangeComponent,
    IPDBillprint1Component,
    IPDBilldischargeComponent,
    IPDBillprint2Component,
    IPDBillprint3Component,
    IPDBillprint4Component,
    DueamountListComponent,
    IpdDueListComponent,
    TestDueRecivedComponent,
    PatientDetailsComponent,
    IpdBillCorrectionComponent,
    IpdFileDocumentComponent,
    IpdRegEditComponent,
    IpdMlcComponent,
    IpdEmergencyCertificateComponent,
    IpdDoctorchangeComponent,
    IpdDischargecardComponent,
    IpdGatepassComponent,
    IpdReportreceivedComponent,
    IpdToolTipComponent,
    IpdDischargeControlComponent,
    LoginExpiredComponent,
    MasterWardComponent,
    MasterWardInsertComponent,
    MasterWardEditComponent,
    MasterShiftTimingComponent,
    IpdPaymentStatusComponent,
    IpdPaymentStatusSlipComponent,
    OpdMedicalcertificateComponent,
    IPDDischargeCardTemplateComponent,
    MenuAccountComponent,
    IPDDisccertificateComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   ReactiveFormsModule,
   StudentModule,
   BrowserAnimationsModule,
   FormsModule,
   
   
    ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
