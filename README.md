# quick-levenshtein
This library implements the edit distance algorithm( [levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance)  original operation) to predict the correct spelling


## Installation

### node.js

Install using [npm](http://npmjs.org/):

```bash
$ npm install quick-levenshtein
```
## Examples

**Default usage**

```javascript
var levenshtein = require('quick-levenshtein');

var distance = levenshtein.calculateEditDistance('kitten', 'sitting');   // 3
distance = levenshtein.calculateEditDistance('sitting', 'sitting');   // 0
```


## Contributing

If you wish to submit a pull request please update and/or create new tests for any changes


## License

MIT - see [LICENSE](https://github.com/Bdost/quick-levenshtein/blob/master/LICENSE)
