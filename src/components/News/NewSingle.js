import React from 'react';

const NewSingle = ({item}) => (
  <div className="col s6 m4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title}/>
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">Full article</a>
      </div>
    </div>
  </div>
);

export default NewSingle;

// Hur varje nyhetsruta ska vara uppbyggd.
// Rad 7: Laddar in bilden till artikeln ifrån API.
// Rad 8: Hämtar in ifrån vilken nyhetssida artikeln kommer ifrån.
// Rad 10: Hämtar in en kort beskrivning av artikelns innehåll.
// Rad 13: Länken till hela artikeln.