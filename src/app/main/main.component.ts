import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FakeStockDataService } from '../services/fake-stock-data.service';
import { CompanyStockDataService } from '../services/company-stock-data.service';
import { IgxToastComponent } from 'igniteui-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(IgxToastComponent)
  protected toast: IgxToastComponent;

  onSearchClicked(value: string) {
    let item = this.companyStockDataCompanyFeed.find(item => item['stock_symbol'] === value);
    // Check for partial matches if no full matches found
    if (!item) {
      item = this.companyStockDataCompanyFeed.find(item => item['stock_symbol'].startsWith(value));
    }
    if (item) {
      this.onItemClicked(item);
    } else {
      this.toast.open(`No ticker found with ${value} symbol!`);
    }
  }

  public onItemClicked(item: any) {
    this.country = item.country;
    console.log(item);

    if (this.prevContact) {
      this.prevContact.selected = false;
    }
    item.selected = true;
    this.prevContact = item;
    this.cdr.detectChanges();
  }

  public companyStockDataCompanyFeed: any [] = null;
  public fakeStockDataStockData: any [] = null;
  private prevContact: any;
  public country: string = 'Initial label value';

  constructor(
    private companyStockDataService: CompanyStockDataService,
    private fakeStockDataService: FakeStockDataService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.companyStockDataService.getCompanyFeed().subscribe(data => this.companyStockDataCompanyFeed = data);
    this.fakeStockDataService.getStockData().subscribe(data => this.fakeStockDataStockData = data);
  }
}
