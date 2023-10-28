import { useState } from "react";

import {BallCanvas} from './canvas'
import { wrapper} from "../hoc"
import { technologies} from "../constants"
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";


const Tech = () => {
  const [hover, setHover] = useState(false)

  return (
   <>
   <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learnt so far</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <br />
    <div className=' flex flex-row flex-wrap justify-center gap-10'>
     
      {technologies.map((technology)=>(
      <div id='text' className='w-28 h-28 ' key={technologies.name}
    >
        <BallCanvas icon ={technology.icon}  />
       {`${technology.name}`}
      </div>
    ))}
    </div>
    </> 
  )
}

export default wrapper(Tech, "")