import {React, useState } from 'react'
import './App.module.css'
import Search from '../search/Search'
import SearchResults from '../searchResults/SearchResults'
import Playlist from '../playlist/Playlist'


function App() {


  return (
    <>
    <body>
      <h1 className='title'>Jamming</h1>
      <div className='searchContainer'>
      <Search />
      </div> 
      <div className='songReturnContainer'>
        <SearchResults />
        <Playlist />
      </div>
    </body>
    </>
  )
}

export default App
