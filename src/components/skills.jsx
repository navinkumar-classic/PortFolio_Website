import JavaScript from '../assets/logo/js.png'
import TypeScript from '../assets/logo/ts.png'
import React from '../assets/logo/react.svg'
import Next from '../assets/logo/nextjs.svg'
import Tailwind from '../assets/logo/tailwind.png'
import Node from '../assets/logo/node.png'
import Git from '../assets/logo/git.png'
import Docker from '../assets/logo/docker.svg'
import AWS from '../assets/logo/aws.jpg'
import Mysql from '../assets/logo/mysql.svg'
import Postgres from '../assets/logo/postgreSQL.webp'
import Figma from '../assets/logo/figma.webp'
import Flask from '../assets/logo/Flask.png'
import SpringBoot from '../assets/logo/Spring_Boot.svg.png'
import Dotnet from '../assets/logo/Dotnet.png'
import Vue from '../assets/logo/Vue.js.png'
import HTML from '../assets/logo/HTML.png'
import CSS from '../assets/logo/CSS.png'
import Oracle from '../assets/logo/oracle.jpg'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {useRef} from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Skills() {
    const skillRef = useRef([]);
    skillRef.current = [];

    const categoryRef = useRef([]);
    categoryRef.current = [];

    const addToSkillRefs = (el) => {
        if (el && !skillRef.current.includes(el)) {
            skillRef.current.push(el);
        }
    };

    const addToCatRefs = (el) => {
        if (el && !categoryRef.current.includes(el)) {
            categoryRef.current.push(el);
        }
    };

    useGSAP(() => {
        skillRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        categoryRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, x: -60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        })
    }, []);
    const data = [
        {
            name: 'FRONTEND',
            tools: [
                {
                    name: 'Javascript',
                    image: JavaScript
                },
                {
                    name: 'Typescript',
                    image: TypeScript
                },
                {
                    name: 'HTML',
                    image: HTML
                },
                {
                    name: 'CSS',
                    image: CSS
                },
                {
                    name: 'React',
                    image: React,
                },
                {
                    name: 'Next.js',
                    image: Next
                },
                {
                    name: 'Vue.js',
                    image: Vue
                },
                {
                    name: 'Blazor',
                    image: Dotnet
                },
                {
                    name: 'Tailwindcss',
                    image: Tailwind
                }
            ],
        },
        {
            name: 'BACKEND',
            tools: [
                {
                    name: 'Node.js',
                    image: Node
                },
                {
                    name: 'Flask',
                    image: Flask
                },
                {
                    name: 'Spring Boot',
                    image: SpringBoot
                },
                {
                    name: 'ASP.NET',
                    image: Dotnet
                }
            ]
        },
        {
            name: 'DATABASE',
            tools: [
                {
                    name: 'PostgreSQL',
                    image: Postgres
                },
                {
                    name: 'MySQL',
                    image: Mysql
                },
                {
                    name: 'OracleSQL',
                    image: Oracle
                }
            ]
        },
        {
            name: 'DEV TOOLS',
            tools: [
                {
                    name: 'Git',
                    image: Git
                },
                {
                    name: 'Docker',
                    image: Docker
                },
                {
                    name: 'AWS',
                    image: AWS
                },
                {
                    name: 'Figma',
                    image: Figma
                }
            ]
        }
    ]
    return(
        <div className={`w-full flex flex-col md:py-20 py-14 md:pb-14 pb-9`}>

            <div className={`md:text-5xl text-4xl text-center md:pb-12 pb-8 oswald font-bold px-2`}>
                <span className={'text-orange-400'}>TECHNICAL</span> SKILLS
            </div>
                {
                    data.map((item,index) => (
                        <div key = {index} className={`text-xl poppins-regular flex md:flex-row flex-col justify-center  md:px-32 px-8 md:py-10 py-5`}>
                            <div ref={addToCatRefs} className={`flex-2/5 oswald font-bold md:text-5xl text-4xl md:pb-0 pb-9`}>
                                {item.name}
                            </div>

                            <div className={`flex-3/5 flex flex-wrap poppins-regular md:text-2xl text-xl md:ml-10 ml-0`}>
                                {
                                    item.tools.map((item,index) => (
                                        <div ref={addToSkillRefs} key = {index} className={`flex justify-center items-center m-1 pb-5 pr-5`}>
                                            <img src={item.image} alt={`i`} className={`w-8 h-8`}/> &nbsp;&nbsp;
                                            {item.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default Skills