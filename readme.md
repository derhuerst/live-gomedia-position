# live-gomedia-position

**Live vehicle geolocation, taken from the [*GoMedia* on-board WiFi entertainment system](https://gomedia.io/service/entertainment-for-public-transport/).**

[![npm version](https://img.shields.io/npm/v/live-gomedia-position.svg)](https://www.npmjs.com/package/live-gomedia-position)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/live-gomedia-position.svg)
![minimum Node.js version](https://img.shields.io/node/v/live-gomedia-position.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installation

```shell
npm install live-gomedia-position
```


## Usage

`positions()` returns an [async iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) of geolocation data points.

```js
const {positions} = require('live-gomedia-position')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

for await (const pos of positions()) {
	console.log(pos)
	await sleep(5000)
}
// {
// 	latitude: 52.715446,
// 	longitude: 12.995633,
// 	speed: 27.43, // km/h
// }
// {
// 	latitude: 52.715805,
// 	longitude: 12.992863,
// 	speed: 27.323,
// }
```


## Related

- [`live-icomera-position`](https://github.com/derhuerst/live-icomera-position) – Live vehicle geolocation, taken from the on-board Icomera WiFi system.
- [`live-cd-wifi-position`](https://github.com/derhuerst/live-cd-wifi-position) – Live vehicle geolocation of Czech Railways trains, taken from the on-board WiFi system.
- [`wifi-on-ice-position-stream`](https://github.com/derhuerst/wifi-on-ice-position-stream) – A stream of positions of German Railways ICE trains, taken from the on-board WiFi.


## Contributing

If you have a question or need support using `live-gomedia-position`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/live-gomedia-position/issues).
