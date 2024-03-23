import React from 'react'
import '../styles/guest.css'
import Header from './Header';
import Footer from './footer';
import WeProvide from './weProvide';
import del from '../images/delivery.jpg';

function Index() {
  return (
    <>
    <Header role='guest'/>
    <div className='' >
      <img src={del} alt="" className='
       img-fluid' />
<WeProvide/>
</div>
<Footer/>
    </>
  )
}

export default Index