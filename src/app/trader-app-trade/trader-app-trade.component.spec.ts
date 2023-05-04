import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule, IgxInputGroupModule, IgxListModule, IgxCategoryChartModule, IgxButtonModule, IgxRippleModule, IgxComboModule, IgxGridModule } from 'igniteui-angular';
import { TraderAppTradeComponent } from './trader-app-trade.component';

describe('TraderAppTradeComponent', () => {
  let component: TraderAppTradeComponent;
  let fixture: ComponentFixture<TraderAppTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderAppTradeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule, IgxInputGroupModule, IgxListModule, IgxCategoryChartModule, IgxButtonModule, IgxRippleModule, IgxComboModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderAppTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
