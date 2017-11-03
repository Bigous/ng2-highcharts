/**
 * Created by greg on 21/10/16.
 */
import { Input, KeyValueDiffer, ElementRef, KeyValueDiffers, OnDestroy, DoCheck } from "@angular/core";

export abstract class Ng2HighchartsBase implements OnDestroy, DoCheck {
	@Input('ng2-highcharts') options: Object /* HighchartsOptions */;
	hostElement: ElementRef;
	pChart: any;//HighchartsChartObject;
	currentWidth: number;
	currentHeight: number;
	differ: KeyValueDiffer<any, any>;
	constructor(ele: ElementRef, _differs: KeyValueDiffers) {
		this.hostElement = ele;
		this.differ = _differs.find({}).create(null);
	}

	public get chart(): any /* HighchartsChartObject */ {
		return this.pChart;
	}

	reflow() {
		if (!this.pChart || !this.options) { return; }

		if (getComputedStyle(this.hostElement.nativeElement).transitionDuration) {
			var duration = parseFloat(getComputedStyle(this.hostElement.nativeElement).transitionDuration);
			var interval = setInterval(() => {
				if (duration < 0) { clearInterval(interval); }
				duration -= 50;
				try {
					this.pChart.reflow();
				} catch (e) {
					// all right - component probably has been deleted.
					clearInterval(interval);
				}
			}, duration);
		}

		this.pChart.reflow();
	}

	ngDoCheck() {
		if (this.currentWidth !== this.hostElement.nativeElement.offsetWidth) {
			this.reflow();
			this.currentWidth = this.hostElement.nativeElement.offsetWidth;
		}
		if (this.currentHeight !== this.hostElement.nativeElement.offsetHeight) {
			this.reflow();
			this.currentHeight = this.hostElement.nativeElement.offsetHeight;
		}
		if (this.differ.diff(this.options)) {
			this.draw(this.options);
		}
	}

	ngOnDestroy() {
		if (this.pChart) {
			this.pChart.destroy();
		}
	}

	abstract draw(opt: any /*HighchartsOptions*/): void;
}
