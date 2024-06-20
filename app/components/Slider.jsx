import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import images from '@/app/components/images'

function Slider() {

  return (
    
    <div className="Slider  bg-[#3d1257] h-screen w-screen overflow-hidden relative">
    <div className='text-white text-center mt-[50px]'>hello world</div>
  
    <motion.div className='carousel'>
      <motion.div className='inner-carousel'>
         {images.map((image) =>{
          return(
           <motion.div className='item'>
           <img src={image} alt=''/>
             </motion.div>
          );
         })}
      </motion.div></motion.div>
</div>

  )
}

export default Slider