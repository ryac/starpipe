Star and Pipe
=============

Adds 2 stars or 2 pipes to a string.

## Installation

  npm install starpipe --save

## Usage

  var starpipe = require('starpipe')
      starme = starpipe.starme,
      pipeme = starpipe.pipeme;

  var str = 'some word here.',
      starred = starme(str),
      piped = pipeme(str);

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release