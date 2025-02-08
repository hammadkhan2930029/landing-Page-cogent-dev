import React,{useEffect,useState,useRef} from 'react'
import { motion,useInView } from "framer-motion";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import AssessmentIcon from '@mui/icons-material/Assessment';
import './chooseUs.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'






const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];
export const ChooseUs = () => {
  const refOne = React.useRef(null);
  const refTwo = React.useRef(null);

  const inViewOne = useInView(refOne, { triggerOnce: true });
  const inViewTwo = useInView(refTwo, { triggerOnce: true });
  return (
    <motion.div className='chooseUs'>
      <motion.div
        className="choseOne"
        ref={refOne}
        initial={{ opacity: 0, x: -100 }}
        animate={inViewOne ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: .8 }}>

        <span className='why'>Why Choose us</span>
        <span className='h1'>We are providing best and high quality products.</span>
        <Box sx={{ width: '40%', padding: 2 }}>
          <LinearProgress />
        </Box>
        <motion.div
          className='highQuality'
        >
          <motion.div className='shap1'>
            <motion.div className='shap2'>
              <AssessmentIcon className='icon' />

            </motion.div>

          </motion.div>
          <motion.div className='textarea'>
            <span className='h1'> High Quality</span>
            <span className='h2'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet</span>

          </motion.div>
        </motion.div>
        {/* --------------------------------------------------------- */}
        <motion.div className='highQuality'>
          <motion.div className='shap1'>
            <motion.div className='shap2'>
              <AssessmentIcon className='icon' />

            </motion.div>

          </motion.div>
          <motion.div className='textarea'>
            <span className='h1'> High Quality</span>
            <span className='h2'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet</span>

          </motion.div>
        </motion.div>
        {/* --------------------------------------------------------------- */}
        <motion.div className='highQuality'>
          <motion.div className='shap1'>
            <motion.div className='shap2'>
              <AssessmentIcon className='icon' />

            </motion.div>

          </motion.div>
          <motion.div className='textarea'>
            <span className='h1'> High Quality</span>
            <span className='h2'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet</span>

          </motion.div>
        </motion.div>

      </motion.div>
      {/* ------------------------------Choose tow------------------------------------- */}
      <motion.div className="choseTwo" 
      ref={refTwo}
        initial={{ opacity: 0, x: 100 }}
        animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}>
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='slideDiv'>

                </div>
              </div>
            ))}
          </Slide>
        </div>
      </motion.div>


    </motion.div>
  )
}
