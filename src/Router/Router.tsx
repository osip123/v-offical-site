import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />} />
        </Route>
    </Routes>
  )
}

export default Router
