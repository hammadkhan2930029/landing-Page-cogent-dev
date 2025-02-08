import React from 'react'
import './fullCard.css';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export const FullCard = () => {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };
    return (
        <motion.div className='fullCard'>
            <motion.div className="back"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} >
                <motion.div className="front" >
                    <motion.div className='playIcon'>
                        <div className="one">
                            <div className="two">

                                <PlayArrowIcon className='icon' />
                            </div>
                        </div>

                    </motion.div>
                    <span className='h1'>Best Product For You. Check The Demo Video.</span>
                    <Box sx={{ width: '60%', padding: 2 }}>
                        <LinearProgress />
                    </Box>
                    <span className='h4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</span>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
