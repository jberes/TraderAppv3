import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraderAppDashboardComponent } from './trader-app-dashboard/trader-app-dashboard.component';
import { IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule, IgxInputGroupModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxComboModule, IgxGridModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { TraderAppTradeComponent } from './trader-app-trade/trader-app-trade.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TraderAppDashboardComponent,
    TraderAppTradeComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    FormsModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxCategoryChartModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxComboModule,
    IgxGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
