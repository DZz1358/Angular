import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-body-footer',
  templateUrl: './page-body-footer.component.html',
  styleUrls: ['./page-body-footer.component.css']
})
export class PageBodyFooterComponent implements OnInit {
  @Input() weather: any;



  constructor() { }

  ngOnInit(): void {
  }
}
