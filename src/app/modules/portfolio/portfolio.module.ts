import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioDashboardComponent } from './components/portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PortfolioDashboardComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
    
  ],exports: [
    PortfolioDashboardComponent
  ],
})
export class PortfolioModule { }
