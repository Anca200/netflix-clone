import React from 'react';
import Hero from '../components/Hero';
import Rows from "../components/Rows";
import requests from '../Request';

const Home = () => {
  return (
    <>
    <Hero/>
    <Rows rowID="1"  title ="Up Coming" fetchURL={requests.requestUpcoming}/>
    <Rows rowID="2" title ="Popular" fetchURL={requests.requestPopular}/>
    <Rows rowID="3" title ="Top Rated" fetchURL={requests.requestTopRated}/>
    <Rows rowID="4" title ="Action" fetchURL={requests.requestAction}/>
    <Rows rowID="5" title ="Romance" fetchURL={requests.requestRomance}/>
    </>
  )
}

export default Home