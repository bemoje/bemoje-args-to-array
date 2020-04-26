# @bemoje/args-to-array

Takes an arguments-object and returns its values in an array.

#### Version

<span><a href="https://npmjs.org/@bemoje/args-to-array" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/args-to-array" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/args-to-array" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-args-to-array.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/args-to-array" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-args-to-array.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/args-to-array" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/args-to-array" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-args-to-array/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-args-to-array" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/args-to-array
npm install --save @bemoje/args-to-array
npm install --save-dev @bemoje/args-to-array
```

## Usage

```javascript
import argsToArray from '@bemoje/args-to-array'

argsToArray(1)
//=> [1]

argsToArray(1, 's')
//=> [1, 's']

function argue() {
	return argsToArray(arguments)
}

argue(1, 2, 3)
//=> [1, 2, 3]

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### argsToArray

Takes an arguments-object and returns its values in an array.

##### Parameters

-   `args` **arguments** the arguments-object

##### Returns
**[Array][3]** 

[1]: #argstoarray

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array