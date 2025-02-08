import React, { useState } from 'react';
import './faqs.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { motion, useInView } from "framer-motion";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import headphone2 from '../../assets/headphone2.png'

export const Faqs = () => {
    const [select_drop, setSelect_drop] = useState(1)
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <motion.div className='faqs'>
            <motion.div className='faqs_main'>
                <motion.div className='faqs_left'
                    ref={refOne}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>


                    <p className='faqs_head'>Faqs</p>
                    <h2 className='faqs_h2'>Frequently Asked Questions</h2>
                    <Box sx={{ width: '40%', padding: 2 }}>
                        <LinearProgress />
                    </Box>
                    <motion.div className='drop' onClick={() => setSelect_drop(1)}
                         ref={refOne}
                         initial={{ opacity: 0, x: -100 }}
                         animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                         transition={{ duration: .8 }}>
                        <motion.div className='drop_style' style={{ backgroundColor: select_drop == 1 ? "rgb(71, 119, 244)" : null }}>
                            <motion.div className='drop_icon'>
                                {select_drop == 1 ? (
                                    <RemoveCircleIcon className='icon' />
                                ) : (

                                    <AddCircleIcon className='icon' />
                                )}
                            </motion.div>
                            <motion.div className='drop_text'>
                                <p className='text' style={{ color: select_drop == 1 ? '#fff' : null }}> How to buy the products? # 1 </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 1 ? (
                            <motion.div >
                                <p className='para_text'>craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                            </motion.div>
                        ) : null}


                    </motion.div>

                    <motion.div className='drop' onClick={() => setSelect_drop(2)}>
                        <motion.div className='drop_style' style={{ backgroundColor: select_drop == 2 ? "rgb(71, 119, 244)" : null }}>
                            <motion.div className='drop_icon'>
                                {select_drop == 2 ? (
                                    <RemoveCircleIcon className='icon' />
                                ) : (

                                    <AddCircleIcon className='icon' />
                                )}
                            </motion.div>
                            <motion.div className='drop_text'>
                                <p className='text' style={{ color: select_drop == 2 ? '#fff' : null }}> How to buy the products? # 1 </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 2 ? (
                            <motion.div >
                                <p className='para_text'>craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                            </motion.div>
                        ) : null}


                    </motion.div>

                    <motion.div className='drop' onClick={() => setSelect_drop(3)}>
                        <motion.div className='drop_style' style={{ backgroundColor: select_drop == 3 ? "rgb(71, 119, 244)" : null }}>
                            <motion.div className='drop_icon'>
                                {select_drop == 3 ? (
                                    <RemoveCircleIcon className='icon' />
                                ) : (

                                    <AddCircleIcon className='icon' />
                                )}
                            </motion.div>
                            <motion.div className='drop_text'>
                                <p className='text' style={{ color: select_drop == 3 ? '#fff' : null }}> How to buy the products? # 1 </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 3 ? (
                            <motion.div >
                                <p className='para_text'>craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                            </motion.div>
                        ) : null}


                    </motion.div>

                </motion.div>


                <motion.div className='faqs_right'
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <img className='Faqs_headphone2' src={headphone2} alt="Headphone" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
