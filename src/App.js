import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Europe = lazy(() => import('./pages/Europe'));
const Asia = lazy(() => import('./pages/Asia'));
const NorthAmerica = lazy(() => import('./pages/NorthAmerica'));
const SouthAmerica = lazy(() => import('./pages/SouthAmerica'));
const Africa = lazy(() => import('./pages/Africa'));
const Oceania = lazy(() => import('./pages/Oceania'));
const WorldWar = lazy(() => import('./pages/WorldWar'));
const Search = lazy(() => import('./pages/Search'));
const Today = lazy(() => import('./pages/Today'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Today' element={<Today />} />
          <Route path='/Europe' element={<Europe />} />
          <Route path='/Asia' element={<Asia />} />
          <Route path='/NorthAmerica' element={<NorthAmerica />} />
          <Route path='/SouthAmerica' element={<SouthAmerica />} />
          <Route path='/Africa' element={<Africa />} />
          <Route path='/Oceania' element={<Oceania />} />
          <Route path='/WorldWar' element={<WorldWar />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/video/:videoId' element={<Video />} />
          <Route path='/search/:searchId' element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}

export default App
