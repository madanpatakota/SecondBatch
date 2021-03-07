import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //title = "AngularApp";

  IsAlfredsCustomerAvailble = true;
  customerName = "Alfreds"  // coming from DB
  IsDisabled = false;


  Adress = "bangolore";

  customerBGColor = "yellow";

  IsCustomerBGClass = true;

  constructor() {
    setTimeout(() => {
      this.inputtype = "checkbox";
      this.IsDisabled = true;
      this.customerBGColor = "blue";
    }, 10000);

    if (this.customerName != "Alfreds") {
      this.IsAlfredsCustomerAvailble = false;
    }
    if (this.Adress != "bangolore") {
      this.customerBGColor = "brown";
    }

    if (this.Adress != "bangolore") {
      this.IsCustomerBGClass = false;
    }

  }


  inputtype = "textbox";

  getCustomerName() {
    return "Berglunds snabbköp";
    //alert("Berglunds snabbköp");
  }


  getContactName() {
    //return "Berglunds snabbköp";
    alert("Christina Berglund");
  }



  Adress1 = "Hyderabad"

  evtChanges($event) {
    //console.log($event);
    //console.log($event.target.value);
    this.Adress = $event.target.value;
  }



  companyNames =
    ["Berglunds snabbköp",
      "Blauer See Delikatessen",
      "Blondesddsl",
      "Bólido Comidas preparadas"];


  Customers =
    [
      { CustomerID: "BERGS", CompanyName: "Berglunds snabbköp" },
      { CustomerID: "BLAUS", CompanyName: "Blauer See Delikatessen" },
      { CustomerID: "BLONP", CompanyName: "Blondesddsl père et fils" },
      { CustomerID: "BOLID", CompanyName: "Bólido Comidas preparadas" }
    ]













}
