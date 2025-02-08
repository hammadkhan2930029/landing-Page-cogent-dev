import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { motion, useInView } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './newsletter.css';
export const NewsLetter = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <motion.div className='newsletter_bg'>
            <motion.div
                className='newsLetter_main'
                ref={refOne}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .8 }}>
                <span className='newsLetter'>Newsletter</span>
                <h2 className='newsLetter_h2'>Subscribe to get updates</h2>
                <Box sx={{ width: '20%', padding: 2 }}>
                    <LinearProgress />
                </Box>
                <div className='input_div'>
                    <EmailIcon  className='email_icon'/>
                    <input placeholder='Email address here'  className='newsletter_input'/>

                 <button className='newsLetter_btn'>Subscribe now</button>
                </div>

            </motion.div>

        </motion.div>
    )
}
