
import './App.css'
import './font.css'
import Introduction from './components/introduction.jsx'
import Projects from "./components/projects.jsx"
import Timeline from "./components/timeline.jsx"
import Skills from "./components/skills.jsx"
import GitHub from './assets/logo/github-mark.svg'
import LinkedIn from './assets/logo/linkdin.png'
import Email from './assets/logo/email.png'
import {motion} from "framer-motion"

function App() {
    const iconMotionProps = {
        whileHover: { scale: 1.2 },
        whileTap: { scale: 0.9 },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        },
        className: "w-8 h-8 mb-7 cursor-pointer"
    };

    const iconMobileMotionProps = {
        whileHover: { scale: 1.2 },
        whileTap: { scale: 0.9 },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        },
        className: "w-8 h-8 mx-2 cursor-pointer"
    };

    return (
        <div className={`poppins-regular flex`}>

            <div className={'md:mx-[6%] mx-[0%] md:w-[90%] w-[100%]'}>
                <motion.div
                    className={`text-center md:hidden flex items-center justify-center md:mt-0 mt-5 md:mx-0 mx-10`}
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    <div className={`h-[4px] grow mr-1 bg-black rounded-full `}></div>
                    <motion.img src={GitHub} alt="github" {...iconMobileMotionProps} onClick={() => window.open('https://github.com/navinkumar-classic', '_blank')} />
                    <motion.img src={LinkedIn} alt="linkdin" {...iconMobileMotionProps} onClick={() => window.open('https://www.linkedin.com/in/navin-kumar-383017248/', '_blank')} />
                    <motion.img src={Email} alt="email" {...iconMobileMotionProps} onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=navinkumar.ao2022@vitstudent.ac.in', '_blank')} />
                    <div className={`h-[4px] grow ml-1 bg-black rounded-full `}></div>
                </motion.div>
                <Introduction />
                <Timeline />
                <Skills />
                <Projects />
            </div>

            <motion.div
                className="fixed left-0 top-0 h-screen z-10 md:w-[5%] w-0 hidden md:flex md:flex-col-reverse md:items-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 8,
                    mass: 0.5
                }}
            >

                <div className={`w-[4px] h-[160px] bg-black rounded-full `}></div>
                <motion.img src={GitHub} alt="github" {...iconMotionProps} onClick={() => window.open('https://github.com/navinkumar-classic', '_blank')} />
                <motion.img src={LinkedIn} alt="linkdin" {...iconMotionProps} onClick={() => window.open('https://www.linkedin.com/in/navin-kumar-383017248/', '_blank')} />
                <motion.img src={Email} alt="email" {...iconMotionProps} onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=navinkumar.ao2022@vitstudent.ac.in', '_blank')} />

            </motion.div>

            <motion.div
                className="fixed right-0 top-0 h-screen z-10 md:w-[5%] w-0 hidden md:flex flex-col items-center"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 8,
                    mass: 0.5
                }}
            >

                <div className={`w-[4px] h-[160px] bg-black rounded-full `}></div>
                <div className={`w-[4px] h-[185px] bg-transparent rounded-full`}></div>
                <div className="rotate-90 origin-center text-xl">
                    navinkumar.ao2022@vitstudent.ac.in
                </div>

            </motion.div>
        </div>
    )
}

export default App
