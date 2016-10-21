import {Directive, ElementRef, Input, KeyValueDiffers} from '@angular/core';
import {Ng2HighchartsBase} from "./ng2-highcharts-base";

@Directive({
	selector: '[ng2-highcharts]'
})
export class Ng2Highcharts extends Ng2HighchartsBase {
	@Input('ng2-highcharts') options:HighchartsOptions;

	constructor(ele: ElementRef,_differs:KeyValueDiffers) {
		super(ele,_differs);
	}

	draw(opt: HighchartsOptions): void {
		if (!opt) {
			console.log('No valid options...');
			console.log(opt);
			return;
		}
		if (opt.series || opt.data) {
			if (this.pChart) {
				this.pChart.destroy();
			}
			if (!opt.chart) {
				opt.chart = {};
			}
			opt.chart.renderTo = this.hostElement.nativeElement;
			this.pChart = new Highcharts.Chart(opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}
}
