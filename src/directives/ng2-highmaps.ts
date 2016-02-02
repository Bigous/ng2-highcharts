/// <reference path="../../typings/highcharts/highcharts.d.ts" />
import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
	selector: '[ng2-highmaps]'
})
export class Ng2Highmaps {
	hostElement: ElementRef;
	chart: HighchartsChartObject;
	renderTo: HighchartsOptions;
	constructor(ele: ElementRef) {
		this.hostElement = ele;
	}

	@Input('ng2-highmaps') set options(opt:HighchartsOptions) {
		if(!opt) {
			console.log('No valid options...');
			console.log(opt);
			return;
		}
		if(opt.series || opt.data) {
			if(this.chart) {
				this.chart.destroy();
			}
			if (!opt.chart) {
				opt.chart = {};
			}
			opt.chart.renderTo = this.hostElement.nativeElement;
			let HC: any = Highcharts;
			this.chart = new HC.Chart('Map', opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}
}
