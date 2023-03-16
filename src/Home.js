import React, { useContext } from 'react'
import { AppContext } from './Context'
import { useGlobalContext } from './Context'
import Search  from "./Search";
import Movies from "./Movies";
const Home = () => {
  return (
    <>
    <h1>Hello</h1>
    <Search/>
    <Movies/>
    </>
  )
}

export default Home