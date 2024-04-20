import React from 'react';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './components/Browse';

const App = () => {
  const appRouter = createBrowserRouter([{
    path:'/',
    element:<Body/>,
  },
  {
    path:'/browse',
    element:<Browse/>
  }
])
  return (
    
    <RouterProvider router={appRouter} />
  );
}

export default App;
