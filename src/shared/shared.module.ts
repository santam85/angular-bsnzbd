import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { MyComponent } from './components/my.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgChartsModule],
  declarations: [MyComponent],
  exports: [MyComponent],
  providers: []
})
export class SharedModule {}
