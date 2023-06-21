import React from 'react';
import Karmalita_pearl from '../../assets/Karmalita_pearl_03.mp4';
import './Home.css';

export default function Home() {
  return (
    <div className='content'>
       <video src={Karmalita_pearl} autoPlay  muted></video>
    </div>
  )
}
