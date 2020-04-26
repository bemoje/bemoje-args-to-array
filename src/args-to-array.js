import isArguments from '@bemoje/is-arguments'

/**
 * Takes an arguments-object and returns its values in an array.
 * @param {arguments} args - the arguments-object
 * @returns {Array}
 */
export default function argsToArray() {
	const args = Object.values(arguments)
	const ret = []
	for (let arg of args) {
		if (isArguments(arg)) {
			ret.push(...Object.values(arg))
		} else {
			ret.push(arg)
		}
	}
	return ret
}
