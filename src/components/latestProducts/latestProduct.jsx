import React, { useEffect, useState, useRef } from 'react';
import './latestProduct.css';
import { motion, useInView } from "framer-motion";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import product_1 from '../../assets/product-1.png';
import product_2 from '../../assets/product-4.png';
import product_3 from '../../assets/product-3.png';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const cardsData = [
    {
        url: product_1,
        heading: 'Mdr-Zxy Headphone',
        data1: '2.70" HD driver unit',
        data2: 'Resonance-free housing',
        data3: 'water resistance',
        data4: '1 year guarantee',
        price: '$155'



    },
    {
        url: product_2,
        heading: 'Mdr-Zxy Headphone',
        data1: '2.70" HD driver unit',
        data2: 'Resonance-free housing',
        data3: 'water resistance',
        data4: '1 year guarantee',
        price: '$110'



    },
    {
        url: product_3,
        heading: 'Mdr-Zxy Headphone',
        data1: '2.70" HD driver unit',
        data2: 'Resonance-free housing',
        data3: 'water resistance',
        data4: '1 year guarantee',
        price: '$50'



    },

];

export const Latest = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });


    return (
        < motion.div className='latestProduct'>
            <motion.div
                ref={refOne}
                initial={{ opacity: 0, x: 100 }}
                animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .8 }}>

                <motion.div className='top_latest'>
                    <span className='topHeading1'>Latest Products</span>
                    <span className='topHeading2'>We Have Lots of Excellent And High Quality Products.</span>
                    <Box sx={{ width: '30%', padding: 2 }}>
                        <LinearProgress />
                    </Box>

                </motion.div>
                <motion.div className='productCards'
                    ref={refTwo}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}

                >
                    {cardsData.map((item, index) => (
                        <motion.div className='productCard1' >

                            <div className='img_Div_latest'>
                                <img src={item.url} className='card_image_latest' />
                            </div>
                            <div className='cardData'>
                                <h2 className="h2">{item.heading}</h2>
                                <p className='h7'>{item.data1}</p>
                                <p className='h7'>{item.data2}</p>
                                <p className='h7'>{item.data3}</p>
                                <p className='h7'>{item.data4}</p>
                                <h2>{item.price}</h2>
                                <Stack spacing={2} direction="row">
                                    <Button className='btn_latest' variant="contained">Buy now</Button>
                                </Stack>
                            </div>


                        </motion.div>
                    ))}
                   
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
