import React from 'react';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';


const Flores = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='FLORES!!!' text='Arranjos e Flores'/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
};

export default Flores;