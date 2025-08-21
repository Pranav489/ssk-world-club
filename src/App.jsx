import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
// import Home  from './Pages/Home/Home'
import PageNotFound from './Pages/ErrorPages/NotFound'
import SSKSolitaireGuestForm from './Pages/SSKSolitaireGuestForm'
import SSKWalkingVisitorForm from './Pages/SSKWalkingVisitorForm'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route path='/solitaire' element={<SSKSolitaireGuestForm/>}/>
          <Route path='/walking' element={<SSKWalkingVisitorForm/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />  
    </div>
  )
}

export default App
