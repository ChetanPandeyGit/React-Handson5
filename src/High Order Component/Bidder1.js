import React from 'react'
import hoc from './hoc'


function Bidder1({money, func}) {
  return (
      <>
          <span>Chetan is offering ${money}</span>
          <button onClick={func}>Increase Bid</button>
      </>
  )
}

export default hoc(Bidder1)