import React from "react";
import BeerListItem from './BeerListItem'

function BeerList(props) {
    const beers = props.data;

  return (
    <div>
      <ul>
        {
            beers.map(b => <li key={b.id}>
              <BeerListItem brand={b.brand} name={b.name} id={b.id} />
            </li>)
        }
      </ul>
    </div>
  );
}

export default BeerList;