import { Directive, ElementRef, Input, KeyValueDiffers } from '@angular/core';
import { Ng2HighchartsBase } from "./ng2-highcharts-base";

@Directive({
	selector: '[ng2-highstocks]'
})
export class Ng2Highstocks extends Ng2HighchartsBase {
	@Input('ng2-highstocks') options: Object /* HighchartsOptions */;

	constructor(ele: ElementRef, _differs: KeyValueDiffers) {
		super(ele, _differs);
	}

	draw(opt: any /* HighchartsOptions */): void {
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
			this.pChart = new (<any>window).Highcharts.StockChart(opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}
}
