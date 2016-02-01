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
      include: 'src/components/**.html'
    })
  ]
}).then(...)
```

## License

MIT
