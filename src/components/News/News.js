import React, { Component } from 'react';
import NewSingle from './NewSingle';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  // Hämtar in API, gör om det till json och lägger den i variabeln 'url'
  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=3c5c8f726f4f4d87a352e63017c68eb0`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => console.log(error));
  }

  // Här refererar vi till det vi tidigare fetchat och det görs genom att använda 'this.state'.
  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;
