import React, { Component } from 'react';
import './App.css';
import News from './News/News';

// Här skapar vi en klass som redan finns för att sedan utöka den med egna tillägg.
// Constructor är en funktion och för att använda den behöver vi super för att lagra appens tillstånd.
// Vi kallar på constructor funktionen genom att använda oss av en funktionen super.
// Vi tilldelar this.state ett object som innehåller det som vi vill komponenten ska ha.
// news1 hämtar in huvudrubrikerna ifrån bbc och news2 hämtar in alla engelska artiklar ifrån techcrunch.
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
