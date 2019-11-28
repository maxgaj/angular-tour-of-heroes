import {NgModule} from '@angular/core';
import {MessagesComponent} from './messages.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    MessagesComponent
  ],
  exports: [
    MessagesComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ]
})
export class MessagesModule {
}
