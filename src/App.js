import React from 'react';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Next from './components/Next';
import IntroScreen from './components/IntroScreen';
import InstructionScreen from './components/InstructionScreen';
import ActivityScreen from './components/ActivityScreen';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/next',
    element:<Next/>
  },
  {
    path:'/intro',
    element:<IntroScreen/>
  },
  {
    path:'/instruction',
    element:<InstructionScreen/>
  },
  {
    path:'/activityScreen',
    element:<ActivityScreen/>
  }
])

function App() {
  return (
    <div className="w-screen h-screen">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
