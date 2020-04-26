import argsToArray from '../src/args-to-array'

argsToArray(1)
//=> [1]

argsToArray(1, 's')
//=> [1, 's']

function argue() {
	return argsToArray(arguments)
}

argue(1, 2, 3)
//=> [1, 2, 3]
