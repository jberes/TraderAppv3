import { Component, OnInit } from '@angular/core';
import { FakeStockDataService } from '../../services/fake-stock-data.service';
import { CompanyStockDataService } from '../../services/company-stock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public companyStockDataCompanyFeed: any = null;
  public fakeStockDataStockData: any = null;

  constructor(
    private companyStockDataService: CompanyStockDataService,
    private fakeStockDataService: FakeStockDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.companyStockDataService.getCompanyFeed().subscribe(data => this.companyStockDataCompanyFeed = data);
    this.fakeStockDataService.getStockData().subscribe(data => this.fakeStockDataStockData = data);
  }
}
