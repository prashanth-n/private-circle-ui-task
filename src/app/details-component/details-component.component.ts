import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.scss']
})
export class DetailsComponentComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-input-rename
  @Input() selectedCompanyList;
  ngOnInit(): void {
  }
}
