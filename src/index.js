import { extname } from 'path';
import Ractive from 'ractive';
import rcu from 'rcu';
import { es6 } from 'rcu-builders';
import { createFilter } from 'rollup-pluginutils';

rcu.init( Ractive );

export default function dsv ( options = {} ) {
	const filter = createFilter( options.include, options.exclude );

	const extensions = options.extensions || [ '.html' ];

	return {
		name: 'ractive',

		transform ( code, id ) {
			if ( !filter( id ) ) return null;

			if ( !~extensions.indexOf( extname( id ) ) ) return null;

			const definition = rcu.parse( code );
			const module = es6( definition, {
				preserveExtensions: true,
				sourceMap: true
			});

			return module;
		}
	};
}
