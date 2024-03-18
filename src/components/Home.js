import React from 'react';
import SimpleSlider from './Slider';
import Category from './Category';
import Services from './Services';

const Home = () => {
  return (
    <div className='container  mt-8 '>
     <div className='flex'>
        <Category/>
        <SimpleSlider/>
     </div>
     <Services/>
    </div>
  )
}

export default Home