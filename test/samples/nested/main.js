import Main from './components/Main.html';

const ractive = new Main();

assert.equal( ractive.toHTML(), '<div><p>Foo</p></div>' );
