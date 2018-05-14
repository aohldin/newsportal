import React, { Component } from 'react';
import './App.css';
import News from './News/News';

// Med component som mall skapar vi en egen klass vi kallar App.
// Constructor är en funktion för att skapa vårt obejkt.(App) För att få tillgång till allt component erbjuder använder vi constructor som component har. Det gör vi genom super, och vi gör detta för att lagdra appens tillsånd
// Vi tilldelar this.state ett objekt som innehåller det som vi vill komponenten ska ha. Det är ju då news1 och 2.
// new1 hämtar in huvudrubrikerna ifrån bbc och news2 hämtar in alla artiklar ifrån techcrunch på engelska.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      }
    };
  }

  // Vi har tidigare ovan tilldelat news1 och news2 till this.state och nu refererar vi till detta i vår render method.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nyhets!</h1>
        </header>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
      </div>
    );
  }
}

export default App;
