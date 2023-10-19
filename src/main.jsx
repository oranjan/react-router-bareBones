import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Vans from './components/Vans.jsx'
import Host from './components/host/Host'
import Dashboard from './components/host/Dashboard'
import HostIncome from './components/host/HostIncome'
import HostReviews from './components/host/HostReviews'
import HostVans from './components/host/HostVans'
import HostVanDetails from './components/host/HostVanDetails'
import HostOneVanDetails from './components/host/HostOneVanDetails'
import HostOneVanPhotos from './components/host/HostOneVanPhotos'


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Layout/>}>
      <Route index element ={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='vans' element={<Vans/>}/>
      <Route path='host' element={<Host/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='income' element={<HostIncome/>}/>
          <Route path='reviews' element={<HostReviews/>}/>
          <Route path='vans' element={<HostVans/>}/>
          <Route path='vans/:id' element={<HostVanDetails/>}>
            <Route index element={<HostOneVanDetails/>}/>
            <Route path='photos' element={<HostOneVanPhotos/>}/>
          </Route>
      </Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
