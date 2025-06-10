import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const experiences = [
  {
    company: "Starteryou",
    position: "Software Engineer",
    duration: " Sept 2024 - Current",
    image: "/Home/starteryou.png",
  },
  {
    company: " SmartML Labs",
    position: "Frontend Developer Intern",
    duration: "July 2024 - Jun 2025",
    image: "/Home/smartml.jpg",
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    duration: "Mar 2024 - Current",
    image: "/Home/freelancer.png",
  },
];

const skills = [
  {
    img: "/Home/ml1.png",
    name: "FullStack Developer",
  },
  {
    img: "/Home/GenAi.png",
    name: "Frontend Engineer ",
  },
  {
    img: "/Home/fullstack.png",
    name: "UI/UX Design",
  },
  {
    img: "/Home/database.png",
    name: "Database",
  },
];
const Experience = () => {
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
        staggerChildren: 0.6,
      },
    },
  };
  return (
    <div ref={ref} className="max-w-[980px] mx-auto px-6">
      {/* Container  */}
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box  */}
        <motion.div
          className="p-5 md:p-10 bg-[#F3F1FB]  flex-1 rounded-3xl"
          variants={boxVariant}
        >
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            My Experiences
          </h1>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              {/* Logo + Right Side */}
              <div className="flex items-start gap-4 mb-4">
                {/* Logo */}
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="mr-4 w-12 h-12"
                />

                {/* Right Side */}
                <div className="flex flex-col w-full">
                  {/* Company */}
                  <p className="font-semibold">{exp.company}</p>

                  {/* Position + Duration */}
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-normal text-[#616161]">
                      {exp.position}
                    </p>
                    <p className="text-sm font-normal text-[#616161]">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>

              {index < experiences.length - 1 && (
                <hr className="border-t-2 border-gray-300 my-6" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Second box */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            className="p-5 md:p-10 bg-[#F3F1FB]  flex-1 rounded-3xl h-[250px] md:h-[350px]"
            variants={boxVariant}
          >
            <h1 className="text-xl  md:text-2xl  font-bold mb-4">
              Tech Expertise
            </h1>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex mb-4">
                  <img src={skill.img} alt="icon" className="mr-4 w-7 h-7" />
                  <p className="text-sm font-normal text-[#616161]">
                    {skill.name}
                  </p>
                </div>

                {index < skills.length - 1 && (
                  <hr className="border-t-2 border-gray-300 mb-4" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Third box  */}
          <motion.div
            className="p-5 md:py-8 md:px-5 bg-black text-white flex-1  hover:bg-[#333] transition duration-300 rounded-3xl  h-[250px] md:h-[300px]"
            variants={boxVariant}
          >
            <div className="flex ">
              <img
                src="/Home/contact.png"
                alt=""
                className="w-8 h-12 mr-4 object-cover"
              />
              <div className="flex flex-col text-lg md:text-2xl font-semibold mr-6">
                <p>Let&apos;s work together!</p>
                <p>Send me a message!</p>
              </div>
              <div>
                <Link
                  to="/contact"
                  aria-label="Go to Contact page"
                  className="bg-white p-2 rounded-md inline-flex items-center justify-center"
                >
                  <img
                    src="/Home/arrow.svg"
                    alt="Arrow Icon"
                    className="w-5 h-5 object-cover"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
