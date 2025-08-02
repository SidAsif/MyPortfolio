import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Project5 = () => {
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
      className="max-w-[930px] lg:mx-auto  bg-[#F3F1FB]  rounded-3xl my-6 mx-6"
      initial="hidden"
      animate={controls}
      variants={divVariants}
    >
      {/* Container */}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex-1 order-2 h-[350px]">
          <img
            src="/Project/TailwindSight.png"
            alt="Project"
            className="object-cover w-full h-full p-0 md:rounded-r-3xl md:rounded-br-none"
          />
        </div>

        <div className="relative flex-1 px-6 pt-6 md:order-1">
          {/*add project link here*/}

          <a href="" target="_blank" rel="noopener noreferrer">
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
          <div className="order-2 mt-10 ">
            <div>
              <img
                src="/Project/puzzle.png"
                alt="small image"
                className="w-10 h-10 mb-3"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 max-w-[400px]">
              TailwindSight – Visual Utility Editor
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              A Chrome extension that visually inspects and edits Tailwind CSS
              classes directly on any webpage. It features live class
              suggestions, error highlighting for invalid classes, and instant
              class manipulation. Designed for developers and designers to
              streamline debugging and styling workflows with Tailwind CSS
            </p>
            <p className="text-sm text-gray-600 ">
              Extension<span className="px-2">-</span> Aug 2025
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project5;
