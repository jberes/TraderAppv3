import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyStockDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getCompanyFeed(): Observable<any> {
    return this.http.get("https://users.infragistics.com/Reveal/Data/FakeCompanyStockData.json");
  }
}
