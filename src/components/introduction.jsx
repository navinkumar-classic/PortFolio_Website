
import Profile from '../assets/image3.png'
import {motion} from "framer-motion"

function Introduction() {
    const buttonMotionProps = {
        whileHover: {
            scale: 1.1,
            backgroundColor: "#fff",
            color: "#ff8904",
            border: "1px solid #ff8904",
        },
        whileTap: { scale: 0.9 },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        },
        className: "bg-orange-400 w-fit text-white rounded-sm py-2 px-7 text-xl cursor-pointer sm:mr-0 sm:ml-0 mr-auto ml-auto"
    };

    return(
        <div className={`flex md:flex-row flex-col w-full md:mt-14 mt-5 md:mb-14 mb-5 items-center`}>
            <div className={'md:my-10 my-5 mx-10 flex flex-col basis-1/2'}>
                <div className={`sm:text-2xl text-xl poppins-regular py-1`}>
                    Hi i am
                </div>
                <div className={`sm:text-3xl text-2xl poppins-medium text-orange-400 py-1`}>
                    Navin Kumar
                </div>
                <div className={`sm:text-7xl text-5xl poppins-bold py-1`}>
                    Full Stack
                </div>
                <div className={`sm:text-7xl text-5xl ml-auto poppins-bold py-1`}>
                    Developer
                </div>
                <div className={`sm:text-xl text-md leading-7 tracking-wide poppins-light text-justify sm:pb-12 pb-10 sm:pt-12 pt-10 w-full`}>
                    A full stack developer with a passion for building reliable and efficient web applications. Experienced
                    across frontend, backend, and cloud infrastructure, with a focus on delivering scalable, maintainable
                    solutions. Contributed to projects including data visualization tools, institutional platforms,
                    and AI-driven applications. Committed to clean architecture, clear communication, and continuous learning,
                    with a strong belief in writing code that’s both robust and easy to work with.
                </div>
                <motion.div {...buttonMotionProps} onClick={()=>{window.open('https://drive.google.com/file/d/1Mt3Tj1cnvTFQT8xD1p76DUw_WSVx9GrA/view?usp=sharing','_blank')}}>Resume</motion.div>
            </div>
            <div className={'md:m-10 m-5 basis-1/2'}>

                <img src={Profile} alt="profile" className={`w-full rounded-md`} />

            </div>
        </div>
    )
}

export default Introduction