import React from 'react'
import hoc from './hoc'

function Bidder2({money, func}) {
  return (
    <>
          <span>Tony is offering ${money}</span>
          <button onClick={func}>Increase Bid</button>
      </>
  )
}

export default hoc(Bidder2)