import React, { useState, useEffect } from "react";
import Button from "./Button";
import _ from "lodash";


const ListGames = ({games, categories}) => {
  const [genre, setGenre] = useState([]);
  const [filteredGenre, setFilteredGenre] = useState([]);

  const handleChange = e => {
    if (e.target.checked) {
      setGenre([...genre, e.target.value]);
    } else {
      setGenre(genre.filter(id => id !== e.target.value));
    }
  };

  useEffect(() => {
    if (genre.length === 0) {
      setFilteredGenre(games);
    } else {
      setFilteredGenre(
        games.filter(categories =>
          genre.some(test => [categories.genres].flat().includes(test))
        )
      );
    }
    console.log(filteredGenre)
  }, [genre]);
  
  function onSortingAZ () {
    let sortingAzList = _.sortBy(filteredGenre, [function(item) { return item.title; }])

    setFilteredGenre(sortingAzList)
  };

  function onSortingZA () {
    let sortingZaList = _.orderBy(filteredGenre, ['title'],['desc'])

    setFilteredGenre(sortingZaList)
  };

  return (
    <>
        <div className="games-container">
            <div className="sorting">
                <Button onClick={onSortingAZ}  buttonText="A-Z" />
                <Button onClick={onSortingZA} buttonText="Z-A" />
            </div>
            <div className="checkbox-area">
                {
                  categories.map((item, index) => 
                    <label className="checkbox-item" htmlFor={item.genres} key={index}>
                      <input type="checkbox" id={item.genres} value={item.genres} onChange={handleChange}></input>
                      <span className="checkbox-label">{item.genres}</span>
                    </label>
                  )
                }

            </div>
            <div className="gamelist-area">
                {
                    filteredGenre.map((item, index) =>
                        <a href={item.steamUrl} key={index} className='gameList-item'>{item.title}</a>
                    )
                }
            </div>

        </div>
    </>
  )
}

export default ListGames