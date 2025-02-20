import { motion } from 'framer-motion'
import Feature from './Feature'
import Who from "./Who"

const fadeIn ={
  hidden:{ opacity:0,y:50},
  visible:{opacity:1,y:0, transition :{duration:0.8,ease:"easeOut"}},
}


const About = () => {
  return (
    <div>
    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount: 0.2}}>
      <Feature/>
    </motion.div>
     <motion.div  variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount: 0.2}}>
        <Who/>
    </motion.div>
    </div>
  )
}

export default About