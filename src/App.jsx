import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout'
import { Home } from './pages/home'
import { Catalog } from './pages/catalog'
import { ProductDetail } from './pages/product-detail'
import { Korzinka } from './pages/korzinka'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/catalog/:name' element={<Catalog />}/>
          <Route path='/detail/:id' element={<ProductDetail/>}/>
          <Route path='/korzinka' element={<Korzinka/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
