import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="px-4 sm:px-8">
            <div className="flex flex-col items-center justify-center gap-3 mt-16 mb-10 text-center">
                <a
                    target="_blank"
                    href="#"
                    className="text-xl sm:text-2xl font-semibold text-[#21033cf5]"
                >
                    Ahmed Bahget
                </a>

                <div className="flex items-center gap-2 text-sm sm:text-base">
                    <Mail
                        size={20}
                        className="w-5 sm:w-6"
                    />
                    <a
                        target="_blank"
                        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                        className="break-all sm:break-normal"
                    >
                        ahedbahget70@gmail.com
                    </a>
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-gray-300 py-6 text-sm sm:text-base">
                <p className="text-center sm:text-left">
                    ©2025 Ahmed Bahget. All rights reserved.
                </p>

                <ul className="flex items-center gap-6 sm:gap-10">
                    <li className="font-ovo">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/ahmed-bahget-50747a198/"
                            className="hover:underline hover:text-blue-500 flex gap-1"
                        >
                            <Linkedin className='w-4'/>
                            : LinkedIn
                        </a>
                    </li>
                    <li className="font-ovo">
                        <a
                            target="_blank"
                            href="https://github.com/Ahmed-bahget/"
                            className="hover:underline hover:text-blue-500 flex gap-1"
                        >
                            <Github className='w-4'/>
                            : Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
