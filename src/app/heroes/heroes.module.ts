import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class HeroesModule {
}
