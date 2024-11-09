import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import './main.js'
import Header from './ui-components/Header'
import Search from './ui-components/Search.js'
import SearchResults from './ui-components/SearchResults.js'

function App() {

  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"search"} />} />
          <Route path='/search' element={<Search />} />
          <Route path='/search/results/:query' element={<SearchResults />} />
        </Routes>

      </HashRouter>
      {/* <img src={bg_graphic}  style={{position:"fixed", bottom:"0px"}} /> */}
    </>
  )
}

export default App
