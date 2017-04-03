# ng2-highcharts

[![travis build](https://img.shields.io/travis/Bigous/ng2-highcharts.svg)](https://travis-ci.org/Bigous/ng2-highcharts)

## Breaking change

* From version 0.x.x to 1.x.x:
	The `KeyValueDiffer` type has changed to `KeyValueDiffer<type, type>` and it breaks the build, so, people using angular prior to 4.0.0, should continue to use `ng2-highcharts 0.x.x`

## Installation

To install this library, install peer dependencies first:

```bash
$ npm install --save highcharts@^4.2.1
```

Also make sure you install the typings for Highcharts:

```bash
$ npm install @types/highcharts --save
```

Then, install this library running:

```bash
$ npm install --save ng2-highcharts
```

## Usage

To use this library, you must load ```angular >= 4.0.0``` (and its dependencies) and ```highcharts```.

We highly recomend the usage of a seed project or a generator. [Angular-seed](https://github.com/mgechev/angular-seed) and [Quickstart](https://github.com/angular/quickstart) are my favorite seeds and [Angular-Cli](https://cli.angular.io/) and [Ionic v2](https://ionicframework.com/) are my favorite generators, but you can use any one for your project.

A running example on how to use this library can be found at [AngularShowcase](http://github.com/AngularShowcase/angular2-seed-ng2-highcharts) or [here](http://github.com/Bigous/angular2-seed-ng2-highcharts).

More examples and detailed information on how to use the library, follow the [wiki](https://github.com/Bigous/ng2-highcharts/wiki) articles.

## Changelog

To versions until v0.6.3 look at [changelog page](CHANGELOG.md).

To posterior versions, look at [release page](https://github.com/Bigous/ng2-highcharts/releases).

## Contributors

[<img alt="Bigous" src="https://avatars.githubusercontent.com/u/6886560?v=3&s=117" width="117">](https://github.com/Bigous)[<img alt="k3nsei" src="https://avatars.githubusercontent.com/u/190422?v=3&s=117" width="117">](https://github.com/k3nsei)[<img alt="sasidhar" src="https://avatars.githubusercontent.com/u/897339?v=3&s=117" width="117">](https://github.com/sasidhar)[<img alt="josx" src="https://avatars.githubusercontent.com/u/791137?v=3&s=117" width="117">](https://github.com/josx)[<img alt="nickmorton" src="https://avatars.githubusercontent.com/u/11538384?v=3&s=117" width="117">](https://github.com/nickmorton)[<img alt="NathanWalker" src="https://avatars.githubusercontent.com/u/457187?v=3&s=117" width="117">](https://github.com/NathanWalker)

[<img alt="pleerock" src="https://avatars.githubusercontent.com/u/1753397?v=3&s=117" width="117">](https://github.com/pleerock)[<img alt="tianyi-wang-rockalltech" src="https://avatars.githubusercontent.com/u/20535575?v=3&s=117" width="117">](https://github.com/tianyi-wang-rockalltech)

## License

MIT © [Richard Natal](http://github.com/Bigous)
