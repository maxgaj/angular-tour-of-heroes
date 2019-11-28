import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

import {HeroesModule} from './heroes/heroes.module';
import {CoreModule} from './core/core.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {MessagesModule} from './messages/messages.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    HeroesModule,
    DashboardModule,
    MessagesModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
