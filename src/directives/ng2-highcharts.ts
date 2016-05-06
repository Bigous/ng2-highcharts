/// <reference path="../../typings/browser.d.ts" />
import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';

@Directive({
	selector: '[ng2-highcharts]',
	exportAs: 'ng2Highcharts'
})
export class Ng2Highcharts implements OnDestroy {
	hostElement: ElementRef;
	pChart: HighchartsChartObject;
	constructor(ele: ElementRef) {
		this.hostElement = ele;
	}

	@Input('ng2-highcharts') set options(opt: HighchartsOptions) {
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


	public get chart() : HighchartsChartObject {
		return this.pChart;
	}

	ngOnDestroy() {
		if (this.pChart) {
			this.pChart.destroy();
		}
	}
}
