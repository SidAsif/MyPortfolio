import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    name: "WorldView — Explore the World, Anytime, Anywhere",
    leftImg: "/Project/webicon.png",
    mainImg: "/Project/worlview.png",
    year: 2025,
    link: "https://theworldviews.netlify.app/",
  },
  {
    id: 2,
    name: "Utube - Your Ultimate Video Platform",
    leftImg: "/Project/webicon.png",
    mainImg: "/Project/utube (2).png",
    year: 2024,
    link: "https://utubecloned.netlify.app/",
  },
  {
    id: 3,
    name: "FlappyBird - Tap, Fly, and Score!",
    leftImg: "/Project/webicon.png",
    mainImg: "/Project/flappy.gif",
    year: 2024,
    link: "https://sidasif.github.io/Flappy_bird/",
  },
];

const TopProjects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="max-w-[980px] mx-auto px-6 overflow-hidden">
      {/* Container */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        className="flex flex-col gap-6 md:flex-row"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={boxVariants}
            className="px-5 pt-5 md:px-7 md:pt-7 pb-0 bg-[#F3F1FB]  flex-1 rounded-3xl overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Left Image */}
              <img
                src={project.leftImg}
                alt="logo"
                loading="lazy"
                className="w-8 h-8"
              />

              {/* Right Button */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="p-2 bg-white rounded-md">
                  <img
                    src="/Home/arrow.svg"
                    loading="lazy"
                    alt="arrow"
                    className="object-cover w-5 h-5 transition duration-300 hover:scale-75"
                  />
                </button>
              </a>
            </div>

            <div className="mb-6">
              <p className="mb-2 text-lg font-semibold md:text-xl ">
                {project.name}
              </p>
              <p className="text-sm text-gray-600">
                Modern Web UI <span className="px-2">-</span> {project.year}
              </p>
            </div>

            {/* Main Image */}
            <div className="flex justify-center min-w-[320px] md:min-w-[270px]">
              <img
                src={project.mainImg}
                loading="lazy"
                alt={`${project.name} main`}
                className="object-contain h-full rounded-md"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopProjects;
