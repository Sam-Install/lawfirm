'use client';

import React from 'react';
import { BsPeople } from "react-icons/bs";
import { GiTimeTrap } from "react-icons/gi";
import { FaRegSmileWink } from "react-icons/fa";
import { SiSilverairways } from "react-icons/si";
import { motion } from 'framer-motion';

const Why = () => {

    const reasons = [
        {
            icon: <BsPeople />,
            title: "Professional Team",
            description: "Our attorneys are highly trained and dedicated to delivering top-notch legal services."
        },
        {
            icon: <GiTimeTrap />,
            title: "Highly Skilled/Experienced",
            description: "We have years of experience handling complex legal cases successfully."
        },
        {
            icon: <FaRegSmileWink />,
            title: "Client Satisfaction",
            description: "Your satisfaction is our priority; we provide personalized and attentive support."
        },
        {
            icon: <SiSilverairways />,
            title: "Multiple Ways",
            description: "We offer multiple approaches to resolve legal challenges efficiently and effectively."
        }
    ];

    return (
        <section className='my-20 px-4 sm:px-8 md:px-12 lg:px-24'>
            <motion.h1
                className='text-2xl lg:text-3xl font-bold text-gray-800 mb-10 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Why Choose Us For Your Next Legal Concern
            </motion.h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {reasons.map((reason, idx) => (
                    <motion.div
                        key={idx}
                        className='flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='text-4xl text-orange-500 mb-4'>{reason.icon}</div>
                        <h2 className='text-xl font-semibold mb-2'>{reason.title}</h2>
                        <p className='text-gray-600 text-sm'>{reason.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Why;
