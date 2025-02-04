import React, { useState, useEffect } from 'react';
import './navbar.css';
import Logo from '../../assets/Logo.png'
import { DrawerBar } from '../drawer/drawer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import headphone from '../../assets/headphone.png';
import { motion } from "framer-motion";


export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 990);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(isMobile)
  return (
    <div>
      <div className='navbar'>
        <div className="left">
          <img className='logo' src={Logo} />
        </div>
        <div className="right">
          {isMobile ? (
            <div>

              <DrawerBar />
            </div>
          ) : (


            <div>

              <span className="navData">Home</span>
              <span className="navData">About</span>
              <span className="navData">Conatct</span>
              <span className="navData">Help</span>
            </div>
          )}



        </div>

      </div>
      {/* ---------------------------------------------------------- */}
      <div>
        <div className='shap-container'>

        <div className='shaper'>

        </div>
        </div>

        {/* ----------------------------- */}
        <div className='container'>

          <div className='textside'>
            <h1 className='h1'>Best & Smart Digital Product</h1>
            <h4 className='h4'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</h4>
            <Stack spacing={2} direction="row">
              <Button className='btn' variant="contained">Buy Product</Button>
            </Stack>
          </div>
          <div className="imgDiv">
            <motion.div
              animate={{ y: [0, 20, 0] }}  // Y-axis animation cycle
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <img className='img' src={headphone} />

            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}
