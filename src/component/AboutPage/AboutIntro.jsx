import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const AboutIntro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div ref={ref} className="max-w-[980px] mx-auto px-6 pt-6">
      {/* Container  */}
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box  */}
        <motion.div className="flex-1" variants={boxVariant}>
          <img
            src="/About/mypic.jpg"
            alt="Sample"
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
        {/* Second box */}
        <motion.div
          className="p-5 md:p-14 bg-[#F3F1FB]  flex-1 rounded-3xl"
          variants={boxVariant}
        >
          <div className="flex items-center mb-4">
            <img
              src="/Home/contact.png"
              alt=""
              className="w-8 h-12 mr-4 object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 pt-4">
            Hi, I’m Md Asif Siddiqui
          </h2>
          <p className="text-[#616161] text-sm font-normal leading-relaxed">
            With several years of experience in software development, I’ve had
            the opportunity to work with diverse clients to design and build
            innovative digital products. Currently, I’m working as a software
            developer at Starteryou, a US-based startup, where I focus on
            creating scalable and user-friendly web applications. I believe in
            blending creative design thinking with practical development to
            deliver impactful solutions that enhance both user experience and
            business outcomes.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutIntro;
