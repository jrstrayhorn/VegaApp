import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  baseUrl = environment.apiUrl;
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    this.http.get(this.baseUrl + 'values').subscribe(
      res => {
        this.values = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
