import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Project2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const divVariants = {
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
    <motion.div
      ref={ref}
      className="max-w-[930px] lg:mx-auto  bg-[#F3F1FB]  rounded-3xl my-6 mx-6 "
      initial="hidden"
      animate={controls}
      variants={divVariants}
    >
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative px-8 pt-6">
          {/*add project link here*/}

          <a
            href="https://theworldviews.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute top-5 right-5">
              <button className="bg-white p-2 md:p-3 rounded-md md:rounded-xl">
                <img
                  src="/Home/arrow.svg"
                  alt="arrow"
                  className="w-5 h-5 md:w-6 md:h-6 object-cover hover:scale-75 transition duration-300"
                />
              </button>
            </div>
          </a>
          {/* Content */}
          <div className="mt-10">
            <div>
              <img
                src="/Project/webicon.png"
                alt="small image"
                className="w-10 h-10 mb-3"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 max-w-[400px]">
              WorldView — Explore the World, Anytime, Anywhere
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              A React web app utilizing various APIs, to provide comprehensive
              country data and worldwide news. It features an intuitive
              interface with curated country cards showcasing essential
              information.
            </p>
            <p className="text-gray-600 text-sm ">
              Full Stack<span className="px-2">-</span> Aug 2024
            </p>
          </div>
        </div>
        <div className="flex-1 h-[350px] ">
          <img
            src="/Project/Screenshot 2025-04-27 100333.png"
            alt="Project"
            className="w-full h-[350px] object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project2;
