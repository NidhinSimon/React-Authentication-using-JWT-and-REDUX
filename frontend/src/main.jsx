import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import Profile from './screens/Profile.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import PrivateRouute from './components/PrivateRouute.jsx'





const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

<Route index={true} path ='/' element={<HomeScreen/>}/>

<Route  path ='/login' element={<LoginScreen/>}/>
<Route  path ='/register' element={<RegisterScreen/>}/>
<Route path='' element={<PrivateRouute/>}>
<Route  path ='/profile' element={<Profile/>}/>
</Route>





 

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
  </Provider>
)
