# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.6.3"></a>
## [0.6.3](https://github.com/Bigous/ng2-highcharts/compare/v0.6.2...v0.6.3) (2016-11-07)

Updated the changelog to standard-version.

<a name="0.6.2"></a>
## [0.6.3](https://github.com/Bigous/ng2-highcharts/compare/v0.6.1...v0.6.2) (2016-11-07)

Fixed the use of unexported references from highcharts.d.ts

<a name="0.6.1"></a>
## [0.6.3](https://github.com/Bigous/ng2-highcharts/compare/v0.6.0...v0.6.1) (2016-11-07)

Fixed the postinstall script. Closes #49.

<a name="0.6.0"></a>
# [0.6.0](https://github.com/Bigous/ng2-highcharts/compare/v0.5.1...v0.6.0) (2016-10-21)

Added method reflow #46
chore(changelog): Changlog is now generated automatically.
chore(commit): Commits must have angular format [definitions here](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#)

<a name="0.5.1"></a>
## [0.5.1](https://github.com/Bigous/ng2-highcharts/compare/v0.5.0...v0.5.1) (2016-10-05)


<a name="0.5.0"></a>
# [0.5.0](https://github.com/Bigous/ng2-highcharts/compare/v0.4.2...v0.5.0) (2016-10-05)


<a name="0.4.2"></a>
## [0.4.2](https://github.com/Bigous/ng2-highcharts/compare/v0.4.1...v0.4.2) (2016-09-30)



<a name="0.4.1"></a>
## [0.4.1](https://github.com/Bigous/ng2-highcharts/compare/v0.4.0...v0.4.1) (2016-09-18)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/Bigous/ng2-highcharts/compare/v0.3.5...v0.4.0) (2016-09-03)

Upgrade to support Angular 2.0.0-rc.6
Module definition was created.

<a name="0.3.5"></a>
## [0.3.5](https://github.com/Bigous/ng2-highcharts/compare/v0.3.4...v0.3.5) (2016-07-26)



<a name="0.3.4"></a>
## [0.3.4](https://github.com/Bigous/ng2-highcharts/compare/v0.3.3...v0.3.4) (2016-05-12)



<a name="0.3.3"></a>
## [0.3.3](https://github.com/Bigous/ng2-highcharts/compare/v0.3.1...v0.3.3) (2016-05-11)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/Bigous/ng2-highcharts/compare/v0.3.0...v0.3.1) (2016-04-04)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/Bigous/ng2-highcharts/compare/v0.1.2...v0.3.0) (2016-04-04)

1. Exports the directive object, so you can interact with the directive inside the template without having to write code [see it better explained here](http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html)
	1. `ng2-highcharts` is exported as `ng2Highcharts`
	- `ng2-highmaps` is exported as `ng2Highmaps`
	- `ng2-highstock` is exported as `ng2Highstock`
- All the 3 directives now have the getter `chart` method. It returns the current chart object. Note that if you change the `options`, the chart will be destroyed and you will need to call chart again to get the new chart created again to interact with it.
- Readme.md was updated with an example on how to use this library with Webpack.
- Changelog.md was created.

<a name="0.1.2"></a>
## [0.1.2](https://github.com/Bigous/ng2-highcharts/compare/v0.1.1...v0.1.2) (2016-01-06)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/Bigous/ng2-highcharts/compare/0.1.1...v0.1.1) (2016-01-06)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/Bigous/ng2-highcharts/compare/0.1.0...0.1.1) (2016-01-06)



<a name="0.1.0"></a>
# 0.1.0 (2016-01-05)
