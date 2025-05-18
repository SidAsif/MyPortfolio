import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const IntroWork = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div ref={ref} className="max-w-3xl mx-auto px-4 py-10 text-center">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={boxVariant}
        className="flex flex-col items-center justify-center gap-3"
      >
        {/* Avatar with green dot */}
        <div className="relative w-14 h-14 rounded-full bg-black flex items-center justify-center mr-4">
          <img
            src="/Home/userAvatar.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-contain"
          />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
          Browse my latest work
        </h2>

        {/* Paragraph */}
        <p className="text-[#333]  text-base max-w-xl">
          Explore a collection of my most recent projects, showcasing a blend of
          creativity, functionality, and attention to detail. Each piece
          reflects my dedication to building modern, user-friendly solutions
          with clean design and robust performance.
        </p>

        {/* Button */}
        <Link to="/about">
          <button className="bg-black text-white px-6 py-4 rounded-full hover:bg-[#333] transition duration-300">
            More about me
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default IntroWork;
