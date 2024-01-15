import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './comps/layout/Layout';
import Home from './comps/home/Home';
import About from './comps/about/About';
import Contact from './comps/contact/Contact';

function App() {

  const router = createBrowserRouter([
  {
    Path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  }
])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
