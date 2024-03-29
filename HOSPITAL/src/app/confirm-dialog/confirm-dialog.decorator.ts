import { Router } from "@angular/router";
import { ConfirmDialogData } from "../confirm-dialog-data";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { DialogService } from "../dialog.service";

export let defaultConfirmData = {
    title: "Confirmation",
    message: "Are you sure you want to perform this action?",
    cancel : function(router : Router){},
    yes: "Yes",
    no: "No",  
}

export function needConfirmation ( confirmData : ConfirmDialogData = defaultConfirmData) {

    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any) {
            DialogService.getInstance()?.openDialog(confirmData,ConfirmDialogComponent).subscribe((validation : any) => {
                if (validation){
                    originalMethod.apply(this, args);
                }
              });
        };

        return descriptor;
    };

}
