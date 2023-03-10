import { useState } from 'react'
import Login from './Component/Login'
import Auth from './Component/Auth'
import DataProvider from './context/DataProvider';
import Home from './Component/Home.js'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Navbar from './Component/Navbar';
import CreatePost from './Component/Create/createPost.js'
import {Details} from './Component/details/Details'
import UpdatePost from './Component/Create/updatePost.js'

const PrivateRoute = ({ isAuthenticate, ...props }) => {
  console.log("isAuthenticate : ", isAuthenticate)
  return isAuthenticate ?
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
    : <Navigate replace to='/Auth' />
}


function App() {

  const [isAuthenticate, isUserAuthenticate] = useState(false);

  const changeAuth = (index) => {

    isUserAuthenticate(index);
    console.log(isAuthenticate);
  }

  return (
    <>

       <DataProvider>

        <BrowserRouter>
         
          <Routes>
            <Route path='/Auth' element={<Auth isUserAuthenticate={changeAuth} />} />
            <Route path='/' element={<PrivateRoute isAuthenticate={isAuthenticate}></PrivateRoute>}>


              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticate={isAuthenticate}></PrivateRoute>}>


              <Route path='/create' element={<CreatePost />} />
            </Route>
               
               
            <Route path='/details/:id' element={<PrivateRoute isAuthenticate={isAuthenticate}></PrivateRoute>}>


              <Route path='/details/:id' element={<Details />} />
            </Route>

           <Route path='/update/:id' element={<PrivateRoute isAuthenticate={isAuthenticate}></PrivateRoute>}> 
                <Route path='/update/:id' element={<UpdatePost />} />
           </Route>


          </Routes>
        </BrowserRouter> 
   
      </DataProvider>
    </>
  );
}

export default App;
