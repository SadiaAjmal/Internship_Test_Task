import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';


function AnimatedText() {
  const controls = useAnimation();
  const texts = [' Social Skills', ' Web Design', ' Marketing',' Programming']; // add more texts here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return; // add this check

    const timer = setInterval(() => {
      controls.start({
        opacity: 0,
        transition: { duration: 0.2  },
      });
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        controls.start({
          opacity: 1,
          transition: { duration: 0.2 },
        });
      }, 500);
    }, 2000); // change text every 3 seconds

    return () => clearInterval(timer);
  }, [controls, texts]);

  return (

<div className=' font-bold text-3xl lg:text-5xl lg:w-3/5 text-center lg:leading-[80px]'>
<p className="pt-10">Learn the fundamentals with our Experts in 
    <motion.span className='text-[#00CBFE]' initial={{ opacity: 0 }} animate={controls}>
       { texts[currentIndex]}
    </motion.span>
</p>
</div>

  );
}

export default AnimatedText;
