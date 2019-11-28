import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DashboardModule {
}
