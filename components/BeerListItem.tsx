import React from 'react'
import Link from 'next/link'

function BeerListItem(props) {
  console.log('props :>> ', props);
  return (
    <div>
        <p>{props.brand}</p>
        <p>{props.name}</p>
        <Link href={`/beer?id=${props.id}`}><a>Read more</a></Link>
    </div>
  )
}

export default BeerListItem