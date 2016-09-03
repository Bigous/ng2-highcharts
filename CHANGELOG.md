# 0.4.0

Upgrade to support Angular 2.0.0-rc.6
Module definition was created.

# 0.3.2

Upgraded to support Angular 2.0.0-rc.1

# 0.3.0

1. Exports the directive object, so you can interact with the directive inside the template without having to write code [see it better explained here](http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html)
	1. `ng2-highcharts` is exported as `ng2Highcharts`
	- `ng2-highmaps` is exported as `ng2Highmaps`
	- `ng2-highstock` is exported as `ng2Highstock`
- All the 3 directives now have the getter `chart` method. It returns the current chart object. Note that if you change the `options`, the chart will be destroyed and you will need to call chart again to get the new chart created again to interact with it.
- Readme.md was updated with an example on how to use this library with Webpack.
- Changelog.md was created.
