import React from 'react'
import Header from './Header';
import Login from './Login';
// import Browse from './Browse';

const Body = () => {
  return (
    <div className="home_page bg-cover w-full h-screen">
  <Header/>
  <Login/>
  {/* <Browse/> */}
    </div>
  )
}

export default Body;