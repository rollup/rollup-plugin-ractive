import { extname } from 'path';
import Ractive from 'ractive';
import rcu from 'rcu';
import * as builders from 'rcu-builders';
import { createFilter } from 'rollup-pluginutils';

rcu.init( Ractive );

export default function dsv ( options = {} ) {
	const filter = createFilter( options.include, options.exclude );
	const extensions = options.extensions || [ '.html' ];
	const format = options.format || 'es6';

	return {
		name: 'ractive',

		transform ( code, id ) {
			if ( !filter( id ) ) return null;

			if ( !~extensions.indexOf( extname( id ) ) ) return null;

			const definition = rcu.parse( code, options.parseOptions );
			const module = builders[ format ]( definition, {
				preserveExtensions: true,
				sourceMap: true
			});

			return module;
		}
	};
}
