import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeatureComponent } from './feature.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ RouterModule.forChild([ {
    path: '',
    component: FeatureComponent
  } ]), SharedModule ],
  declarations: [ FeatureComponent ],
  exports: [ FeatureComponent ],
  providers: []
})
export class FeatureModule {
}
