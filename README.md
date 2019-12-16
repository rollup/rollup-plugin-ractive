# Inactive

Ractive as a project is essentially dead, and this plugin is no longer maintained nor supported.

# rollup-plugin-ractive

Precompile Ractive components.


## Installation

```bash
npm install --save ractive # not included!
npm install --save-dev rollup-plugin-ractive
```


## Usage

```js
import { rollup } from 'rollup';
import ractive from 'rollup-plugin-ractive';

rollup({
  entry: 'src/main.js',
  plugins: [
    ractive({
      // By default, all .html files are compiled
      extensions: [ '.html', '.ract' ],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**/**.html',
      
      // Output format. When doing server-side rendering, you might need to set this
      // to "cjs" if you import other JS files in your components.
      format: 'es6',
      
      // Options passed to Ractive.parse()
      parseOptions: {}
    })
  ]
}).then(...)
```

See the [demo project](https://github.com/Rich-Harris/ractive-rollup-demo) to see how it's used.

## License

MIT
