import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const imagesPartOne = [
  "/Home/sliderimg/person-working-html-computer.jpg",
  "/Home/sliderimg/programming-background-with-person-working-with-codes-computer.jpg",
  "/Home/sliderimg/representations-user-experience-interface-design.jpg",
  "/Home/sliderimg/young-man-eyeglasses-search-ideas-care-little-baby-internet.jpg",
];

const imagesPartTwo = [
  "/Home/sliderimg/young-man-eyeglasses-search-ideas-care-little-baby-internet.jpg",
  "/Home/sliderimg/representations-user-experience-interface-design.jpg",
  "/Home/sliderimg/programming-background-with-person-working-with-codes-computer.jpg",
  "/Home/sliderimg/person-working-html-computer.jpg",
  "/Home/sliderimg/young-man-eyeglasses-search-ideas-care-little-baby-internet.jpg",
];

const BasicAbout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    if (inView) {
      controls.start("visible");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [controls, inView]);

  const isSmallScreen = windowWidth < 768;

  const divVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-[980px] mx-auto px-6 py-7"
      initial="hidden"
      animate={controls}
      variants={divVariants}
    >
      <div className="bg-[#F3F1FB]  w-full rounded-3xl flex flex-col md:flex-row items-center overflow-hidden">
        {/* Second half: appear first on small screens */}
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 order-1 md:order-2 p-8 ">
          <h2 className="text-3xl font-semibold mb-4 pr-1">
            Creating seamless, functional products that truly delight users
          </h2>

          <p className="text-[#333] text-sm font-normal md:text-base md:font-medium leading-relaxed mb-6 pr-5">
            Working with clients across various domains, I help transform
            complex ideas into intuitive digital experiences. By blending
            creative design thinking with strong development practices, I strive
            to build solutions that are both visually engaging and effective in
            solving real user problems.
          </p>

          <Link
            to="/about"
            className="bg-black text-white px-6 py-4 rounded-3xl hover:bg-[#333] transition duration-300"
          >
            More about me
          </Link>
        </div>

        {/* First half: second on small screens */}
        <div className="md:w-1/2 flex justify-between h-[430px] overflow-hidden px-8 flex-col md:flex-row order-2 md:order-1">
          <div className="md:space-y-4 md:space-x-0 sm:space-y-0 sm:space-x-4 h-full flex flex-row md:flex-col px-4 py-4 md:py-0">
            {imagesPartOne.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[90%] md:w-[100%] h-[180px] md:h-[190px] object-cover rounded-2xl px-2 md:px-0 md:mt-[-70px]"
                style={{
                  transform: isSmallScreen
                    ? `translateX(${-scrollPosition * 0.1}px)` // Move left on small screens
                    : `translateY(${scrollPosition * 0.1}px)`, // Move down on medium and large screens
                  transition: "transform 0.3s ease-out",
                }}
              />
            ))}
          </div>
          <div className="md:space-y-4 md:space-x-0 sm:space-y-0 sm:space-x-4 h-full flex flex-row md:flex-col ml-[-238px] md:ml-0">
            {imagesPartTwo.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 4}`}
                className="w-[50%] md:w-[100%] h-[180px] md:h-[200px] object-cover rounded-2xl px-2 md:px-0 md:mt-[-20px]"
                style={{
                  transform: isSmallScreen
                    ? `translateX(${scrollPosition * 0.1}px)` // Move right on small screens
                    : `translateY(${-scrollPosition * 0.1}px)`, // Move up on medium and large screens
                  transition: "transform 0.3s ease-out",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BasicAbout;
