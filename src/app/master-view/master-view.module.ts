import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { MainComponent } from './main/main.component';
import { IgxInputGroupModule, IgxIconModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxAvatarModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { Fdc3playgroundComponent } from './fdc3playground/fdc3playground.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    MainComponent,
    DashboardsComponent,
    DashboardviewComponent,
    Fdc3playgroundComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxListModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCategoryChartModule,
    FormsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
