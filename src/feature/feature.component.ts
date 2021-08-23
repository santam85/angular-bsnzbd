import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html'
})
export class FeatureComponent implements OnInit {
  data = { datasets:[ {data: [10], label: 'dataset'}], labels: ['label']} ;
  constructor() {}

  ngOnInit(): void {}
}
