//import { motion } from 'framer-motion'
import Feature from '@/components/Feature'
import Who from "@/components/Who"

// const fadeIn ={
//   hidden:{ opacity:0,y:50},
//   visible:{opacity:1,y:0, transition :{duration:0.8,ease:"easeOut"}},
// }


const About = () => {
  return (
    <div className='pt-20 scroll-mt-20 ' id="about">
    {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount: 0.3}}> */}
      <Feature/>
    {/* </motion.div> */}
     {/* <motion.div  variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount: 0.3}}> */}
        <Who/>
    {/* </motion.div> */}
    </div>
  )
}

export default About