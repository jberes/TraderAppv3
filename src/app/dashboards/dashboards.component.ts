import { Component, OnInit } from '@angular/core';
import { DashboardsListService } from '../services/dashboards-list.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  public dashboardsListDashboards: any = null;

  constructor(
    private dashboardsListService: DashboardsListService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardsListService.getDashboards().subscribe(data => this.dashboardsListDashboards = data);
  }
}
