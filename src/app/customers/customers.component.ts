import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  template: `<p>This is the first paragraph</p>
  <p>This is the second paragraph</p>`,
  //templateUrl: './customers.component.html',
  //styleUrls: ['./customers.component.css']
  styles: ['p{ background-color:red } ' , 'p {font-size : 30px']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
