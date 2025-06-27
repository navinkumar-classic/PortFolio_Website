import Projectcard from "./projectcard.jsx";
import {motion} from "framer-motion"
import Vibrance from '../assets/vibrance.png'
import HyperViz from '../assets/hyperviz.png'
import QuizMaster from '../assets/QuizMaster.png'

function Projects() {
    const buttonMotionProps = {
        whileHover: {
            scale: 1.1,
            backgroundColor: "#F2F4F7",
            color: "#ff8904",
            border: "1px solid #ff8904",
        },
        whileTap: { scale: 0.9 },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        },
        className: "bg-orange-400 md:mt-0 mt-5 w-fit poppins-regular text-white rounded-sm py-2 px-7 text-xl cursor-pointer"
    };

    return(
        <div className={`w-full flex flex-col overflow-hidden bg-[#F2F4F7] md:py-14 py-7`}>
            <div className={`md:text-5xl text-4xl oswald flex md:flex-row flex-col  font-bold justify-between items-center py-1 m-5 px-9`}>
                <div className={`md:pb-0 pb-2`}>PAST <span className={`text-orange-400`}>PROJECTS</span></div>
                <motion.div {...buttonMotionProps} onClick={() => window.open('https://github.com/navinkumar-classic', '_blank')}>View all</motion.div>
            </div>

            <div className={`flex md:m-5 md:mx-5 m-1 mx-3 md:flex-row flex-col flex-wrap overflow-hidden justify-center`}>
                <Projectcard
                    enter={-100}
                    image={Vibrance} title="Vibrance"
                    description="Built merch and proshow pages for Vibrance, the official college fest website, using Next.js and TypeScript."
                    link={`https://vitvibrance.com/merch`}
                />
                <Projectcard
                    enter={0}
                    image={HyperViz} title="HyperViz"
                    description="Built a website using Next.js to visualize complex ML models with an interactive UI"
                    link={`https://github.com/navinkumar-classic/hyperviz`}
                />
                <Projectcard
                    enter={100}
                    image={QuizMaster} title="QuizMaster"
                    description="This is a full-stack web application built with Flask and Jinja2, where administrators can create and schedule quizzes, and users can take them at the scheduled time."
                    link={`https://github.com/navinkumar-classic/QuizMater`}
                />
            </div>
        </div>
    )
}

export default Projects