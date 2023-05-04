import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { MainComponent } from './main/main.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { Fdc3playgroundComponent } from './fdc3playground/fdc3playground.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'main', pathMatch: 'full' }, { path: 'main', component: MainComponent, data: { text: 'main' } }, { path: 'dashboards', component: DashboardsComponent, data: { text: 'dashboards' } }, { path: 'dashboardview', component: DashboardviewComponent, data: { text: 'dashboardview' } }, { path: 'fdc3playground', component: Fdc3playgroundComponent, data: { text: 'fdc3playground' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
