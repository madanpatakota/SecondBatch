

import { Component, ElementRef, Input, ViewChild, EventEmitter, Output, ContentChild }
    from '@angular/core';


@Component({
    selector: "app-customer",
    templateUrl: "./customer.component.html",
    styleUrls: ["./customer.component.css", "./customerapp.component.css"]
})


export class AppCustomer {


    //  x:boolean = 1;



    // 1. I want to inputting|receive|fetch the records from out side.
    // 2. By default in customer applicable only in the Appcustomer.

    @Input() inCustomer: any;
    @Input() inCID: string;
    @Input() inCompName: string;
    @Input() inContName: string;
    //@Input() inCityName :string;

    AddCustomer(CustomerID: HTMLInputElement,
        CompanyName: HTMLInputElement,
        ContactName: HTMLInputElement) {
        console.log("CustomerID ", CustomerID.value);
        console.log("CustomerName ", CompanyName.value);
        console.log("ContactName ", ContactName.value);
    }

    customer = {
        CustomerID: 'ANTON',
        CompanyName: 'Antonio Moreno Taquería',
        ContactName: 'Antonio Moreno'
    }





    @ViewChild('CustomerID') vCustomerID: ElementRef;  // select 
    @ViewChild('CompanyName') vCompanyName: ElementRef;
    @ViewChild('ContactName') vContactName: ElementRef;


    //x = ""
    @ContentChild('cusCityName') cCityName: ElementRef;

    // something : HTMLInputElement

    // @Input -> i am taking the Data;
    // @output -> i am giving the data

    @Output() customerEmitter =
        new EventEmitter<{
            CustomerID, CompanyName, ContactName,
            CityName
        }>();


    AddOneCustomer() {
        debugger;  // pause the compiler
        console.log("----start-----")
        console.log(this.vCustomerID.nativeElement.value);
        console.log(this.vCompanyName.nativeElement.value);
        console.log(this.vContactName.nativeElement.value);
        console.log("cityname", this.cCityName.nativeElement.value);

        this.customerEmitter.emit({
            CustomerID: this.vCustomerID.nativeElement.value,
            CompanyName: this.vCompanyName.nativeElement.value,
            ContactName: this.vContactName.nativeElement.value,
            CityName: this.cCityName.nativeElement.value
        })
    }


    ClearCustomer() {
        this.vCustomerID.nativeElement.value = "";
        this.vCompanyName.nativeElement.value = "";
        this.vContactName.nativeElement.value = "";
    }


}


