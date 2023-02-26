import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidator {
    static ValidateName(control: AbstractControl){
        const value = control.value as string;
        if(value.includes('test')){
            return{
                invalidName : true
            }
        }
        return null;
     }


     static ValidateSpecialChar(char:string){

        return (control: AbstractControl) => {

        const value = control.value as string;
        if(value.includes(char)){
            return{
                invalidSpecialChar : true
            };
        }
        return null;

        };
        
     }


     static ValidateDate(control: AbstractControl){
        const checkInDate :any = new Date(control.get('checkinDate')?.value);
        const checkOutDate : any= new Date(control.get('checkoutDate')?.value);
        const diffTime = checkOutDate - checkInDate;
        const diffDays = Math.ceil(diffTime/1000*60*60*24);
        console.log(diffTime);
        console.log(diffDays);

        if(diffTime<=0){

            control.get('checkoutDate')?.setErrors({
                invalidDate:true
            });
            return{
                invalidDate : true
            };
        }
        return null;
     }


}
