import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { TraderAppDashboardComponent } from './trader-app-dashboard/trader-app-dashboard.component';
import { TraderAppTradeComponent } from './trader-app-trade/trader-app-trade.component';

export const routes: Routes = [
  { path: '', redirectTo: 'trader-app-trade', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'trader-app-dashboard', component: TraderAppDashboardComponent, data: { text: 'trader-app-dashboard' } },
  { path: '', redirectTo: 'trader-app-trade', pathMatch: 'full' }, { path: 'trader-app-trade', component: TraderAppTradeComponent, data: { text: 'trader-app-trade' } },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.module').then(m => m.MasterViewModule) },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
