# ng2-highcharts

## Installation

To install this library, install peer dependencies first:

```bash
$ npm install --save highcharts@^4.2.1 angular2@2.0.0-beta.0 es6-promise@^3.0.2 es6-shim@^0.33.3 reflect-metadata@0.1.2 rxjs@5.0.0-beta.0 zone.js@0.5.10
```

Also make sure you install the typings for Highcharts:

```bash
$ typings install dt~highcharts --save
```

Then, install this library running:

```bash
$ npm install --save ng2-highcharts
```

## Usage

To use this library, you must load ```angular2``` (and its dependencies) and ```highcharts```.

A running example on how to use this library can be found at [AngularShowcase](http://github.com/AngularShowcase/angular2-seed-ng2-highcharts) or [here](http://github.com/Bigous/angular2-seed-ng2-highcharts).

## Using with [Angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

* Install required packages : `highcharts` and `ng2-highcharts`
  ```
  npm install --save highcharts ng2-highcharts
  ```
* Import `Ng2Highcharts` in the component
  ```
  import { Ng2Highcharts } from 'ng2-highcharts';
  ```
* Include `Ng2Highcharts` in the directives
  ```
  @Component({
    template: require('./template.html'),
    directives: [
      Ng2Highcharts
    ]
  })
  export class UsingNg2HighchartsComponent {

  }
  ```
* Prepare Chart Data

  ```
  private chartData = {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    series: [
      {
        name: 'NC',
        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
      }, {
        name: 'OK',
        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
      }, {
        name: 'KO',
        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'VALID',
        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'CHECK',
        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'COR',
        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
      }
    ]
  };
  ```
* Update template with the required directive

```html
<div [ng2-highcharts]="chartData"></div>
```

## Usage with ionic v2 (ng2-highcharts v0.3.5)

1. install the ionic CLI, `npm i -g ionic`
2. Start a sample project, `ionic start myApp blank --v2`
3. install highcharts and ng2-highcharts, `npm install highcharts ng2-highcharts --save`
4. Add typings for highcharts, `typings install dt~highcharts --global --save`
5. Import into `app/pages/home/home.ts`.

```typescript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ng2Highcharts } from 'ng2-highcharts';
@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [Ng2Highcharts]
})
export class HomePage {
  private chartData = {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    series: [
      {
        name: 'NC',
        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
      }, {
        name: 'OK',
        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
      }, {
        name: 'KO',
        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'VALID',
        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'CHECK',
        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'COR',
        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
      }
    ]
  };
  constructor(public navCtrl: NavController) {

  }
}
```

6. Add chart to `app/pages/home/home.html`

```html
<ion-header>
  <ion-navbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <div [ng2-highcharts]="chartData"></div>
</ion-content>
```

7. The hack step. Add the following 2 lines to top of `app/app.ts` so ionic can embed highcharts correctly to your bundle:

```typescript
import * as HC from 'highcharts';
window['Highcharts'] = HC;
```

8. Run `ionic serve`, open browser.


## Changelog

Look at [changelog page](CHANGELOG.md)

## Contributors

[<img alt="Bigous" src="https://avatars.githubusercontent.com/u/6886560?v=3&s=117" width="117">](https://github.com/Bigous)[<img alt="k3nsei" src="https://avatars.githubusercontent.com/u/190422?v=3&s=117" width="117">](https://github.com/k3nsei)[<img alt="sasidhar" src="https://avatars.githubusercontent.com/u/897339?v=3&s=117" width="117">](https://github.com/sasidhar)[<img alt="josx" src="https://avatars.githubusercontent.com/u/791137?v=3&s=117" width="117">](https://github.com/josx)[<img alt="nickmorton" src="https://avatars.githubusercontent.com/u/11538384?v=3&s=117" width="117">](https://github.com/nickmorton)[<img alt="NathanWalker" src="https://avatars.githubusercontent.com/u/457187?v=3&s=117" width="117">](https://github.com/NathanWalker)

[<img alt="pleerock" src="https://avatars.githubusercontent.com/u/1753397?v=3&s=117" width="117">](https://github.com/pleerock)[<img alt="tianyi-wang-rockalltech" src="https://avatars.githubusercontent.com/u/20535575?v=3&s=117" width="117">](https://github.com/tianyi-wang-rockalltech)

## License

MIT © [Richard Natal](http://github.com/Bigous)
