import {useRef} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import DAV from '../assets/logo/dav.png'
import VIT from '../assets/logo/vit.png'
import Anadata from '../assets/logo/anadata.png'
import WorkIcon from '@mui/icons-material/Work';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function TimeLine() {
    const timelineRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !timelineRefs.current.includes(el)) {
            timelineRefs.current.push(el);
        }
    };

    useGSAP(() => {
        timelineRefs.current.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                y: 90,
                duration: 0.3,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, []);

    const data = [
        {
            title: 'Secondary Education(10th CBSE)',
            institution: 'Dav Boys Senior Secondary School',
            date: 'Graduated 2020',
            icon: <SchoolIcon fontSize="large"/>,
            smicon: <SchoolIcon fontSize="small"/>,
            ins_image: DAV,
            result: 'Percentage 93.6%',
            linecolor: '#000000'
        },
        {
            title: 'Senior Secondary Education(12th CBSE)',
            institution: 'Dav Boys Senior Secondary School',
            date: 'Graduated 2022',
            icon: <SchoolIcon fontSize="large"/>,
            smicon: <SchoolIcon fontSize="small"/>,
            ins_image: DAV,
            result: 'Percentage 95%',
            linecolor: '#000000'
        },
        {
            title: 'B.TECH Computer Science & Engineering',
            institution: 'VIT University, Chennai',
            date: 'Graduated 2026',
            icon: <SchoolIcon fontSize="large"/>,
            smicon: <SchoolIcon fontSize="small"/>,
            ins_image: VIT,
            result: '9.14 CGPA',
            linecolor: '#000000'
        },
        {
            title: 'Full Stack Internship',
            institution: 'Ana Data consulting Pvt Ltd',
            date: 'May 2026 - July 2026',
            icon: <WorkIcon fontSize="large"/>,
            smicon: <WorkIcon fontSize="small"/>,
            ins_image: Anadata,
            result: 'Worked on a Full Stack .NET project',
            linecolor: '#000000'
        }
    ]
    return (
        <div className={`bg-[#F2F4F7] md:py-20 py-10`}>
            <div className={`text-center font-bold oswald sm:text-5xl text-4xl md:pb-16 pb-10 px-2`}>
                <span className={`text-orange-400`}>Academic</span> &
                <span className={`text-orange-400`}> Work</span> History
            </div>
            <Timeline position="alternate" sx={{px: '0', mx: '0'}}>
                {
                    data.map((item, index) => (
                        <TimelineItem key={index} ref={addToRefs} sx={{mx:'0',px: '0'}}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0', mx: '0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                <div className={`text-lg poppins-regular-italic text-gray-400 tracking-wide leading-9`}>
                                    <img src={item.ins_image} alt="logo" className={`${index%2 === 0 ? 'ml-auto sm:mr-4 mr-1': 'mr-auto sm:ml-4 ml-1'} md:h-26 h-16`}/>
                                    <div className={`mt-2 md:text-lg sm:text-sm text-xs`}>{item.date}</div>
                                </div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: item.linecolor }}/>
                                <TimelineDot sx = {{color: item.linecolor}}>
                                    {item.icon}
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: item.linecolor}}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', mx: '0px'}}>
                                <div className={`pb-14`}>
                                    <div className={`md:text-2xl sm:text-xl text-sm poppins-medium tracking-wide`}>{item.title}</div>
                                    <div className={`md:text-lg sm:text-sm text-xs poppins-regular-italic text-gray-400 tracking-wide`}>{item.institution}</div>
                                    <div className={`md:text-xl sm:text-lg text-xs poppins-medium pt-5 tracking-wide`}>{item.result}</div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }

            </Timeline>
        </div>
    );
}

export default TimeLine;
