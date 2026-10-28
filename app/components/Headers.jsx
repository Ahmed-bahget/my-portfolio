"use client"
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { motion } from "motion/react";
import { ArrowRight } from 'lucide-react';

const Headers = () => {
    return (
        <div className='w-11/12 max-w-3xl pt-32 sm:pt-40 lg:pt-44 text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
                className='text-center relative'>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className='relative'
                >
                    <div className='absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse'></div>
                    <Image className='relative rounded-full w-40 sm:w-48 md:w-56 shadow-2xl' alt='Ahmed Bahget' src={assets.ahmed_image} />
                </motion.div>
            </motion.div>
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: .5 }}
                viewport={{ once: true }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo text-center'>Hi! I'm Ahmed Bahget
                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 20, -15, 20, 0] }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.8,
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                    style={{ transformOrigin: "bottom center" }}
                >
                    <Image
                        alt="hi hand"
                        className="w-6"
                        src={assets.hand_icon}
                    />
                </motion.span>
            </motion.h3>
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8, delay: .6 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-ovo text-gray-900'>
                Software Engineer
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className='font-ovo max-w-2xl mx-auto text-center text-md sm:text-lg text-gray-600 leading-relaxed'>
                Software Engineer with a system design and architecture mindset, building scalable, secure, and maintainable software. Experienced in designing layered architectures, modeling relational schemas, making deliberate trade-offs between storage and computation, and structuring authentication, authorization, and multi-tenant systems around clear boundaries.            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mt-6"
            >
                <motion.a
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/ahmed-bahget-50747a198/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                >
                    <Image
                        src={assets.linkedin_icon}
                        alt="LinkedIn"
                        className="w-8"
                    />
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Ahmed-bahget/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                >
                    <Image
                        src={assets.github_icon}
                        alt="GitHub"
                        className="w-14"
                    />
                </motion.a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: 1.2 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row items-center gap-4 mt-4'
            >
                <motion.a
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    href='#contact' 
                    className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 shadow-lg'
                >
                    Contact Me
                    <ArrowRight className='w-4' />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target='_blank'
                    href='https://docs.google.com/document/d/1HglXfSJTxICX9A1mdhNdK3MYnV-jYJvfmMEFgDvcxFY/edit?tab=t.0#heading=h.f0nuwjoe9axz'
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-50 transition'
                >
                    My resume
                </motion.a>
            </motion.div>
        </div>
    )
}

export default Headers;