# WDIO Mocha Reporter Plugin

This wdio plugin was created based on [this][0].

It is working on Webdriverio v8.

If you want to use v7 or v6, you would install below version of package.

```bash
npm install @espekkaya/wdio-mocha-reporter@1.0.1 --save-dev
```

## Installation

Firstly install in your devdependency

```bash
npm install @espekkaya/wdio-mocha-reporter --save-dev
```

## Configuration

Your wdio.conf.js file should look like this:

```js
import mochaReporter from '@espekkaya/wdio-mocha-reporter';

exports.config = {
    // ...
    reporters: [
        mochaReporter
    ],
    // ...
};
```

if you want to get aggregate result and save result into a json file;

```js
import mochaReporter from '@espekkaya/wdio-mocha-reporter';

exports.config = {
    // ...
    reporters: [
        [mochaReporter, {
            aggregateResultPah: './', // save json file path
            isResetResult: false | true, // reset values from json file (default: true)
        }],
    ],
    // ...
};
```

Example of json file;

```json
{"TestStatus":{"PASSED":0,"FAILED":0,"SKIPPED":6}}
```

----

For more information on WebdriverIO see the [homepage][1].

[0]: https://github.com/andrewkeig/wdio-cucumber-reporter
[1]: http://webdriver.io