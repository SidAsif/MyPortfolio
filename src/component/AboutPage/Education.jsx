import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const educationData = [
  {
    imgSrc: "/About/cs.webp",
    degree: "Bachelor of Engineering in Computer Science",
    university: "Integral University",
    year: "2020 - 2024",
  },
  {
    imgSrc: "/About/education.webp",
    degree: "Higher Secondary Education – Science",
    university: "Holy Angels Senior Secondary School",
    year: "2019 – 2020",
  },
  {
    imgSrc: "/About/education.webp",
    degree: "Secondary Education – Class X",
    university: "Holy Angels Senior Secondary School",
    year: "2017 - 2018",
  },
];

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
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
      {/* Container */}
      <motion.div
        className="flex flex-col gap-6 md:flex-row"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box with 40% width */}
        <motion.div
          className="w-full md:w-[35%] p-5 md:p-8 bg-[#F3F1FB]  rounded-3xl"
          variants={boxVariant}
        >
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center mr-4 bg-black rounded-full w-14 h-14">
              <img
                src="/Home/userAvatar.png"
                alt="Profile"
                loading="lazy"
                className="object-contain w-10 h-10 rounded-full"
              />
            </div>
          </div>
          <h2 className="mb-3 text-xl font-bold md:text-2xl">How I Got Here</h2>
          <p className="text-[#616161] text-sm font-normal leading-relaxed text-justify">
            I completed my high school and intermediate in my hometown, Deoria,
            before pursuing a Bachelor's in Computer Science at Integral
            University. Starting with no coding knowledge, it was challenging,
            but through practice and dedication to web development, I graduated
            with an 8.9 CGPA. Now, as a Software Development Engineer (SDE), I'm
            excited to continue learning and building impactful solutions.
          </p>
        </motion.div>

        {/* Second box with remaining width */}
        <motion.div
          className="flex-1 p-5 md:p-8 bg-[#F3F1FB]  rounded-3xl"
          variants={boxVariant}
        >
          <h2 className="pt-3 mb-8 text-xl font-bold md:text-2xl">
            My Education
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {educationData.map((education, index) => (
              <div key={index} className="flex items-start mb-6">
                <img
                  src={education.imgSrc}
                  alt="Education"
                  loading="lazy"
                  className="object-cover w-10 h-10 mr-5 rounded-md"
                />
                <div>
                  <h3 className="font-semibold mb-1.5">{education.degree}</h3>
                  <p className="text-sm text-gray-600 mb-1.5">
                    {education.university}
                  </p>
                  <p className="text-xs text-gray-500">{education.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
