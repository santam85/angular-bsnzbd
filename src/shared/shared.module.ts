import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from "ng2-charts";

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, NgChartsModule ],
  declarations: [],
  exports: [ NgChartsModule ],
  providers: []
})
export class SharedModule {
}
