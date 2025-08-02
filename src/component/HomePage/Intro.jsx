import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

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
      {/* Container */}
      <motion.div
        className="flex flex-col gap-6 md:flex-row"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box */}
        <motion.div
          className="p-5 md:p-14 bg-[#F3F1FB] flex-1 rounded-3xl"
          variants={boxVariant}
        >
          <div className="flex items-center mb-4">
            <div className="relative flex items-center justify-center mr-4 bg-black rounded-full w-14 h-14">
              <img
                src="/Home/userAvatar.png"
                alt="Profile"
                className="object-contain w-10 h-10 rounded-full"
              />
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Button */}
            <Link
              to="/contact"
              className="relative bg-white text-[#333] text-sm border font-medium px-2 py-2 rounded-full flex items-center bottom-[-8px] hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-400"
            >
              <p className="text-[#333]">Let&apos;s chat!</p>
              <span>
                <img
                  src="/Home/chat.png"
                  alt="Chat Icon"
                  className="object-cover w-4 h-4 ml-2 origin-top animate-swing"
                />
              </span>
            </Link>
          </div>

          <h2 className="pt-4 mb-4 text-2xl font-bold md:text-4xl">
            I’m Md Asif Siddiqui a Software Developer from India
          </h2>
          <p className="text-[#333] text-sm font-normal md:text-base md:font-medium leading-relaxed">
            With over 1+ year of hands-on experience in software development, I
            thrive on bringing concepts to life. Whether it’s crafting intuitive
            frontends or engineering robust backend systems, I enjoy building
            meaningful products that focus on usability, performance, and user
            satisfaction.
          </p>
        </motion.div>

        {/* Second box */}
        <Helmet>
          <link
            rel="preload"
            as="image"
            href="/Home/userProfile2.jpg"
            type="image/jpeg"
          />
        </Helmet>

        <motion.div className="flex-1" variants={boxVariant}>
          <img
            src="/Home/userProfile2.jpg"
            alt="Sample"
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
