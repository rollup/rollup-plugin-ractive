const assert = require( 'assert' );
const { rollup } = require( 'rollup' );
const ractive = require( '..' );

process.chdir( __dirname );

function executeBundle ( bundle ) {
	const generated = bundle.generate({
		format: 'cjs'
	});

	const fn = new Function ( 'require', 'module', 'assert', generated.code );
	let module = {};

	fn( require, module, assert );

	return module;
}

describe( 'rollup-plugin-ractive', () => {
	it( 'compiles a component', () => {
		return rollup({
			entry: 'samples/basic/main.js',
			plugins: [ ractive() ]
		}).then( executeBundle );
	});

	it( 'compiles nested components', () => {
		return rollup({
			entry: 'samples/nested/main.js',
			plugins: [ ractive() ]
		}).then( executeBundle );
	});
});
