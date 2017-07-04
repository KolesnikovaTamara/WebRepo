import { NgModule } from '@angular/core';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    SecondRoutingModule,
    SharedModule
  ],
  declarations: [SecondComponent]
})
export class SecondModule {
}
