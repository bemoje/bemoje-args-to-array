(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-arguments')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-arguments'], factory) :
	(global = global || self, global['args-to-array'] = factory(global.isArguments));
}(this, (function (isArguments) { 'use strict';

	isArguments = isArguments && Object.prototype.hasOwnProperty.call(isArguments, 'default') ? isArguments['default'] : isArguments;

	/**
	 * Takes an arguments-object and returns its values in an array.
	 * @param {arguments} args - the arguments-object
	 * @returns {Array}
	 */
	function argsToArray() {
		const args = Object.values(arguments);
		const ret = [];
		for (let arg of args) {
			if (isArguments(arg)) {
				ret.push(...Object.values(arg));
			} else {
				ret.push(arg);
			}
		}
		return ret
	}

	return argsToArray;

})));
