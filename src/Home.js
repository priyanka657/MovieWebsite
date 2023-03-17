import React, { useContext } from 'react'
import { AppContext } from './Context'
import { useGlobalContext } from './Context'
import Search  from "./Search";
import Movies from "./Movies";
const Home = () => {
  return (
    <>
    <Search/>
    <Movies/>
    </>
  )
}

export default Home