import React from 'react'
import SearchBox from './SearchBox'

const SearchArea = (props) => {
  return (
    <div className='searchArea'>
        <div className='searchArea-container'>
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>
            <SearchBox placeholder="Ara" data={props.data} />
        </div>
    </div>
  )
}

export default SearchArea