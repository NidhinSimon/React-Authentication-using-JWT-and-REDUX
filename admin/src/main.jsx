import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import AdminLogin from './Pages/AdminLogin.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import AddUser from './components/AddUser.jsx'
import Alluser from './components/Alluser.jsx'
import EditUser from './components/EditUser.jsx'
import Home from './components/Home.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'


const adminrouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/login' element={<AdminLogin/>}/>
      <Route  path='/' element={<Home/>}/>
<Route path='' element={<PrivateRoute/>}>

<Route  path='/alluser' element={<Alluser/>}/>
<Route path='/adduser' element={<AddUser/>}/>
<Route path='/edit/:id' element={<EditUser/>}/>

</Route>



    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
   <RouterProvider router={adminrouter}/>
  </React.StrictMode>,
  </Provider>
)
