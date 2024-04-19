import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter,redirect,RouterProvider } from 'react-router-dom'
import { Blog, Home, Login, Projects, Signup,Error, SecretZone } from './pages'
import axios from 'axios';
import { signupAction } from './pages/Auth/Signup'
import {Toaster} from 'react-hot-toast'
import { loginAction } from './pages/Auth/Login'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { homePageDataLoader } from './pages/Home'
import { verifySecretCode } from './pages/SecretZone/SecretZone'
import customFetch from './utils/customFetch'
import Personal from './pages/Personal/Personal'







function App() {

const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 1000 * 60 * 5
    }
  }
});
  
const router = createBrowserRouter([
  {
    path: '/',
    element: <>
    <Home />
    </>,
    errorElement : <Error/>,
    loader : homePageDataLoader(queryClient),
    
    children:[
      {
        path : '/blog',
        element : <Blog/>
      },
      {
        path : '/projects',
        element : <Projects/>
      },
      {
        path :'interests',
        element : <div>Interests</div>
      },
      {
        path : 'background',
        element : <div>Background</div>
      },
      {
        path : 'skills',
        element : <div>Skills</div>
      }
    ]
  },
  {
    path : '/login',
    element : <Login/>,
    action : loginAction
  },
  {
    path : '/signup',
    element : <Signup/>,
    action : signupAction
  },
  {
    path :'/custom/secret-zone',
    element : <SecretZone/>,
    action : verifySecretCode
  },
  {
    path : '/personal',
    element : <Personal />,
    errorElement : <Error/>,
    loader : async({request})=>{
      const res = await customFetch.get('/codes/verifyUser');
    
      return res.data;
    }
  }
  
])

  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    

  )
}

export default App
