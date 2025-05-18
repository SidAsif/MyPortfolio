import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const certifications = [
  {
    title: "Frontend Developer",
    issuer: "Hackerrank",
    completion: "Jun 2024",
    image: "/Home/arrow.svg",
    link: "https://www.hackerrank.com/certificates/iframe/540d5ddb1ebc",
  },
  {
    title: "JavaScript",
    issuer: "Hackerrank",
    completion: "May 2024",
    image: "/Home/arrow.svg",
    link: "https://www.hackerrank.com/certificates/iframe/a2bb427375e0",
  },
  {
    title: "React JS",
    issuer: "Teknavigators",
    completion: "Oct 2023",
    image: "/Home/arrow.svg",
    link: "https://drive.google.com/file/d/1QHFJk5pgPbv-P7GsvED67uiN7AIzQRzN/view?usp=drive_link",
  },
];

const Certifications = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
    <div className="max-w-[980px] mx-auto px-6 pt-7">
      {/* Container  */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariant}
        className="flex flex-col md:flex-row gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-[#F3F1FB]  flex-1 rounded-3xl"
            variants={boxVariant}
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button className="absolute top-4 right-4 bg-white p-2 rounded-md">
                <img
                  src={cert.image}
                  alt="arrow"
                  className="w-5 h-5 object-cover transition duration-300 hover:scale-75"
                />
              </button>
            </a>
            <h1 className="text-2xl font-semibold mb-2 pt-6">{cert.title}</h1>
            <p className="text-sm font-normal text-[#616161] mb-2">
              Issued by: {cert.issuer}
            </p>
            <p className="text-sm font-normal text-[#616161] mb-4">
              Completion: {cert.completion}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
