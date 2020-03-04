import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('assets/table_details.json');
  }
}
