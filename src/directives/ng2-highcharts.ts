import {Directive, ElementRef, Input, OnDestroy, DoCheck} from '@angular/core';

@Directive({
	selector: '[ng2-highcharts]'
})
export class Ng2Highcharts implements OnDestroy, DoCheck {
	hostElement: ElementRef;
	pChart: HighchartsChartObject;
	currentWidth:number;
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

	reflow() {
		if(!this.pChart) return;

		if(getComputedStyle(this.hostElement.nativeElement).transitionDuration) {
			var duration = parseFloat(getComputedStyle(this.hostElement.nativeElement).transitionDuration);
			var interval = setInterval(()=>{
				if(duration < 0) clearInterval(interval);
				this.pChart.reflow();
				interval -= 50;
			},duration);
		}

		this.pChart.reflow();
	}

	ngDoCheck() {
		if(this.currentWidth != this.hostElement.nativeElement.offsetWidth) {
			this.reflow();
			this.currentWidth = this.hostElement.nativeElement.offsetWidth;
		}
	}

	ngOnDestroy() {
		if (this.pChart) {
			this.pChart.destroy();
		}
	}
}
