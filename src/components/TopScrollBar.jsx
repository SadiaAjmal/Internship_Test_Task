import React from 'react'
import { motion, useScroll } from "motion/react";

const TopScrollBar = () => {

  //top bar scroll
  const scrollYProgress = useScroll().scrollYProgress;

  return (
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className=" bg-blue-900 h-1 w-full fixed top-0 left-0 origin-left "
      ></motion.div>
  )
}

export default TopScrollBar
