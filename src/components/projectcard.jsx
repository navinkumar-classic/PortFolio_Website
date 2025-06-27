import {useState} from "react";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {AnimatePresence, motion} from "framer-motion";

function Projectcard({enter, image, title, description, link}){
    const [project , setProject ] = useState(true)

    return(
        <motion.div
            className={`md:basis-[30%] min-w-[300px] md:m-3 m-2 md:p-3 p-2 md:h-[30vh] h-[200px] rounded-md text-white relative`}
            onMouseOver={() => setProject(false)}
            onMouseLeave={() => setProject(true)}
            initial={{ x: enter, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 8,
                mass: 0.5
            }}
        >
            <div
                className="absolute inset-0 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* Black transparent gradient overlay */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-black/5 to-black/40" />



            <div className="relative z-10 flex flex-col justify-between h-[100%] px-3 pt-2">
                <div className={'ml-auto' }>
                    <AnimatePresence mode="wait">
                        {project === true ? (
                            <motion.div
                                key="collapsed"
                                initial={{ x: -10, opacity: 1 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -10, opacity: 0 }}
                                transition={{ duration: 0.1 }}
                                onClick={() => window.open(link, '_blank')}
                            >

                                <ArrowCircleRightOutlinedIcon sx={{ fontSize: 50, strokeWidth: 0.5 }} />

                            </motion.div>
                        ) : (
                            <motion.div
                                key="expanded"
                                initial={{ x: -10, opacity: 1 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -10, opacity: 0 }}
                                transition={{ duration: 0.1}}
                                onClick={() => window.open(link, '_blank')}
                            >

                                <ArrowCircleRightIcon sx={{ fontSize: 50, color: 'oklch(75% 0.183 55.934)' }} />

                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
                <AnimatePresence mode="wait">
                    {project ? (
                        <motion.div
                            key="collapsed"
                            initial={{ y: -30, opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:text-4xl text-2xl poppins-medium"
                        >
                            {title}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="expanded"
                            initial={{ y: 100, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 100, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2}}
                            className="poppins-medium backdrop-blur-md bg-gray-400/20 rounded-md md:p-4 p-2 md:px-4 px-3"
                        >
                            <div className="md:text-4xl text-2xl">{title}</div>
                            <div className="md:text-xs text-xs text-justify md:pt-4 pt-2 pb-2">
                                {description}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

        </motion.div>
    )
}

export default Projectcard