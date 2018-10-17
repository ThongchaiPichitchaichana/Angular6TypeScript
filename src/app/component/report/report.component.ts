import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
 public id : number;
  public title : string;
  constructor() { }

  ngOnInit() {
	  this.id= 1;
	  this.title = 'test title';
  }

}
