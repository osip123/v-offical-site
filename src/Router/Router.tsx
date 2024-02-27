import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Progects from '../pages/Progects/Progects'
import Price from '../pages/Prising/Price'
import Auth from '../pages/Auth/Auth'
import Cloud from '../pages/Cloud/Cloud'
import Admin from '../pages/Admin/Admin'
import OpenSource from '../pages/OpenSource/OpenSource'
import Page404 from '../pages/p404/Page404'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path='/about' element = { <About />} />
            <Route path='/progects' element = {<Progects />} />
            {/* <Route path='progects/:id' element = {} /> */}
            <Route path='/pricing' element = {<Price />} />
            {/* <Route path='/pricing/:tarif' element = {} /> */}
            <Route path='/auth' element = {<Auth />} />
            <Route path='/cloud' element = {<Cloud />} />
            <Route path='/admin' element = {<Admin />} />
            <Route path='/openSource' element = {<OpenSource />} />
            <Route path='*' element = {<Page404 />} />
        </Route>
    </Routes>
  )
}

export default Router
