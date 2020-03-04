import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MockapiService } from './serivces/mockapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService: MockapiService) { }
  title = 'privateCircle';
  tableData;
  searchString: string;
  selectedIndex;
  selectedCompanyList: any[];
  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.tableData = data;
    });
  }
  getCompanyDetails(index, dataSelected) {
    this.selectedIndex = index;
    this.selectedCompanyList = dataSelected.company_list;
  }
}
