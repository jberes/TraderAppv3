import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FakeStockDataService } from '../services/fake-stock-data.service';
import { CompanyStockDataService } from '../services/company-stock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  onSearchClicked() {
    // When the Input is clicked, I want to grab the "Ticker" from the input
    // and 'jump' to the corresponding row in the List and select it, thus firing the 
    // onItemClicked event 
    throw new Error('Method not implemented.');
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

  public companyStockDataCompanyFeed: any = null;
  public fakeStockDataStockData: any = null;
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
