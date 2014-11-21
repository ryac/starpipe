var should = require('chai').should(),
    stringer = require('../index'),
    starme = stringer.starme,
    pipeme = stringer.pipeme;

describe('#starme', function() {

  it('adds 2 stars to the beginning and end of the string', function() {
    starme('lion').should.equal('**lion**');
  });

  it('removes spaces before and after the word', function() {
    starme('  lion  ').should.equal('**lion**');
  });

  it('removes stars before and after the word, taking spaces into account', function() {
    starme('  lion  *').should.equal('**lion**');
    starme('  lion  **************').should.equal('**lion**');
    starme('     *****      lion  *******    ').should.equal('**lion**');
  });

  it('checks to make sure only 2 stars are at the beginning and end', function() {
    starme('*lion*').should.equal('**lion**');
    starme('**lion**').should.equal('**lion**');
    starme('***lion***').should.equal('**lion**');
  });

});

describe('#pipeme', function() {

  it('adds 2 pipes to the beginning and end of the string', function() {
    pipeme('lion').should.equal('||lion||');
    pipeme('  lion  ').should.equal('||lion||');
    pipeme('  lion  |').should.equal('||lion||');
    pipeme('  lion  ||').should.equal('||lion||');
    pipeme('  lion  ||||||||||').should.equal('||lion||');
    pipeme(' ||| lion  ||||||||||').should.equal('||lion||');
  });

  it('removes spaces before and after the word', function() {
    pipeme('  lion  ').should.equal('||lion||');
  });

  it('removes pipes before and after the word, taking spaces into account', function() {
    pipeme('  lion  |').should.equal('||lion||');
    pipeme('  lion  ||||||||||||||').should.equal('||lion||');
    pipeme('     |||||      lion  |||||||    ').should.equal('||lion||');
  });

  it('checks to make sure only 2 pipes are at the beginning and end', function() {
    pipeme('|lion|').should.equal('||lion||');
    pipeme('||lion||').should.equal('||lion||');
    pipeme('|||lion|||').should.equal('||lion||');
  });

});