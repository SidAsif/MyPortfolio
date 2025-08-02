import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Project1 = () => {
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
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative flex-1 order-2 px-8 pt-6">
          {/*add project link here*/}

          <a
            href="https://theworldviews.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute top-5 right-5">
              <button className="p-2 bg-white rounded-md md:p-3 md:rounded-xl">
                <img
                  src="/Home/arrow.svg"
                  alt="arrow"
                  className="object-cover w-5 h-5 transition duration-300 md:w-6 md:h-6 hover:scale-75"
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
            <p className="mb-4 text-sm text-gray-600">
              A full-stack React app with authentication, allowing users to
              share travel stories, interact with an AI chatbot for
              country-related queries, and bookmark content—alongside curated
              country cards and live news powered by APIs in a clean, intuitive
              UI
            </p>
            <p className="text-sm text-gray-600 ">
              Full Stack<span className="px-2">-</span> Aug 2024
            </p>
          </div>
        </div>
        <div className="flex-1 h-[350px] order-2 md:order-1">
          <img
            src="/Project/worlview.png"
            alt="Project"
            className="w-[full] h-[350px] object-cover  rounded-b-3xl md:rounded-l-3xl md:rounded-br-none p-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project1;
