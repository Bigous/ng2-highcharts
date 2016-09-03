import { NgModule } from '@angular/core';
import { Ng2Highcharts } from '../directives/ng2-highcharts';
import { Ng2Highmaps } from '../directives/ng2-highmaps';
import { Ng2Highstocks } from '../directives/ng2-highstocks';

@NgModule({
  declarations: [ Ng2Highcharts, Ng2Highmaps, Ng2Highstocks],
  exports: [ Ng2Highcharts, Ng2Highmaps, Ng2Highstocks]
})
export class Ng2HighchartsModule { }