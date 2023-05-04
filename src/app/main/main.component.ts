import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FakeStockDataService } from '../services/fake-stock-data.service';
import { CompanyStockDataService } from '../services/company-stock-data.service';
import { IgxToastComponent } from 'igniteui-angular';


// required imports for working with FinancialChart
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import { FinancialChartType } from "igniteui-angular-charts";
import { FinancialChartYAxisMode } from "igniteui-angular-charts";
import { FinancialChartZoomSliderType } from "igniteui-angular-charts";
import { FinancialChartVolumeType } from "igniteui-angular-charts";
import { StringComparer } from 'igniteui-angular-core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  //@ViewChild(IgxToastComponent);
  @ViewChild(IgxToastComponent, { static: true }) toast: IgxToastComponent;
  @ViewChild(IgxFinancialChartComponent, { static: true }) chart: IgxFinancialChartComponent;

  
  //protected toast: IgxToastComponent;
  //public chart: IgxFinancialChartComponent;
  public dataSource: any[];

  //@ViewChild("chart", { static: true });

  onSearchClicked(value: string) {
    let item = this.companyStockDataCompanyFeed.find(item => item['stock_symbol'] === value);
    // Check for partial matches if no full matches found
    if (!item) {
      item = this.companyStockDataCompanyFeed.find(item => item['stock_symbol'].startsWith(value));
    }
    if (item) {
      this.onItemClicked(item);
      console.log(item);
    } else {
      this.toast.open(`No ticker found with ${value} symbol!`);
    }
  }

  public onItemClicked(item: any) {
    // this.country = item.country;
    console.log("item is: " + item.stock_name);

    console.log(item);
    this.itemData = item;
    console.log("itemData is: " + this.itemData.stock_name);

    this.UpdateChart(item.stock_symbol)

    if (this.prevContact) {
      this.prevContact.selected = false;
    }
    item.selected = true;
    this.prevContact = item;
    this.cdr.detectChanges();
  }

  public companyStockDataCompanyFeed: any [] = null;
  public fakeStockDataStockData: any [] = null;
  public itemData: any;
  private prevContact: any;
  public country: string = 'Initial label value';

  constructor(
    private companyStockDataService: CompanyStockDataService,
    private fakeStockDataService: FakeStockDataService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {

    this.companyStockDataService.getCompanyFeed().subscribe(
      data => {
        this.companyStockDataCompanyFeed = data;
        console.log('Company feed loaded:', data);
        let firstItem = this.companyStockDataCompanyFeed[0];
        console.log('First item:', firstItem);
        this.onItemClicked(firstItem);
        this.UpdateChart(firstItem.stock_symbol)
      },
      error => console.error('Error occurred while fetching company feed:', error),
      () => console.log('Company feed subscription completed')
    );
  }

  public UpdateChart(stockPrices: any[]) {
    console.log("updating chart with " + stockPrices + " stock prices")
    const dataSources: any[] = [];
    const titles = [];
    for (const prices of stockPrices) {
        const stockItems = [];
        let company = "";
        for (const price of prices.toArray()) {
            company = price.company;
            const item = {
                date: price.date,
                open: price.open,
                high: price.high,
                low: price.low,
                close: price.close,
                volume: price.volume
            };
            stockItems.push(item);
        }
        // adding annotations for SeriesTitle
        const symbol = (prices as any).symbol.toString();
        const title = company + " (" + symbol + ")";
        titles.push(title);
        (stockItems as any).__dataIntents = {
            close: ["SeriesTitle/" + title]
        };

        dataSources.push(stockItems);
        console.log("added " + stockItems + " stock items")
    }

    if (this.chart === undefined) { return; }

    // bind and show only OHLC values in the chart
    this.chart.includedProperties = ["*.open", "*.high", "*.low", "*.close", "*.volume", "*.date"];
    this.chart.dataSource = dataSources;

    if (dataSources.length > 1) {
        this.chart.yAxisMode = FinancialChartYAxisMode.PercentChange;
        this.chart.chartType = FinancialChartType.Line;
        this.chart.zoomSliderType = FinancialChartZoomSliderType.Line;
        this.chart.volumeType = FinancialChartVolumeType.None;
        this.chart.subtitle = titles.join(" vs ");
    } else {
        this.chart.yAxisMode = FinancialChartYAxisMode.Numeric;
        this.chart.chartType = FinancialChartType.Bar;
        this.chart.zoomSliderType = FinancialChartZoomSliderType.Bar;
        this.chart.volumeType = FinancialChartVolumeType.None;
        this.chart.subtitle = titles.join(" ");
    }
}



  
}
