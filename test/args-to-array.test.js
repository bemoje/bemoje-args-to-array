import argsToArray from '../src/args-to-array'

describe('argsToArray', () => {
	test('works', () => {
		expect(argsToArray(1)).toStrictEqual([1])
		expect(argsToArray(1, 's')).toStrictEqual([1, 's'])

		function argue() {
			return argsToArray(arguments)
		}
		expect(argue(1, 2, 3)).toStrictEqual([1, 2, 3])
	})
})
