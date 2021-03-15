import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  // template: `<p>This is the first paragraph</p>
  // <p>This is the second paragraph</p>`,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
  //styles: ['p{ background-color:red } ', 'p {font-size : 30px']
})
export class CustomersComponent {

  Customers =
    [
      {
        CustomerID: "BERGS", CompanyName: "Berglunds snabbköp",
        ContactName: "Christina Berglund	Luleå", City: "Luleå"
      },
      {
        CustomerID: "BLAUS", CompanyName: "Blauer See Delikatessen	",
        ContactName: "Hanna Moos	Mannheim", City: "Mannheim"
      },
      {
        CustomerID: "BLONP",
        CompanyName: "Blondesddsl père et fils	",
        ContactName: "Frédérique Citeaux	Strasbourg",
        City: "Strasbourg"
      },
      {
        CustomerID: "BOLID", CompanyName: "Bólido Comidas preparadas	",
        ContactName: "Martín Sommer	Madrid",
         City: "Madrid"
      }
    ]


  CustomerData = {
    CustomerID: "",
    CompanyName: "",
    ContactName: "",
  }

  CID = ""
  CompName = ""
  ContactName = ""
  
  CityName = "";

  SelectedRecord(customerCurrentRow) {
    //console.log(customer);
    //this.CustomerData = customerCurrentRow;
    this.CID = customerCurrentRow.CustomerID;
    this.CompName = customerCurrentRow.CompanyName;
    this.ContactName = customerCurrentRow.ContactName;
    this.CityName = customerCurrentRow.City;
  }

  //Main page
  //updates = ["yerday","thedaybefore"];


  //i want to do something
  //todayupdate = "i did somethig";


  clickbutton() {
    //this.updates.push(this.todayupdate);
  }



  onAddCustomer($event) {
    debugger;
    console.log("fired");
    console.log($event);
    console.log("----stop-----");
    this.Customers.push(
      {
        CustomerID: $event.CustomerID,
        CompanyName: $event.CompanyName,
        ContactName: $event.ContactName,
        City: $event.CityName
      });
  }

}
