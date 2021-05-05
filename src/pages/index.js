import React from "react"
import one from '../images/one.jpeg';
import two from '../images/two.jpeg';
import three from '../images/three.jpeg'; 
import '../components/index.css';

export default function Home() {
  return (
    <div className='container'>
        <img className='one' src={one} alt='juan'></img>
        <img className='two' src={two} alt='two'></img>
        <img className='three'src={three} alt='three'></img>
    </div>
  )
}


