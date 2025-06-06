import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MainProject = () => {
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
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="max-w-[980px] mx-auto px-6 py-7">
      {/* Container  */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariant}
        className="flex flex-col md:flex-row gap-6"
      >
        {/* First box  */}
        <motion.div
          variants={boxVariant}
          className=" bg-[#F3F1FB]  flex-[2] rounded-3xl h-auto md:h-[400px]"
        >
          <img
            src="/Project/Screenshot 2025-04-27 100145.png"
            alt="Sample"
            loading="lazy"
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

        {/* Second box  */}
        <motion.div
          variants={boxVariant}
          className="p-5 md:p-8 bg-[#F3F1FB]   flex-[1] rounded-3xl h-auto md:h-[400px] relative"
        >
          <div className="absolute top-5 right-5">
            {/*add project link here  */}
            <a
              href="https://unifinderr.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white p-2 md:p-3 rounded-md md:rounded-xl ">
                <img
                  src="/Home/arrow.svg"
                  alt="arrow"
                  loading="lazy"
                  className="w-5 h-5 md:w-6 md:h-6 object-cover hover:scale-75 transition duration-300 "
                />
              </button>
            </a>
          </div>

          <div className="mt-16">
            <div>
              <img
                src="/Project/webicon.png"
                alt="small image"
                loading="lazy"
                className="w-10 h-10 mb-3"
              />
            </div>
            <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-6">
              UniFinder - Your Ultimate Campus Companion
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Machine Learning<span className="px-2">-</span> May 2020
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainProject;
