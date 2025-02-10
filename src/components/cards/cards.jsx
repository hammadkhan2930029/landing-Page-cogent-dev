
import React from 'react';
import './cards.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import MicIcon from '@mui/icons-material/Mic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import WifiIcon from '@mui/icons-material/Wifi';
import { motion, useInView } from "framer-motion";
import headphone2 from '../../assets/headphone2.png';

export const Cards = () => {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <div className='mainCards'>
            <motion.div
                className='section_1'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                
            >
                <motion.div className='headings'>
                    <motion.span className="h6" variants={cardVariants}>Features</motion.span>
                    <motion.span className="outstanding" variants={cardVariants}>
                        Outstanding Features
                    </motion.span>
                    <Box sx={{ width: '60%', padding: 2 }}>
                        <LinearProgress />
                    </Box>
                </motion.div>

                <div className="smallCards">
                    {[
                        { icon: <MicIcon className='cardicon' />, title: "Virtual Surround" },
                        { icon: <MusicNoteIcon className='cardicon' />, title: "Noise Cancelling" },
                        { icon: <VolumeUpIcon className='cardicon' />, title: "Sound Control" },
                        { icon: <WifiIcon className='cardicon' />, title: "Wireless Freedom" }
                    ].map((item, index) => (
                        <motion.div
                            className="card"
                            key={index}
                            variants={cardVariants}
                        >
                            <div className="shap">
                                {item.icon}
                            </div>
                            <span className='h3'>{item.title}</span>
                            <span className="cardText">
                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className='section_2'>
                <motion.div className='h_phone_div'
                 ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}

                    >
                        <img className='headphone2' src={headphone2} alt="Headphone" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className='textSection'
                    viewport={{ once: true }}
                    ref={refOne}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                >
                    <span className="sec2_text1">about product</span>
                    <span className='sec2_text2'>
                        Awesome digital product can make your life easier
                    </span>
                    <Box sx={{ width: '60%', padding: 2 }}>
                        <LinearProgress />
                    </Box>
                    <span className='sec2_text'>
                        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    </span>
                    <span className='sec2_text'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        Nullam malesuada erat ut turpis. Donec nec justo eget felis facilisis fermentum.
                    </span>
                </motion.div>
            </div>
        </div>
    );
};
