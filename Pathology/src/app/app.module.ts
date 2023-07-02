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
import { KeyupdateComponent } from './student/keyupdate/keyupdate.component';
import { TestPaymodeComponent } from './student/test-paymode/test-paymode.component';
import { TestDoctorchangeComponent } from './student/test-doctorchange/test-doctorchange.component';
import { ReportDaycollectionComponent } from './student/report-daycollection/report-daycollection.component';
import { ReportDaysummaryComponent } from './student/report-daysummary/report-daysummary.component';
import { ReportMonthlysummaryComponent } from './student/report-monthlysummary/report-monthlysummary.component';
import { ReportDoctorysummaryComponent } from './student/report-doctorysummary/report-doctorysummary.component';
import { ReportDoctorcollectionComponent } from './student/report-doctorcollection/report-doctorcollection.component';
import { ReportPatientwiseComponent } from './student/report-patientwise/report-patientwise.component';
import { ReportDSRComponent } from './student/report-dsr/report-dsr.component';
import { ReportCitysummaryComponent } from './student/report-citysummary/report-citysummary.component';
import { ReportUsercollectionyComponent } from './student/report-usercollectiony/report-usercollectiony.component';
import { ReportTestwisereportyComponent } from './student/report-testwisereporty/report-testwisereporty.component';
import { ReportTestwisesummaryComponent } from './student/report-testwisesummary/report-testwisesummary.component';
import { ReportOutsourcereportComponent } from './student/report-outsourcereport/report-outsourcereport.component';
import { ReportOutsourcesummaryComponent } from './student/report-outsourcesummary/report-outsourcesummary.component';
import { ReportCitycollectionComponent } from './student/report-citycollection/report-citycollection.component';
import { ReportPaymodeycollectionComponent } from './student/report-paymodeycollection/report-paymodeycollection.component';
import { ReportPpageheadingComponent } from './student/report-PageHeading/report-PageHeading.component';
import { TestOutsourcechangeComponent } from './student/test-outsourcechange/test-outsourcechange.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KeyupdateComponent,
    TestPaymodeComponent,
    TestDoctorchangeComponent,
    TestOutsourcechangeComponent,
    ReportDaycollectionComponent,
    ReportDaysummaryComponent,
    ReportMonthlysummaryComponent,
    ReportDoctorysummaryComponent,
    ReportDoctorcollectionComponent,
    ReportPatientwiseComponent,
    ReportDSRComponent,
    ReportCitysummaryComponent,
    ReportUsercollectionyComponent,
    ReportTestwisereportyComponent,
    ReportTestwisesummaryComponent,
    ReportOutsourcereportComponent,
    ReportOutsourcesummaryComponent,
    ReportCitycollectionComponent,
    ReportPaymodeycollectionComponent,
    ReportPpageheadingComponent,

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
