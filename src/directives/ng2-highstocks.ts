import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';

@Directive({
	selector: '[ng2-highstocks]'
})
export class Ng2Highstocks implements OnDestroy {
	hostElement: ElementRef;
	pChart: HighchartsChartObject;
	constructor(ele: ElementRef) {
		this.hostElement = ele;
	}

	@Input('ng2-highstocks') set options(opt: HighchartsOptions) {
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
			this.pChart = new (<any>Highcharts).StockChart(opt);
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
