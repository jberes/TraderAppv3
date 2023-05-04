import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-trader-app-trade',
  templateUrl: './trader-app-trade.component.html',
  styleUrls: ['./trader-app-trade.component.scss']
})
export class TraderAppTradeComponent implements OnInit {
  public financialBoxOfficeRevenue: any = null;
  public northwindEmployees: any = null;

  constructor(
    private financialService: FinancialService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
