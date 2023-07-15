// student-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './Test-List/Test-List.component';
import { AddStudentComponent } from './Master-Consultant/Master-Consultant.component';
import { EdittStudentComponent } from './Menu-Master/Menu-Master.component';
import { NewBookingComponent } from './Test-Booking/Test-Booking.component';
import { RefundComponent } from './TEST-Refund/TEST-Refund.component';
import { TestgroupComponent } from './Master-Paymode/Master-Paymode.component';
import { TestdepartmentComponent } from './Master-Department/Master-Department.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewloginComponent } from './Control-Adduser/Control-Adduser.component';
import { SamplebillComponent } from './samplebill/samplebill.component';
import { ReciptsComponent } from './PRINT-TEST-recipts/PRINT-TEST-recipts.component';
import { MastercityComponent } from './Master-City/Master-City.component';
import { MasteroutsidelabComponent } from './Master-outsidelab/Master-outsidelab.component';
import { ControlComponent } from './Menu-Control/Menu-Control.component';
import { ReciptsBillComponent } from './PRINT-TEST-reciptsbill/PRINT-TEST-reciptsbill.component';
import { TestratechangeComponent } from './Master-Testratechange/Master-Testratechange.component';
import { AddressChangeComponent } from './Control-profilechange/Control-profilechange.component';
import { UserPermissionComponent } from './Control-Userpermission/Control-Userpermission.component';
import { MasterReportComponent } from './Test-master-report/Test-master-report.component';
import { MainpageMobileComponent } from './mainpage-mobile/mainpage-mobile.component';
import { OpdregComponent } from './OPD-Reg/OPD-Reg.component';
import { OpdlistComponent } from './OPD-List/OPD-List.component';
import { MasterChargesComponent } from './Master-Charges/Master-Charges.component';
import { OpdrefundComponent } from './OPD-refund/OPD-refund.component';
import { DashboardComponent } from './Menu-Dashboard/Menu-Dashboard.component';
import { OpdpmodechangeComponent } from './OPD-Pmodechange/OPD-Pmodechange.component';
import { OpddoctorchangeComponent } from './OPD-Doctorchange/OPD-Doctorchange.component';
import { KeyupdateComponent } from './Control-Keyupdate/Control-Keyupdate.component';
import { PatientinformationchangeComponent } from './Control-Patientinformationchange/Control-Patientinformationchange.component';
import { EditConsultantMasterComponent } from './edit-consultant-master/edit-consultant-master.component';
import { OpdparchaComponent } from './PRINT-OPD-parcha/PRINT-OPD-parcha.component';
import { OpdreciptsComponent } from './PRINT-OPD-recipts/PRINT-OPD-recipts.component';
import { BackupdatabaseComponent } from './Control-Backupdatabase/Control-Backupdatabase.component';
import { ControlSetupComponent } from './control-setup/control-setup.component';
import { OpdMasterReportComponent } from './opd-master-report/opd-master-report.component';
import { ReportDaycollectionComponent } from './report-daycollection/report-daycollection.component';
import { ReportDaysummaryComponent } from './report-daysummary/report-daysummary.component';
import { ReportMonthlysummaryComponent } from './report-monthlysummary/report-monthlysummary.component';
import { ReportDoctorcollectionComponent } from './report-doctorcollection/report-doctorcollection.component';
import { ReportDoctorysummaryComponent } from './report-doctorysummary/report-doctorysummary.component';
import { MisMasterComponent } from './mis-master/mis-master.component';
import { MisDailyAcitiyDetailsComponent } from './mis-daily-acitiy-details/mis-daily-acitiy-details.component';
import { MisDailyAcitiyPaymodeComponent } from './mis-daily-acitiy-paymode/mis-daily-acitiy-paymode.component';
import { MisDailyAcitiyHeadsComponent } from './mis-daily-acitiy-heads/mis-daily-acitiy-heads.component';
import { MisDailyAcitiySummaryComponent } from './mis-daily-acitiy-summary/mis-daily-acitiy-summary.component';
import { MisDailyAcitiyHeadmonthComponent } from './mis-daily-acitiy-headmonth/mis-daily-acitiy-headmonth.component';
import { MisDailyAcitiyHeadsumdayComponent } from './mis-daily-acitiy-headsumday/mis-daily-acitiy-headsumday.component';
import { ReportCitysummaryComponent } from './report-citysummary/report-citysummary.component';
import { ReportCitycollectionComponent } from './report-citycollection/report-citycollection.component';
import { ReportPatientwiseComponent } from './report-patientwise/report-patientwise.component';
import { ReportUsercollectionyComponent } from './report-usercollectiony/report-usercollectiony.component';
import { ReportPaymodeycollectionComponent } from './report-paymodeycollection/report-paymodeycollection.component';
import { ReportDSRComponent } from './report-dsr/report-dsr.component';
import { ReportOutsourcesummaryComponent } from './report-outsourcesummary/report-outsourcesummary.component';
import { ReportOutsourcereportComponent } from './report-outsourcereport/report-outsourcereport.component';
import { OPDDaycollectionComponent } from './opd-daycollection/opd-daycollection.component';
import { OPDReportDaysummaryComponent } from './opd-report-daysummary/opd-report-daysummary.component';
import { OPDReportMonthlysummaryComponent } from './opd-report-monthlysummary/opd-report-monthlysummary.component';
import { OPDReportDoctorcollectionComponent } from './opd-report-doctorcollection/opd-report-doctorcollection.component';
import { OPDReportDoctorsummaryComponent } from './opd-report-doctorsummary/opd-report-doctorsummary.component';
import { OPDReportCitysummarynComponent } from './opd-report-citysummary/opd-report-citysummary.component';
import { OPDReportCityycollectionComponent } from './opd-report-citycollection/opd-report-cityycollection.component';
import { OPDReportPatientregisterComponent } from './opd-report-patientregister/opd-report-patientregister.component';
import { OPDReportUsercollectionComponent } from './opd-report-usercollection/opd-report-usercollection.component';
import { OPDReportPaymodecollectionComponent } from './opd-report-paymodecollection/opd-report-paymodecollection.component';
import { OPDReportRdoctorcollectionComponent } from './opd-report-rdoctorcollection/opd-report-rdoctorcollection.component';
import { OPDReportRdoctonsummaryComponent } from './opd-report-rdoctonsummary/opd-report-rdoctonsummary.component';
import { OPDEMRComponent } from './opd-emr/opd-emr.component';
import { IPDADMITLISTComponent } from './ipd-admitlist/ipd-admitlist.component';
import { IPDDISCHARGEComponent } from './ipd-dischargelist/ipd-dischargelist.component';
import { IPDRoomshiftingComponent } from './ipd-roomshifting/ipd-roomshifting.component';
import { IPDPaymentreceiptComponent } from './ipd-paymentreceipt/ipd-paymentreceipt.component';
import { IPDPaymentmodechangeComponent } from './ipd-paymentmodechange/ipd-paymentmodechange.component';
import { IPDBillprint1Component } from './ipd-billprint1/ipd-billprint1.component';
import { IPDBillprint2Component } from './ipd-billprint2/ipd-billprint2.component';
import { IPDBillprint3Component } from './ipd-billprint3/ipd-billprint3.component';
import { IPDBillprint4Component } from './ipd-billprint4/ipd-billprint4.component';
import { MlcPoliceformComponent } from './ipd-mlc-policeform/ipd-mlc-policeform.component';
import { MlcInjuryreportComponent } from './ipd-mlc-injuryreport/ipd-mlc-injuryreport.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { IpdEmergencyCertificateComponent } from './ipd-emergency-certificate/ipd-emergency-certificate.component';
import { PatientFullpaymentComponent } from './patient-fullpayment/patient-fullpayment.component';
import { IpdDischargecardComponent } from './ipd-dischargecard/ipd-dischargecard.component';
import { IpdGatepassComponent } from './ipd-gatepass/ipd-gatepass.component';
import { IpdReportreceivedComponent } from './ipd-reportreceived/ipd-reportreceived.component';
import { IpdDischargecardReportComponent } from './ipd-dischargecard-report/ipd-dischargecard-report.component';
import { MasterWardComponent } from './master-ward/master-ward.component';
import { IpdPaymentStatusComponent } from './ipd-payment-status/ipd-payment-status.component';
import { IpdPaymentStatusSlipComponent } from './ipd-payment-status-slip/ipd-payment-status-slip.component';
import { OpdMedicalcertificatePrintComponent } from './opd-medicalcertificate-print/opd-medicalcertificate-print.component';
import { MenuAccountComponent } from './menu-account/menu-account.component';
import { DisccertificateLAMAComponent } from './disccertificate-lama/disccertificate-lama.component';
import { DisccertificateDEATHComponent } from './disccertificate-death/disccertificate-death.component';
import { DisccertificateREFFERComponent } from './disccertificate-reffer/disccertificate-reffer.component';
import { FILEAdmittricketComponent } from './file-admittricket/file-admittricket.component';
import { FILEGenConsentFormComponent } from './file-gen-consent-form/file-gen-consent-form.component';
import { IPDRegComponent } from './ipd-reg/ipd-reg.component';
import { MasterTestGroupComponent } from './master-test-group/master-test-group.component';
import { MasterTestComponent } from './master-test/master-test.component';
import { PatholgoyreportComponent } from './patholgoyreport/patholgoyreport.component';
import { TestresultComponent } from './testresult/testresult.component';
import { TestreportComponent } from './testreport/testreport.component';
import { IpdEditAfterdischComponent } from './ipd-edit-afterdisch/ipd-edit-afterdisch.component';

const routes: Routes = [
    // RECIPTS 
    { path: 'receipts/:id', component: ReciptsComponent },
    { path: 'receiptsb/:id', component: ReciptsBillComponent },
    { path: 'opdreceipt/:id/:opdDate', component: OpdreciptsComponent },
    { path: 'opdparcha/:id/:opdDate', component: OpdparchaComponent },

    { path: 'MedicalCert_print/:id/:cerDate', component: OpdMedicalcertificatePrintComponent },

    { path: 'lama/:dcmntNo/:uhID', component: DisccertificateLAMAComponent },
    { path: 'death/:dcmntNo/:uhID', component: DisccertificateDEATHComponent },
    { path: 'reffer/:dcmntNo/:uhID', component: DisccertificateREFFERComponent },

    //IPD
    { path: 'emer_certificate/:dcmntNo/:dt', component: IpdEmergencyCertificateComponent },
    { path: 'sticker/:dcmntNo/:dt', component: PatientDetailsComponent },
    { path: 'ipdreceipt/:id/:dt/:yrs/:dcmntno/:uhid', component: IPDPaymentreceiptComponent },
    { path: 'fullpayment/:uhID', component: PatientFullpaymentComponent },
    { path: 'gatepass/:dcmntNo/:dt/:uhID', component: IpdGatepassComponent },
    { path: 'reportrec/:dcmntNo/:dt/:uhID', component: IpdReportreceivedComponent },
    { path: 'dischargereport/:ipdno/:uhid/:dt/:category/:roomNo/:Bedno', component: IpdDischargecardReportComponent },
    { path: 'paymentstatus', component: IpdPaymentStatusComponent },
    { path: 'paymentstatus_slip', component: IpdPaymentStatusSlipComponent },

    //MLC
    { path: 'pi/:ipdNo/:uhID', component: MlcPoliceformComponent },
    { path: 'injury/:ipdNo/:uhID', component: MlcInjuryreportComponent },

    //COMPLETE FILES
    { path: 'admitticket/:dcmntNo/:dt', component: FILEAdmittricketComponent },
    { path: 'genconsent/:dcmntNo/:dt', component: FILEGenConsentFormComponent },

    //OPD Reporting
    { path: 'opddaycollection/:vrdt1/:vrdt2', component: OPDDaycollectionComponent },
    { path: 'opddaysummary/:vrdt1/:vrdt2', component: OPDReportDaysummaryComponent },
    { path: 'opdmonthsummary/:vrdt1/:vrdt2', component: OPDReportMonthlysummaryComponent },
    { path: 'opddoctor/:vrdt1/:vrdt2/:doctor', component: OPDReportDoctorcollectionComponent },
    { path: 'opddoctorsummary/:vrdt1/:vrdt2', component: OPDReportDoctorsummaryComponent },
    { path: 'ropddoctor/:vrdt1/:vrdt2/:doctor', component: OPDReportRdoctorcollectionComponent },
    { path: 'opdrdoctorsummary/:vrdt1/:vrdt2', component: OPDReportRdoctonsummaryComponent },
    { path: 'opdcitysummary/:vrdt1/:vrdt2', component: OPDReportCitysummarynComponent },
    { path: 'opdcity/:vrdt1/:vrdt2/:city', component: OPDReportCityycollectionComponent },
    { path: 'opdpatientregister/:vrdt1/:vrdt2', component: OPDReportPatientregisterComponent },
    { path: 'opduser/:vrdt1/:vrdt2/:nuname', component: OPDReportUsercollectionComponent },
    { path: 'opdpaymode/:vrdt1/:vrdt2/:paymode', component: OPDReportPaymodecollectionComponent },



    // Test Reporting
    { path: 'daycollection/:vrdt1/:vrdt2', component: ReportDaycollectionComponent },
    { path: 'daysummary/:vrdt1/:vrdt2', component: ReportDaysummaryComponent },
    { path: 'monthsummary/:vrdt1/:vrdt2', component: ReportMonthlysummaryComponent },
    { path: 'doctor/:vrdt1/:vrdt2/:doctor', component: ReportDoctorcollectionComponent },
    { path: 'doctorsummary/:vrdt1/:vrdt2', component: ReportDoctorysummaryComponent },
    { path: 'citysummary/:vrdt1/:vrdt2', component: ReportCitysummaryComponent },
    { path: 'city/:vrdt1/:vrdt2/:city', component: ReportCitycollectionComponent },
    { path: 'patientregister/:vrdt1/:vrdt2', component: ReportPatientwiseComponent },
    { path: 'user/:vrdt1/:vrdt2/:nuname', component: ReportUsercollectionyComponent },
    { path: 'paymode/:vrdt1/:vrdt2/:paymode', component: ReportPaymodeycollectionComponent },
    { path: 'dsr/:vrdt1/:vrdt2', component: ReportDSRComponent },
    { path: 'Outsourcesummary/:vrdt1/:vrdt2', component: ReportOutsourcesummaryComponent },
    { path: 'Outsource/:vrdt1/:vrdt2/:Outsource', component: ReportOutsourcereportComponent },

    { path: 'listreport/:id', component: TestreportComponent },

    {
        path: 'homepage', component: HomepageComponent,
        children: [
            {
                path: '', component: (() => {
                    let check = false;
                    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
                    if (check) {
                        return MainpageMobileComponent
                    }
                    return MainpageComponent
                })()
            },
            {
                path: 'main', component: (() => {
                    let check = false;
                    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
                    if (check) {
                        return MainpageMobileComponent
                    }
                    return MainpageComponent
                })()
            },
            { path: 'edit', component: EdittStudentComponent },
            { path: 'add', component: AddStudentComponent },
            { path: 'radd', component: EditConsultantMasterComponent },
            { path: 'testdepartment', component: TestdepartmentComponent },
            { path: 'testgroup', component: TestgroupComponent },
            { path: 'Otherlab', component: MasteroutsidelabComponent },
            { path: 'testcity', component: MastercityComponent },
            { path: 'Charges', component: MasterChargesComponent },
            { path: 'testratechange', component: TestratechangeComponent },


            { path: 'dashboard', component: DashboardComponent },

            { path: 'opdlist', component: OpdlistComponent },
            { path: 'opdreg', component: OpdregComponent },
            { path: 'opdrefund', component: OpdrefundComponent },
            { path: 'opdpaymentmode', component: OpdpmodechangeComponent },
            { path: 'opddoctorchange', component: OpddoctorchangeComponent },
            { path: 'opd-reportmaster', component: OpdMasterReportComponent },


            { path: 'ipdlist', component: IPDADMITLISTComponent },
            { path: 'ipdreg', component: IPDRegComponent },
            { path: 'ipddischarge', component: IPDDISCHARGEComponent },
            { path: 'roomshifting', component: IPDRoomshiftingComponent },
            { path: 'ipdpaymentmode/:id/:dt/:yrs', component: IPDPaymentmodechangeComponent },

            { path: 'list', component: ListStudentComponent },
            { path: 'newbooking', component: NewBookingComponent },
            { path: 'newbooking/:id/:dt/:ty', component: NewBookingComponent },
            { path: 'refund', component: RefundComponent },
            { path: 'samplebill', component: SamplebillComponent },
            { path: 'Test-reportmaster', component: MasterReportComponent },
            { path: 'Ward', component: MasterWardComponent },

            { path: 'Pathology', component: PatholgoyreportComponent },

            { path: 'ipddischarge', component: IPDDISCHARGEComponent },

            { path: 'control', component: ControlComponent },
            { path: 'newlogin', component: NewloginComponent },
            { path: 'userpermission', component: UserPermissionComponent },
            { path: 'keyupdate', component: KeyupdateComponent },
            { path: 'profilechange', component: AddressChangeComponent },
            { path: 'patientchange', component: PatientinformationchangeComponent },
            { path: 'Backup', component: BackupdatabaseComponent },
            { path: 'setup', component: ControlSetupComponent },

            { path: 'mis-master', component: MisMasterComponent },
            { path: 'Account', component: MenuAccountComponent },
            { path: "testggroup", component: MasterTestGroupComponent },
            { path: "test", component: MasterTestComponent },
            { path: "result/:id", component: TestresultComponent },
            { path: "ipdedita/:v/:d/:u/:opdDate", component: IpdEditAfterdischComponent },
            //Estimated IPD Bill
            { path: 'ipdbill1/:dcmntNo/:uhID', component: IPDBillprint1Component },
            //IPD Bill
            { path: 'ipdbill3/:billno/:yrs/:dcmntNo/:uhID', component: IPDBillprint2Component },
            { path: 'ipdbill2/:billno/:yrs/:dcmntNo/:uhID', component: IPDBillprint3Component },
            { path: 'ipdbill4/:billno/:yrs/:dcmntNo/:uhID', component: IPDBillprint4Component },

            //MIS Reporting
            { path: 'dailyacitivy-details/:vrdt1/:vrdt2', component: MisDailyAcitiyDetailsComponent },
            { path: 'dailyacitivy-Paymode/:vrdt1/:vrdt2/:doc1', component: MisDailyAcitiyPaymodeComponent },
            { path: 'dailyacitivy-Summary/:vrdt1/:vrdt2', component: MisDailyAcitiySummaryComponent },
            { path: 'dailyacitivy-Heads/:vrdt1/:vrdt2/:doc1', component: MisDailyAcitiyHeadsComponent },
            { path: 'dailyacitivy-Headsday/:vrdt1/:vrdt2/:doc1', component: MisDailyAcitiyHeadsumdayComponent },
            { path: 'dailyacitivy-Headssummonth/:vrdt1/:vrdt2/:doc1', component: MisDailyAcitiyHeadmonthComponent },


        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }