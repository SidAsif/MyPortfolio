import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const experiences = [
  {
    company: "Starteryou",
    position: "Software Engineer",
    description:
      "Contributed to full-stack web application development and later led a small team to build scalable, high-performance features using modern technologies.",

    duration: "Sept 2024 - Current",
    image: "/Home/starteryou.png",
  },
  {
    company: "SmartML Labs",
    position: "Frontend Developer Intern",
    description:
      "Worked on frontend development while also contributing to UI/UX design to improve user experience and interface consistency across the platform.",

    duration: "July 2024 - Jun 2025",
    image: "/Home/smartml.jpg",
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    description:
      "Built and delivered 3 full-stack web projects and one Shopify-based eCommerce solution, handling both frontend and backend development.",
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
const MyExperience = () => {
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
    <div ref={ref} className="max-w-[980px] mx-auto px-6 py-6">
      {/* Container  */}
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box */}
        <motion.div
          className="p-5 md:p-14 bg-[#F3F1FB]  flex-1 rounded-3xl"
          variants={boxVariant}
        >
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            My Experiences
          </h1>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex mb-4">
                <img
                  src={exp.image}
                  alt={exp.company}
                  loading="lazy"
                  className="mr-4 w-10 h-10"
                />
                <div>
                  <p className="font-semibold mb-1">{exp.company}</p>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-normal text-[#616161] mr-9">
                      {exp.position}
                    </p>
                    <p className="hidden md:block text-sm font-normal text-[#616161]">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="text-sm text-[#616161] font-thicccboi pt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
              <p className="md:hidden text-sm font-normal text-[#616161] mb-4">
                {exp.duration}
              </p>
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
                  <img
                    src={skill.img}
                    alt="icon"
                    loading="lazy"
                    className="mr-4 w-7 h-7"
                  />
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

          {/* Third box */}
          <motion.div
            className="relative group h-[250px] rounded-3xl overflow-hidden"
            variants={boxVariant}
          >
            <img
              src="/About/holding-phone.avif"
              alt="LinkedIn"
              className="w-full h-full object-cover"
            />

            {/* Black overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <a
              href="https://www.linkedin.com/in/md-asif-siddiqui-157497208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/About/Linkedin_Icon.png"
                  alt="LinkedIn Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-white text-2xl font-bold">Follow me on</p>
                <p className="text-white text-2xl font-bold text-center">
                  LinkedIn
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyExperience;
