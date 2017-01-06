import { Directive, ElementRef, Input, KeyValueDiffers } from '@angular/core';
import { Ng2HighchartsBase } from "./ng2-highcharts-base";

@Directive({
	selector: '[ng2-highmaps]'
})
export class Ng2Highmaps extends Ng2HighchartsBase {
	@Input('ng2-highmaps') options: Object /* HighchartsOptions */;

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
			this.pChart = new (<any>window).Highcharts.Map(opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}
}
