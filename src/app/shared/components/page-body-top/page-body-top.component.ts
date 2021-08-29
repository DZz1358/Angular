import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-body-top',
  templateUrl: './page-body-top.component.html',
  styleUrls: ['./page-body-top.component.css']
})
export class PageBodyTopComponent implements OnInit {
  @Input() weather: any;
  @Input() cityInfo: any;


  constructor() { }

  ngOnInit(): void {
  }

}
