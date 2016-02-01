import Widget from './Widget.html';

const widget = new Widget();

assert.equal( widget.toHTML(), '<p>the answer is 42</p>' );
assert.equal( widget.get( 'answer' ), 42 );
