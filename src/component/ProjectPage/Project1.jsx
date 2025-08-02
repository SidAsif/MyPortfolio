import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Project1 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
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
      className="max-w-[930px] lg:mx-auto bg-[#F3F1FB]  rounded-3xl my-6 mx-6"
      initial="hidden"
      animate={controls}
      variants={divVariants}
    >
      {/* Container */}
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Content */}
        <div className="relative flex-1 order-1 px-6 pt-6 md:order-2">
          {/*add project link here*/}
          <a
            href="https://unifinderr.netlify.app/"
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
          <div className="mt-10">
            <div>
              <img
                src="/Project/webicon.png"
                alt="small image"
                className="w-10 h-10 mb-3"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 max-w-[400px]">
              UniFinder - Your Ultimate Campus Companion
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              A web app aiding users in exploring nearby amenities and services
              around the Integral University campus. From top eateries to nearby
              hostels, it's your one-stop platform for essential local
              information.
            </p>
            <p className="text-sm text-gray-600 ">
              Full Stack<span className="px-2">-</span> May 2024
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 order-2 md:order-1 h-[350px]">
          <img
            src="/Project/Screenshot 2025-04-27 100145.png"
            alt="Project"
            className="w-[full] h-[350px] object-cover  rounded-b-3xl md:rounded-l-3xl md:rounded-br-none p-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project1;
