# Fix unusable parseInt and parseFloat

_**A modern `parseInt` for the 2️1️st Century.**_

Does 💯 look like NaN to you? Of course not.

`parseInt` and `parseNumber` is currently broken in *ALL* major web browsers. To make things worse, browser vendors have not shown any public signals fixing this critical issue. This polyfill will make life tolerable.


## Installation

You know the drill:

```sh
npm install --save fix-unusable-parse-number-polyfill

# or

yarn add fix-unusable-parse-number-polyfill
```

## Usage

Simply require/import the package early in your application:

```js
import 'fix-unusable-parse-number-polyfill';

// or

require('fix-unusable-parse-number-polyfill');
```

And then safely parse your strings:

```js
parseInt("3️⃣");  // 3
parseInt("💯");  // 100
parseFloat('0.🥇'); // 0.1
```

## TODO

- [x] Fix parseInt
- [x] Fix parseFloat
- [ ] Handle unicode better
- [ ] Make ponyfill
- [ ] RFC

## License

[MIT](LICENSE)
