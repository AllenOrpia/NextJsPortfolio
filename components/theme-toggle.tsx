'use client'

import React, { useEffect, useState } from 'react';
import {  BsSun } from 'react-icons/bs';
import { BsMoonStars } from "react-icons/bs";

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('light');
    

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add("dark")
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove("dark")
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === 'dark') {
                document.documentElement.classList.add("dark")
            }
        } else if (window.matchMedia("(prefers-color-scheme:dark)").matches){
            setTheme('dark');
            document.documentElement.classList.add("dark")
        }
    }, [theme])
  return (
    <button className={`fixed bottom-8 right-8 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-125 active:scale-105 transition-all dark:bg-gray-950 dark:text-blue-300  `} onClick={toggleTheme}>

        {
            theme === 'light' ? (
                <BsSun />
            ) : (
                <BsMoonStars />
            )
        }
    </button>
  )
}
