"use client"
import { assets, serviceData } from '../../assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <div className='flex flex-col gap-3 items-center my-5'>
                <h4 className='font-ovo text-lg '>What i offers</h4>
                <h1 className='font-ovo text-5xl font-bold'>My Services</h1>
                <p className='font-ovo max-w-2xl mx-auto text-md text-gray-500'>I am fullstack developer "MERN" i write clean code with good structure</p>
            </div>
            <ul className='flex lg:flex-row mx-auto flex-col gap-6 '>
                {
                    serviceData.map(({ icon, title, description, link }, index) => (
                        <li key={index}
                            className='border border-gray-400 hover:shadow-2xl hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 px-8 py-12 rounded-lg'>
                            <Image className='w-10 my-4' alt={title} src={icon} />
                            <h1 className='mb-5 text-lg text-gray-700'>{title}</h1>
                            <p className='mb-5 text-sm text-gray-600 leading-5'>{description}</p>
                            <a href={link} className='flex items-center text-sm mt-5 text-gray-400 hover:text-gray-800 gap-2'>
                                Read More
                                <ArrowRight size={16} className='w-4' />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </motion.div>
    )
}

export default Services